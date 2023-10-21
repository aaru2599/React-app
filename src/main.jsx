import React from 'react'
import ReactDOM from 'react-dom/client'
// import axios from 'axios';
// import State01 from './state/State01'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js"
import Header from './components/React-Router-Dom/Header';
import App from './App';
import ProductsLayout from './components/WithoutHOC/Products.Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserLayout from './components/WithoutHOC/user.Layout ';
import ProductLayoutWithHOC from './components/WithHOC/2.Products.Layout';
import UserLayoutHOC from './components/WithHOC/2.User.layout';
import RenderButton from './components/WithHOC/3.RenderButton';
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: (<div>
      <ProductsLayout /> <hr />
      <UserLayout />
    </div>)
  },
  {
    path: "/user",
    element: <UserLayout />
  },
  {
    path: "/hoc",
    element: <div>
      <ProductLayoutWithHOC />
      <hr />
      <UserLayoutHOC />
    </div>
  },
  {
    path:"/button",
    element:<RenderButton/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.Fragment>
    <RouterProvider router={myRouter} />
  </React.Fragment>
)