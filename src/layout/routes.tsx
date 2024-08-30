import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../page/home/Home";
import DashbordPage from "../page/dashbord/DashbordPage";
import UserInfo from "../components/Dashbord/user/userInfo/UserInfo";
import Register from "../page/register/Register";
import LoginPage from "../page/loginPage/LoginPage";
import Aboutus from "../page/aboutus/Aboutus";
import CreateFacility from "../components/Dashbord/admin/CreateFacility";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/aboutus',
                element: <Aboutus/>
            }
        ]
    },
    {
        path: '/dashbord',
        element: <DashbordPage/>,
        children: [
            {
                path: '/dashbord',
                element: <UserInfo/>
            },
            // admin routes 
            {
                path: '/dashbord/createFacility',
                element: <CreateFacility/> 
            }
        ]
    }
])