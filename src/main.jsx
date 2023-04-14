import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Chart from './Pages/Chart/Chart';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage/>,
    children:[
     {
      path:'/',
      element:<Home></Home>,
      loader: () => fetch('/jobCatagory.json')
     },
     {
      path:'/chart',
      element:<Chart></Chart>
     },
     {
      path:"/blog",
      element:<Blog></Blog>
     },






    {
      path:"*",
      element:<NotFound/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
