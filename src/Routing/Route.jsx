import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import WishList from "../Pages/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'/product',
            element:<Products></Products>
        },
        {
            path:'/wishList',
            element:<WishList></WishList>
        }
    ]
    
  },
]);
