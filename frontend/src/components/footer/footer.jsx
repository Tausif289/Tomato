import React from 'react'
import "./footer.css"
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
       <div className='footer-content'>
           <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been the industry"s standerd dummy text evsr since th 1550s. when an unknown printer took a gallay of type and scrabled it to make a type specimen book </p>
               <div className='social-icon'>
                  <img src={assets.facebook_icon} alt="" />
                  <img src={assets.linkedin_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
               </div>
           </div>
           <div className="footer-content-center">
                <h2>COMPNY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
           <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-456-7890</li>
                    <li>contact@gamil.com</li>
                </ul>
           </div>
         
       </div>
       <hr />
       <p className='footer-copyright'>Copyright 2024 tomato.com -All right reserved</p>
    </div>
  )
}

export default Footer
