import usermodel from "../models/usermodel.js";


//additem to cart
const addtocart=async(req,res)=>{
    try{
       let userData=await usermodel.findById(req.body.userId);
       let cartData=await userData.cartData;
       if(!cartData[req.body.itemId]){
          cartData[req.body.itemId]=1;
       }else{
          cartData[req.body.itemId]+=1;
       }
       await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
       res.json({
        success:true,
        message:"added to cart",
        cartData:cartData
    })
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"error"
        })
    }
}

const removetfromcart=async(req,res)=>{
    try{
        let userData=await usermodel.findById(req.body.userId);
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
         }
         await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
         res.json({
            success:true,
            message:"remove to cart",
            cartData:cartData
        })
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"error"
        })
    }
}

//fetch user cart data
const getcart=async(req,res)=>{
    try{
        let userData=await usermodel.findById(req.body.userId);
        let cartData=await userData.cartData;
        res.json({
            success:true,
            cartData:cartData
        })
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"error"
        })
    }
}

export {addtocart,removetfromcart,getcart}