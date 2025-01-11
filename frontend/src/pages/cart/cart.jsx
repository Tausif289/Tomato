import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/Storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromcart, gettotalcartamount ,url} =
    useContext(StoreContext);
  const navigate = useNavigate();

  // Guard clause to handle undefined data
  if (!food_list || !cartItem) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="cart">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem?.[item._id] > 0) {
            return (
              <div>
                <div className="cart-item-title cart-items-item">
                  <img src={`${url}/image/${item.image}`}alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromcart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <p>${gettotalcartamount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${gettotalcartamount()===0?0:gettotalcartamount() + 2}</b>
            </div>
            <button onClick={() => navigate('/order')} className="payment">
              Proceed to chechout
            </button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-input">
                <input
                  className="promo-code"
                  type="text"
                  placeholder="Promo code"
                />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
