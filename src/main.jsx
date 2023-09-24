import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/About.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Academic from './components/Academic.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<About/>}/>
   <Route path='skills' element={<Skills/>}></Route>
   <Route path='projects' element={<Projects/>}></Route>
   <Route path='academics' element={<Academic/>}></Route>
  </Route>
 
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
