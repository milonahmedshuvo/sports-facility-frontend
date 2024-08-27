import { Outlet } from "react-router-dom"
import Navber from "../sheared/Navber/Navber"


const Layout = () => {

  return (
    <div>
      <Navber/>
      <Outlet/>
    </div>
  )
}

export default Layout