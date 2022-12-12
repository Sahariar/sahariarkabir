import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import CyberEdu from "../Pages/Projects/CyberEdu/CyberEdu";
import GameEstore from "../Pages/Projects/GameEstore/GameEstore";
import GetLooking from "../Pages/Projects/Getlooking/GetLooking";
import InterViewQuash from "../Pages/Projects/InterViewQuash/InterViewQuash";
import RecipeHut from "../Pages/Projects/RecipeHut/RecipeHut";
import Resell from "../Pages/Projects/Resell-game-console/Resell";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const route = createBrowserRouter([
    { 
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:"/home",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/projects/resell-game-console",
                element:<Resell />
            },
            {
                path:"/projects/get-looking-great",
                element:<GetLooking />
            },
            {
                path:"/projects/cyber-edu",
                element:<CyberEdu />
            },
            {
                path:"/projects/interview-quash",
                element:<InterViewQuash />
            },
            {
                path:"/projects/recipe-hut",
                element:<RecipeHut />
            },
            {
                path:"/projects/game-store",
                element:<GameEstore />
            },
            {
                path:"/register",
                element:<Register />
            },


        ]
    },
])

