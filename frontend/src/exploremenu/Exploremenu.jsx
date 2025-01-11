import React from 'react'
import "./Exploremenu.css"
import { menu_list } from '../assets/frontend_assets/assets'

const Exploremenu = ({category,setCategory}) => {

  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a divers menu featuring a delectable arraycof dihes. Crafted with the finest ingredients and culinary experties.our missions is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_image?"All":item.menu_name)} key={index} className="explor-menu-list-items">
                             <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                             <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
