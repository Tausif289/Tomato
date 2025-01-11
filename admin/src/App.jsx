import React from 'react'
import Navbar from './component/navbar/Navbar'
import Sidebar from './component/sidebar/sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/add'
import List from './pages/list/list'
import Orders from './pages/orders/orders'
import { ToastContainer } from 'react-toastify';


const App = () => {
  const url = 'https://tomato-backend-n7t9.onrender.com';
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className='app-content'>
           <Sidebar/>
           <Routes>
              <Route path='/add' element={<Add url={url}/>}  />
              <Route path='/list' element={<List url={url}/>}  />
              <Route path='/orders' element={<Orders url={url}/>}  />
           </Routes>
      </div>
    </div>
  )
}

export default App
