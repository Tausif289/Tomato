import React, { useContext, useEffect, useState } from "react";
import "./loginpopup.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/Storecontext";
import axios from "axios";

const Loginpopup = ({ setshowlogin }) => {
  const { url, token, setToken } = useContext(StoreContext);

  const [currentstate, setCurrentstate] = useState("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onchangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onlogin = async (event) => {
    event.preventDefault();
    let newurl = url;
    if (currentstate === "login") {
      newurl += "/api/user/login";
    } else {
      newurl += "/api/user/register";
    }

    const response = await axios.post(newurl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setshowlogin(false);
    }else{
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onlogin}>
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentstate === "login" ? (
            <></>
          ) : (
            <input
              name="name"
              type="text"
              onChange={onchangehandler}
              value={data.name}
              placeholder="Enter your name"
              required
            />
          )}
          <input
            name="email"
            type="email"
            onChange={onchangehandler}
            value={data.email}
            placeholder="Enter your email"
            required
          />
          <input
            name="password"
            type="password"
            onChange={onchangehandler}
            value={data.password}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit">
          {currentstate === "Sign-up" ? "create account " : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, i agree to the term and condition of use & privacy
            policy
          </p>
        </div>
        {currentstate === "login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrentstate("sign-up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentstate("login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
