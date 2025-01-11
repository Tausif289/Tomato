import foodmodel from "../models/foodmodel.js";
import fs from "fs";


//add food item
const addfood=async(req,res)=>{
    console.log("File received:", req.file); // Debugging: Check the uploaded file
    console.log("Body received:", req.body);
     // Debugging: Check the body data
     if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Image file is required",
        });
    }

    let image_filename=`${req.file.filename}`;
    console.log('image',image_filename)
    
    const food=new foodmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,
    })
    console.log(food);
    try{
        await food.save();
        res.json({
            success:true,
            messege:"food added"
        })
    }catch(err){
        console.log(err)
        res.json({
            success:false,
            message:"Error"
        },
    )
    }
}
const listfood=async(teq,res)=>{
    try{
        const foods=await foodmodel.find({});
        res.json({
            success:true,
            data:foods
        })
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"error"
        })
    }
}
//remove food item
const removefood=async(req,res)=>{
    try{
        const food=await foodmodel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodmodel.findByIdAndDelete(req.body.id);
        res.json({
            success:true,
            message:"food deleted"
        })
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message: "error "
        })
    }
}

export {addfood,listfood,removefood};