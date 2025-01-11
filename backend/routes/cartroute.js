import express from "express";
import authmiddleware from "../middleware/auth.js";

import { addtocart,removetfromcart,getcart } from "../controllers/cartcontroller.js";


const cartrouter=express.Router();

cartrouter.post('/add',authmiddleware,addtocart)
cartrouter.post("/remove",authmiddleware,removetfromcart)
cartrouter.post('/get',authmiddleware,getcart);

export default cartrouter;