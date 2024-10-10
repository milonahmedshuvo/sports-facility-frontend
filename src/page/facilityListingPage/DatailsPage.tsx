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
    <div className="text-white ">
      <div className='w-1/3 mx-auto pt-28'>

      <img className="" src={data?.data?.image} alt="" />
        <p className="text-xl font-semibold my-1 text-white mt-1 mb-2"> {data?.data?.name} </p>
        <p className="text-white "> {data?.data?.description} </p>
        <p className="text-white">Price: $ {data?.data?.pricePerHour} </p>

          <Link to={`/dashbord/bookingPage/${data.data._id}`} >                     
        <button className='btn btn-sm uppercase font-semibold bg-secondary hover:bg-secondary border-secondary mt-6 hover:text-white text-white w-full'>Book Now</button>
        </Link>             
                        
                   
            </div>
    </div>
  )
}

export default DatailsPage