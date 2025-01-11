import React, { useContext } from 'react'
import "./Fooditem.css"
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/Storecontext';

const Fooditem = ({id,name,price,description,image}) => {
    const {cartItem,addtocart,removeFromcart,url}=useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
         <img className="food-item-image" src={`${url}/image/${image}`} alt="" />
         {!cartItem[id]
          ?<img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white}></img>
          :
          <div className='food-item-counter'>
             <img onClick={()=>removeFromcart(id)} src={assets.remove_icon_red} alt="" />
             <p>{cartItem[id]}</p>
             <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
          </div>
         }
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default Fooditem
