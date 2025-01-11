import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{
   const [cartItem, setCartitem]=useState({});

   const url="https://tomato-backend-n7t9.onrender.com"
   const [token,setToken] =useState("");
   const [food_list,setFood_list]=useState([])

    const addtocart= async(itemId)=>{
        if(!cartItem[itemId]){
            setCartitem((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
    const removeFromcart=async(itemId)=>{
        setCartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    const gettotalcartamount=()=>{
        let totalAmount=0;
        for(const item in cartItem){  
            if(cartItem[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                // if (itemInfo) {
                //     totalAmount += itemInfo.price * cartItem[item];
                // } else {
                //     console.warn(`Item with ID ${item} not found in food_list.`);
                // }
                totalAmount+=itemInfo.price*cartItem[item];
            }
        }
        return totalAmount;
    }

const fetchfoodlist=async()=>{
    const response =await axios.get(url+"/api/food/list");
    setFood_list(response.data.data);
   // console.log("Food list fetched:", response.data.data);
}
const loadcartdata=async(token)=>{
    const response= await axios.post(url+"/api/cart/get",{},{headers:{token}});
    // const validCartData = Object.fromEntries(
    //     Object.entries(response.data.cartData).filter(([itemId]) =>
    //         food_list.some((item) => item._id === itemId)
    //     )
    // );
    setCartitem(response.data.cartData);
}
    useEffect(()=>{
        async function loaddata() {
            await fetchfoodlist()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadcartdata(localStorage.getItem("token"));
            }
        }
        loaddata();
    },[])

    const contextValue={
        food_list,
        cartItem,
        setCartitem,
        addtocart,
        removeFromcart,
        gettotalcartamount,
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
  
}

export default StoreContextProvider
