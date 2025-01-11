import React, { useState } from 'react'
import './home.css';
import Header from '../../components/header/header';
import Exploremenu from '../../exploremenu/Exploremenu';
import Fooddisplay from '../../components/fooddisplay/Fooddisplay';
import Appdownload from '../../components/Appdownload/Appdownload';

const Home = () => {
  const [category,setCategory]=useState("All");

  return (
    <div>
       <Header/>
       <Exploremenu category={category} setCategory={setCategory}/>
       <Fooddisplay category={category} />
       <Appdownload/>
    </div>
  )
}

export default Home;
