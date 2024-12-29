import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../../image/sports.webp'
import logo from '../../image/logonews.svg';
import { useAuth } from '../../AuthContext/AuthContext';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState(false)

  const location = useLocation();
  const dynamicDashboardPathPattern = /^\/dashbord\/datails\/[a-zA-Z0-9]+$/;
    const path = location.pathname == '/contactusPage' ||  dynamicDashboardPathPattern.test(location.pathname) || '/facilityListingPage'

    


    
  const auth = useAuth();

  console.log( 'user ase naki?', auth?.isAuthenticated)



  const handleScroll = () => {
    if (window.scrollY > 70) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);




  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 'bg-transparent'

  return (
    <div className={` ${ background? 'bg-[#121212]' : path ? 'bg-[#121212]': 'bg-transparent' }  fixed top-0 left-0 w-full z-10  py-2`}>



      <div className="bgRemove text-white flex md:items-center justify-between py-4 px-8 ">

        {/* Logo */}
        <div className="w-full md:w-1/6">
          <Link to="/">
            <img className="w-[150px] md:w-[200px]" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`hidden md:block w-5/6 md:flex md:w-auto`}>
          <ul className="flex flex-col md:flex-row uppercase w-full gap-6 md:gap-8 justify-center md:justify-between items-center">
            
            
               <li>
              <Link to="/" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                Home
              </Link>
            </li>
          


           
              <li>
              <Link to="/aboutus" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                About Us
              </Link>
            </li>
           


            
               <li>
              <Link to="/facilityListingPage" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                Facility
              </Link>
            </li>
            


            
               <li>
              <Link to="/contactusPage" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                Contact
              </Link>
            </li>
           


            {
             auth?.isAuthenticated ? <li>
              <Link to="/dashbord" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                Dashboard
              </Link>
            </li> : ''
            } 

            
                       
            {
              auth?.isAuthenticated ? <li>
              {/* <Link to="/login"> */}
                <button onClick={()=> auth.logout()} className=" text-md bg-secondary py-1 px-6 font-semibold">
                  Logout
                </button>
              {/* </Link> */}
            </li> : <li>
              <Link to="/login">
                <button className="uppercase text-md bg-secondary py-1 px-6 font-semibold">
                  Login
                </button>
              </Link>
            </li>
            }

            
            
            <li className="hover:text-[#ff4960] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span className="ml-1">EN</span>
            </li>
          </ul>
        </div>
      </div>











      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-2   sm:px-3 flex flex-col md:flex-row uppercase w-full gap-3 md:gap-8 justify-center md:justify-between items-center ">
            <li>
              <Link to="/" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/facilityListingPage" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                Facility
              </Link>
            </li>
            <li>
              <Link to="/contactusPage" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/dashbord" className="font-mark-pro text-md hover:text-[#ff4960] hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="uppercase text-md bg-secondary py-1 px-6 font-semibold">
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}



    </div>
  );
};

export default Navbar;
