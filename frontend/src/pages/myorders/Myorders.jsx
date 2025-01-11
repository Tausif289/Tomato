import React, { useCallback, useContext, useEffect, useState } from 'react'
import "./Myorders.css"
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';
const Myorders = () => {
   const {url,token}=useContext(StoreContext); 
   const [data,setData]=useState([]);
   const fetchOrders =async()=>{
    const response=await axios.post(url+"/api/order/userorders",{},{
      headers:{token}
    });
    setData(response.data.data);
   }
   useEffect(()=>{
     if(token){
        fetchOrders();
     }
   },[token])
  return (
    <div className="my-oders">
        <h2>My orders</h2>
        <div className="container">
        {data && data.length > 0 ? (
            data.map((order, index) => {
                return (
                    <div key={index} className="my-orders-order">
                        <img width={70} src={assets.parcel_icon} alt="" />
                        <p>Item name :{order.items.map((item,index)=>{
                          
                          if(index===order.items.length){
                            return item.name+ ' X '+item.quantity
                          }else{
                            return (item.name+' X '+item.quantity+",")
                          }
                        })}</p>
                        <p>Amount : ${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                         <p>Status:   <span>&#x25cf;</span>  { order.status}</p>
                         <button onClick={fetchOrders}>Track order</button>
                    </div>
                );
            })
        ) : (
            <p>No orders available.</p>
        )}
    </div>
    </div>
  )
}

export default Myorders
