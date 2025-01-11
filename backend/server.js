import express from "express";
import cors from "cors";
import connectToDatabase from "./config/db.js";
import foodrouter from "./routes/foodroute.js";
import userrouter from "./routes/userroute.js";
import 'dotenv/config'
import cartrouter from "./routes/cartroute.js";
import orderrouter from "./routes/orderroute.js";



//app config
const app=express()
const port=4000;

//middeware
app.use(express.json());
app.use(cors());

//Db connection
connectToDatabase();

//api endpoints
app.use("/api/food", foodrouter);
app.use("/image" , express.static("uploads"));
app.use("/api/user",userrouter);
app.use("/api/cart",cartrouter);
app.use("/api/order",orderrouter);

app.get("/",(req,res)=>{
    res.send("working")
});

app.listen(port,()=>{
    console.log("server is running on port ",port)
});

