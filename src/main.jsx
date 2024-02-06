import React from 'react'
import ReactDOM from 'react-dom/client'
// import axios from 'axios';
// import State01 from './state/State01'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js"

import ProductsLayout from './components/WithoutHOC/Products.Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserLayout from './components/WithoutHOC/user.Layout ';
import ProductLayoutWithHOC from './components/WithHOC/2.Products.Layout';
import UserLayoutHOC from './components/WithHOC/2.User.layout';
import RenderButton from './components/WithHOC/3.RenderButton';
import ParantComponent from './components/PropsTask/ParantCompnent';
import ParentComponent from './components/PropsTask/ParentChildTask/1.ParentComponent';
import PDParentUC from './components/ContextAPI/1.parent1';
import App from './App';
import Caching from './components/Caching/Caching';
import PasswordField from './components/PasswordFieldTask/PasswordField';
import FuncComp from './components/useMemo/6.WithoutUseMemo';
import FuncCompMemo from './components/useMemo/7.WithUseMemo';
import ChildComp from './components/Practice/Child';
import ParentV1 from './components/Practice/Parant';
import Form from './components/Interview/Form';
import Armstrong from './components/Interview/Armstrong';
import UpperCase from './components/Interview/UpperCase';
import Counter from './components/CustomHooks/Counter';
import Counter2 from './components/CustomHooks/Counter2';
import ApiLayout from './components/CustomHooks/APICall/Api.Layout';
import NewApiData from './components/CustomHooks/APICall/NewApiData';
import Parant from './components/Hooks/UseCallback/Parant';
const myRouter = createBrowserRouter([
  {
    path: "/withusememo",
    element: <FuncCompMemo />
  },
  {
    path: "/counter",
    element: <div className='d-flex justify-content-between'>
      <Counter /> <Counter2/>
    </div>
  },
  {
    path: "/uppercase",
    element: <UpperCase />
  },
  {
    path: "/usecallback",
    element: <Parant />
  },
  {
    path: "/apilayout",
    element: <div>
      <ApiLayout /><NewApiData/>
    </div>
  },
  {
    path: "/armstrong",
    element: <Armstrong />
  },
  {
    path: "/form",
    element: <Form />
  },
  {
    path: "/parant",
    element: <ParentV1 />
  },
  {
    path: "/child",
    element: <ParentV1 />
  },
  {
    path: "/withoutusememo",
    element: <FuncComp />
  },
  {
    path: "/password",
    element: <PasswordField />
  },
  {
    path: "/caching",
    element: <Caching />
  },
  {
    path: "/contextapi",
    element: <PDParentUC />
  },
  {
    path: "/app",
    element: <App />
  }
  ,
  {
    path: "/",
    element: (<div>
      <ProductsLayout /> <hr />
      <UserLayout />
    </div>)
  },
  {
    path: "/compo",
    element: <ParentComponent />
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
    path: "/button",
    element: <RenderButton />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.Fragment>
    <RouterProvider router={myRouter} />
  </React.Fragment>
)