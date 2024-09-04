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
       const  data  = useLoaderData() as TFacility
      //  console.log("data", data.data.description)
      



  return (
    <div className="text-white my-10">
      <div className='w-1/3 mx-auto'>

      <img className="" src={data?.data?.image} alt="" />
        <p className="text-xl font-semibold text-black my-1"> {data?.data?.name} </p>
        <p className="text-black"> {data?.data?.description} </p>
        <p className="text-black">Price: $ {data?.data?.pricePerHour} </p>

          <Link to={`/dashbord/bookingPage/${data.data._id}`} >                     
        <button className=' mt-3 btn btn-sm uppercase font-semibold bg-red-600 hover:bg-red-600 hover:text-white text-white w-full'>Book Now</button>
        </Link>             
                        
                   
            </div>
    </div>
  )
}

export default DatailsPage