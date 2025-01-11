import React from 'react'
import "./sidebar.css"
import { assets } from '../../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebar-options">
        <NavLink to='./add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add items</p>
        </NavLink>
        <NavLink to='./list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>LIst item</p>
        </NavLink>
        <NavLink to='./orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
       </div>
    </div>
  )
}

export default Sidebar
