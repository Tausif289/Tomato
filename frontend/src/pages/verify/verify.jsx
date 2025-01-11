import React, { useContext, useEffect, useState } from 'react'
import "./verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';
const Verify = () => {
    const [serchParams,setSearchParams]=useSearchParams();
    const success= serchParams.get("success");
    const orderId= serchParams.get("orderId");
    console.log(orderId);  
    const {url} =useContext(StoreContext);
    const navigate=useNavigate();
    const verifypayment=async()=>{
        const response=await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");

        }else{
            navigate("/");
        }
    }
    useEffect(()=>{
        verifypayment();
    },[])
  return (
    <div className='verify'>
        <div className='spinner'>

        </div>
    </div>
  )
}

export default Verify
