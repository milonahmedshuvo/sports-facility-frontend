// import { Link, useLoaderData } from "react-router-dom"
// type TFacility = {
//   data: {
//     name: string;
//   description: string;
//   pricePerHour: number;
//   location: string,
//   isDeleted: boolean,
//   image?: string,
//   _id: string
//   }
// }




// const DatailsPage = () => {
//        const  data  = useLoaderData() as TFacility
//       //  console.log("data", data.data.description)




//   return (
//     <div className="text-white ">
//       <div className='w-1/3 mx-auto pt-28'>

//       <img className="" src={data?.data?.image} alt="" />
//         <p className="text-xl font-semibold my-1 text-white mt-1 mb-2"> {data?.data?.name} </p>
//         <p className="text-white "> {data?.data?.description} </p>
//         <p className="text-white">Price: $ {data?.data?.pricePerHour} </p>

//           <Link to={`/dashbord/bookingPage/${data.data._id}`} >                     
//         <button className='btn btn-sm uppercase font-semibold bg-secondary hover:bg-secondary border-secondary mt-6 hover:text-white text-white w-full'>Book Now</button>
//         </Link>             


//             </div>
//     </div>
//   )
// }

// export default DatailsPage




// import 'react-datepicker/dist/react-datepicker.css';
import { BsSignNoParking } from 'react-icons/bs';
import { GiBed } from 'react-icons/gi';
import { LuCalendarDays } from 'react-icons/lu';
import { MdAssuredWorkload } from 'react-icons/md';
import { VscKey } from 'react-icons/vsc';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from "react-router-dom"
type TFacility = {
  data: {
    name: string;
    description: string;
    pricePerHour: number;
    location: string,
    isDeleted: boolean,
    image?: string,
    _id: string
  }
}

const DatailsPage = () => {
  const data = useLoaderData() as TFacility
  //  console.log("data", data.data.description)
  // const location = useLocation()

























  return (
    <div className='px-6 mt-36 bg-white pb-32'>

      <div>
        <h1 className="text-xl md:text-3xl font-bold text-[#4F5465]"> {data?.data?.name} </h1>
        <div>
          <div className='flex mt-3 font-semibold mb-10'>
            <p className='mr-1 text-[#4F5465] text-xl'>Leicester vs Man City LIVE! Premier League match updates </p>

          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <PhotoProvider>
              <PhotoView src={data?.data?.image}>
                <img className='rounded-tl-xl rounded-bl-xl w-full h-[360px]' src={data?.data?.image} alt="" />
              </PhotoView>
            </PhotoProvider>
            <div className='w-full'>
              <PhotoProvider>
                <div className='grid grid-cols-2 gap-2 w-full'>


                  <PhotoView src={data?.data?.image}>
                    <img className='h-44 w-full ' src={data?.data?.image} alt="" />
                  </PhotoView>


                  <PhotoView src={data?.data?.image}>
                    <img className='h-44 w-full rounded-tr-xl' src={data?.data?.image} alt="" />
                  </PhotoView>
                  <PhotoView src={data?.data?.image}>
                    <img className='h-44 w-full' src={data?.data?.image} alt="" />
                  </PhotoView>
                  <PhotoView src={data?.data?.image}>
                    <img className='h-44 w-full rounded-br-xl' src={data?.data?.image} alt="" />
                  </PhotoView>
                </div>
              </PhotoProvider>
            </div>
          </div>
        </div>
      </div>


      {/* Discription  */}
      <h1 className='text-[#4F5465] text-2xl font-semibold mt-12'> Discription & overview</h1>
      <p className='text-[#4F5465] text-xl mt-10'> Sport is generally recognised as system of activities based in physical athleticism or physical dexterity, with major competitions admitting only sports meeting this definition.Some organisations, such as the Council of Europe, preclude activities without any physical element from classification as sports. However, a number of competitive, but non-physical, activities claim recognition as mind sports. The International Olympic Committee who oversee the Olympic Games recognises both chess and bridge as sports. SportAccord, the international sports federation association, recognises five non-physical sports: chess, bridge, draughts, Go and xiangqi.However, they limit the number of mind games which can be admitted as sports.Sport is usually governed by a set of rules or customs, which serve to ensure fair competition. Winning can be determined by physical events such as scoring goals or crossing a line first. It can also be determined by judges who are scoring elements of the sporting performance, including objective or subjective measures such as technical performance or artistic impression. </p>

      <p className='text-[#4F5465] text-xl mt-10'> {data?.data?.description} </p>
      <p className='text-[#4F5465] text-xl mt-10'> {data?.data?.description} </p>
      

      <div className='mt-5 p-5'>
        <div className='flex gap-7 mb-5 items-center'>
          <GiBed className='text-4xl text-[#4F5465]'></GiBed>
          <div>
            <h6 className='text-lg text-[#4F5465]  font-semibold'>The precise definition of what differentiates</h6>
            <p className='text-[#4F5465]'>GAISF uses the following criteria, determining that a sport have an element of competition.</p>
          </div>
        </div>
        <div className='flex gap-7 mb-5 items-center'>
          <MdAssuredWorkload className='text-3xl text-[#4F5465]'></MdAssuredWorkload>
          <div>
            <h6 className='text-lg text-[#4F5465]  font-semibold'>Dedicated workspace</h6>
            <p className='text-[#4F5465]'>The inclusion of mind sports within sport definitions has not been universally accepted.</p>
          </div>
        </div>
        <div className='flex gap-7 mb-5 items-center'>
          <BsSignNoParking className='text-3xl text-[#4F5465]'></BsSignNoParking>
          <div>
            <h6 className='text-lg text-[#4F5465]  font-semibold'>Park for free</h6>
            <p className='text-[#4F5465]'>This is one of the few places in the area with free parking.</p>
          </div>
        </div>
        <div className='flex gap-7 mb-5 items-center'>
          <VscKey className='text-3xl text-[#4F5465]'></VscKey>
          <div>
            <h6 className='text-lg text-[#4F5465]  font-semibold'>Great check-in experience</h6>
            <p className='text-[#4F5465]'>95% of recent booking gave the check-in process a 5-star rating.</p>
          </div>
        </div>
        <div className='flex gap-7 items-center'>
          <LuCalendarDays className='text-3xl text-[#4F5465]'></LuCalendarDays>
          <div>
            <h6 className='text-lg text-[#4F5465]  font-semibold'>Free cancellation before 1 day.</h6>
          </div>
        </div>
      </div>



      <Link to={`/dashbord/bookingPage/${data.data._id}`} >
        <button className='btn btn-sm w-1/2 uppercase font-semibold bg-secondary hover:bg-secondary border-secondary mt-6 hover:text-white text-white '>Book Now</button>
      </Link>
    </div>
  );
};

export default DatailsPage;