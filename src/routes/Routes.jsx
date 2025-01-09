import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";

import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Shop from "../pages/Shop/Shop/Shop";


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
            }
        ]
    },
]);