import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ContactUs from "../pages/ContactUs/ContactUs";

import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Shop from "../pages/Shop/Shop/Shop";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Carts from "../pages/Dashboard/Cart/Carts";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: 'contact',
                element: <ContactUs />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'shop/:category',
                element: <Shop />
            },
            {
                path:'/login',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'carts',
                element:<Carts></Carts>
            },
            {
                path:'allUsers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);