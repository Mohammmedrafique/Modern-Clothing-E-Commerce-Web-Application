import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./pages/Cart";

import { productsData } from "./api/Api";
import Product from "./components/Product";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

const Layout=()=>{
  return (
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      
    </div>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: productsData,

      },
      {
        path:"/product/:id",
        element:<Product/>

      },
      {
        path:"/cart",
        element:<Cart/>,
      },
    ],
  },
])

const App = () => {
  return (
    <div className="font-bodyFont">
     <RouterProvider router={router}/>
    </div>
  );
};

export default App;
