import mongoose from "mongoose";

const orderschema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    items:{
        type:Array,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    address:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        default:'food processing'
    },
    date:{
        type:Date,
        default:Date.now()
    },
    patment:{
        type:Boolean,
        default:false
    }
});


const ordermodel=mongoose.model.order || mongoose.model("order",orderschema);
export default ordermodel;