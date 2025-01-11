import express from "express";
import authmiddleware from "../middleware/auth.js";
import { listOrders, placeorder, updatestatus, userOrders, verifyOrder } from "../controllers/ordercontroller.js";


const orderrouter=express.Router();

orderrouter.post("/place",authmiddleware,placeorder);
orderrouter.post("/verify",verifyOrder);
orderrouter.post("/userorders",authmiddleware,userOrders);
orderrouter.get("/list",listOrders);
orderrouter.post('/status',updatestatus)

export default orderrouter;