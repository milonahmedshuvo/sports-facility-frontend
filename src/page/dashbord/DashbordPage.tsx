import { Link, Outlet} from "react-router-dom";
import DashbordNavber from "../../components/Dashbord/navber/DashbordNavber";


const DashbordPage = () => {


  return (
    <div>

      <DashbordNavber />



      {/* main dashbord page  */}
      <div className="w-full flex bg-[#1D222B] ">

        <div className="leftSite border border-[#596786]  w-full lg:w-1/5 pl-5 pr-5">


        <ul>
        <li className="flex justify-between items-center my-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                <p className="text-white text-xl ml-2">Dashbord</p>
              </div>


              <button className="btn btn-xs bg-[#3B94E9] hover:bg-[#3B94E9] text-white font-bold">new</button>

            </li>
        </ul>







         {/* this starting menu items .............. */}



          <ul className="mt-10">


            <li className="flex justify-between items-center my-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                <p className="text-white text-xl ml-2">Dashbord</p>
              </div>


              <button className="btn btn-xs bg-[#3B94E9] hover:bg-[#3B94E9] text-white font-bold">new</button>

            </li>


          </ul>
        </div>













           {/*+++++++++++++++ Dashbord right site and content start ******************/}


        <div className="rightSiteContent  w-4/5 bg-[#1D222B] h-screen">
          <div className="text-[#FFFFFF] text-lg  border-t border-b border-[#596786] py-5">
            <Link to='/'>
              <span className="mx-3 underline text-blue-400 ">Home</span>
            </Link>
            <span className="">/</span>
            <span className="mx-3">Dashbord</span>
          </div>


          <p className="text-white">content</p>

           <Outlet/>


        </div>
      </div>
    </div>
  )
}

export default DashbordPage;