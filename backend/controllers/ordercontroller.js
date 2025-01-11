import { CurrencyCodes } from "validator/lib/isISO4217.js";
import ordermodel from "../models/ordermodel.js";
import usermodel from "../models/usermodel.js";
import Stripe from "stripe";

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);


//placing user order from frontend
const placeorder =async (req,res)=>{
    const frontend_url="http://localhost:5173"
   try{
     const neworder=new ordermodel({
        userId:req.body.userId,
        items:req.body.item,
        amount:req.body.amount,
        address:req.body.address,
        
     })
     await neworder.save();
     await usermodel.findByIdAndUpdate(req.body.userId,{cartData:{}});
     const line_items=req.body.item.map((item)=>({
        price_data:{
           currency:"inr",
           product_data:{
              name:item.name
           },
           unit_amount:item.price*100*80
        },
        quantity:item.quantity
     }))
     line_items.push({
        price_data:{
            currency:"inr",
            product_data:{
                name:"delivery charges"
            },
            unit_amount:2*100*80
        },
        quantity:1
     })
     

     const session= await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:"payment",
        success_url:`${frontend_url}/verify?success=true&orderId=${neworder._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderId=${neworder._id}` 
     })
     res.json({
        success:true,
        session_url: session.url,
    })

   }catch(err){
    console.log(err)
    res.json({
        success:false,
        message:"Error"
    },)
   }
}


const verifyOrder=async(req,res)=>{
    const {orderId,success}=req.body;
    try{
       if(success==="true"){
        await ordermodel.findByIdAndUpdate(orderId,{payment:true});
        res.json({
            success:true,
            message:"paid"
        })
       }else{
        await ordermodel.findByIdAndDelete(orderId);
        res.json({
            success:false,
            message:" not paid"
        })
       }
    }catch(err){
        console.log(err)
        res.json({
            success:false,
            message:"Error"
        },)
    }
}


//user order from frontend
const userOrders=async(req,res)=>{
    try{
       const orders=await ordermodel.find({userId:req.body.userId});
       res.json({
        success:true,
        data:orders
    })
    }catch(error){
        console.log(error)
        res.json({
            success:false,
            message:"Error"
        },)
    }
}

//listing orders for admin panel
const listOrders=async(req,res)=>{
    try{
      const orders =await ordermodel.find({})
      res.json({success:true , data:orders})
    }catch(err){
        console.log(error)
        res.json({
            success:false,
            message:"Error"
        },)
    }
}

//api for upaditing order status
const updatestatus=async(req,res)=>{
   try{
      await ordermodel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
      res.json({
        success:true,
        message:"status upadated"
      })
   }catch(err){
    console.log(error)
    res.json({
        success:false,
        message:"Error"
    },)
   }
}


export {placeorder,verifyOrder,userOrders,listOrders,updatestatus}