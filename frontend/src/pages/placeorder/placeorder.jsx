import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/Storecontext";
import "./placeorder.css";
import { Navigate, useNavigate } from "react-router-dom";
import { food_list } from "../../assets/frontend_assets/assets";
import axios from "axios";
const Placeorder = () => {
  const { gettotalcartamount,food_list, token, cartItem, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onchangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const placeOrder = async (event) => {
    event.preventDefault();
    let orderitems = [];
    food_list.forEach((item) => {
      if (cartItem[item._id] > 0) {
       
        let iteminfo = { ...item, quantity: cartItem[item._id] };
        orderitems.push(iteminfo);
      }
      console.log(orderitems);
    });
    let orderdata={
      address:data,
      item:orderitems,
      amount:gettotalcartamount()+2,
    }
    let response=await axios.post(url+'/api/order/place',orderdata,{headers:{token}});
    if(response.data.success){
      const {session_url} =response.data;
      window.location.replace(session_url);
    }else{
      alert("error")
    }
  };
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
      navigate('/cart')
    }else if(gettotalcartamount()===0){
      navigate('/cart')
    }
  })


  return (
    <div>
      <form onSubmit={placeOrder} className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-field">
            <input
              name="firstname"
              onChange={onchangehandler}
              value={data.firstname}
              type="text"
              placeholder="First name"
              required
            />
            <input
              name="lastname"
              onChange={onchangehandler}
              value={data.lastname}
              type="text"
              placeholder="Last name"
              required
            />
          </div>
          <input
            name="email"
            onChange={onchangehandler}
            value={data.email}
            type="email"
            placeholder="Email"
            required
          />
          <input
            name="street"
            onChange={onchangehandler}
            value={data.street}
            type="text"
            placeholder="Street"
            required
          />
          <div className="multi-field">
            <input
              name="city"
              onChange={onchangehandler}
              value={data.city}
              type="text"
              placeholder="city"
              required
            />
            <input
              name="state"
              onChange={onchangehandler}
              value={data.state}
              type="text"
              placeholder="State"
              required
            />
          </div>
          <div className="multi-field">
            <input
              name="zipcode"
              onChange={onchangehandler}
              value={data.zipcode}
              type="text"
              placeholder="City code"
              required
            />
            <input
              name="country"
              onChange={onchangehandler}
              value={data.country}
              type="text"
              placeholder="Country"
              required
            />
          </div>
          <input
            name="phone"
            onChange={onchangehandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
            required
          />
        </div>
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart details</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${gettotalcartamount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>${gettotalcartamount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  ${gettotalcartamount() === 0 ? 0 : gettotalcartamount() + 2}
                </b>
              </div>
              <button type="submit" className="payment">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Placeorder;
