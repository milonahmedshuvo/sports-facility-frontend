import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../page/home/Home";
import DashbordPage from "../page/dashbord/DashbordPage";
import UserInfo from "../components/Dashbord/user/userInfo/UserInfo";
import Register from "../page/register/Register";
import LoginPage from "../page/loginPage/LoginPage";
import Aboutus from "../page/aboutus/Aboutus";
import CreateFacility from "../components/Dashbord/admin/CreateFacility";
import CreateAdmin from "../components/Dashbord/admin/CreateAdmin";
import AllFacility from "../components/Dashbord/admin/AllFacility";
import FacilityListingPage from "../page/facilityListingPage/FacilityListingPage";
import DatailsPage from "../page/facilityListingPage/DatailsPage";
import ContackusPage from "../page/contackus/ContackusPage";
import BookingPage from "../page/bookingPage/BookingPage";
import UserBooking from "../components/Dashbord/user/userbooking/userBooking";
import AllBooking from "../components/Dashbord/admin/AllBooking";
import ErrorPage from "../sheared/ErrorPage";
import Manage from "../components/Dashbord/user/manage/manage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
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
            },
            {
                path: '/facilityListingPage',
                element: <FacilityListingPage/>
            },
            {
                path: '/contactusPage',
                element: <ContackusPage/>
            },
            {
                path: '/dashbord/datails/:id',
                element: <DatailsPage/>,
                loader: async ({params}) => await fetch(`https://sports-facility-backend.vercel.app/api/v1/facility/single/${params.id}`) 
            },
            {
                path: '/dashbord/bookingPage/:id',
                element: <BookingPage></BookingPage>,
                loader: async ({params}) => await fetch(`https://sports-facility-backend.vercel.app/api/v1/facility/single/${params.id}`) 
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
            {
                path: '/dashbord/user-booking',
                element: <UserBooking/>
            },
            {
                path: '/dashbord/manage',
                element: <Manage/>
            },
            // admin routes 
            {
                path: '/dashbord/createFacility',
                element: <CreateFacility/> 
            },
            {
                path: '/dashbord/createAdmin',
                element: <CreateAdmin/>
            },
            {
                path: '/dashbord/allFacility',
                element: <AllFacility/>
            },
            {
                path: '/dashbord/allBooking',
                element: <AllBooking/>
            },
            
            

        ]
    }
])