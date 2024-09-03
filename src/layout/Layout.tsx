import { Outlet } from "react-router-dom"
import Navber from "../sheared/Navber/Navber"
import Footer from "../sheared/Footer/Footer"


const Layout = () => {

  return (
    <div>
      <Navber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout