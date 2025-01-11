import React, { useContext, useState } from 'react'
import "./navbar.css"
import "./navbar.css";
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/Storecontext';
const Navbar = ({setshowlogin}) => {
  const [menu,setMenu]=useState('home');
  const nevigate= useNavigate();
  const {gettotalcartamount,token,setToken} =useContext(StoreContext)
  const logout=()=>{
       localStorage.removeItem(token);
       setToken("");
       nevigate('/');
  }
  return (
    <div className='navbar'>
      <Link to="/"><img className='navbar-logo' src={assets.logo} alt="logo" /></Link> 
      <ul className='navbar-menu'>
        <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >Home</Link>
        <a href='#exploremenu ' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""} >menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart"> <img  src={assets.basket_icon} alt="" /></Link>
          <div className={gettotalcartamount()===0?"":"dot"}></div>
        </div>
        {!token? <button onClick={()=>setshowlogin(true)}>Signin</button>:
        <div class="navbar-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className='nav-profile-dropdown'>
              <li onClick={()=>nevigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
               <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
             
          </ul>
         
          </div>}
      </div>
    </div>
  )
}

export default Navbar
