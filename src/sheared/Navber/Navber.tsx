import { Link } from 'react-router-dom'
import logo from '../../image/sports.webp'

const Navber = () => {




  return (
    <div className="bg-[#000000] text-white flex py-7 ">

      <div className="logo w-2/5 ml-4 ">
        <Link to='/'> <img className='w-[200px]' src={logo} alt="" /> </Link>
      </div>


      <div className="manu w-3/5  mr-4">

        <ul className="flex flex-col lg:flex-row  uppercase w-3/4 justify-between ml-auto">
         <Link to='/'> <li  className='font-mark-pro hover:text-[#FF004C] hover:underline'>Home</li></Link>
          <li>
            <Link to='/aboutus' className='font-mark-pro hover:text-[#FF004C] hover:underline' >Aboutus</Link>
          </li>
          <li >
            <Link  className='font-mark-pro hover:text-[#FF004C] hover:underline' to='/facilityListingPage'>Facility</Link>
          </li>
          <li >
            <Link  className='font-mark-pro hover:text-[#FF004C] hover:underline' to='/contactusPage'>Contact</Link>
          </li>
          <li>
            <Link to='/dashbord'  className='font-mark-pro hover:text-[#FF004C] hover:underline'>dashbord</Link>
          </li>
          <li> 
            <Link to='/register'>
            <button className="uppercase bg-[#FF004C] py-1 px-6 font-semibold">Register</button> 
            </Link>
            </li>

          <li className='hover:text-[#FF004C] flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 hover:text-[#FF004C] text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg> EN
          </li>
        </ul>

      </div>
    </div>
  )
}


export default Navber