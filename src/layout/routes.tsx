import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../page/home/Home";
import DashbordPage from "../page/dashbord/DashbordPage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '/dashbord',
        element: <DashbordPage/>
    }
])