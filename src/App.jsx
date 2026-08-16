import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Navbar from './Navbar'
import './App.css'
import Layout from './Layout/Layout'
import Cart from './Cart'
import DetailCart from './DetailCart'
import Noutfount from './Noutfount'


function App() {
  const router = createBrowserRouter ([
    {path:'/' , element: <Layout/> , children:[
      {path:"" , element:<Cart/>},
      {path:"home" , element:<Cart/>},
      {path:"/detail/:id" , element:<DetailCart/>},
      {path:"*" , element:<Noutfount/>}
    ]}
  ])
  return(
    <>
     <RouterProvider router={router} />
   
    </>
  )
}

export default App
