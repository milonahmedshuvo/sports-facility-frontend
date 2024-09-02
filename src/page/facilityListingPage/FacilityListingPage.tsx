import { SubmitHandler, useForm } from 'react-hook-form';
import { useGetAllFacilityQuery } from '../../redux/api/user'
import { Link } from 'react-router-dom';

type TFacility = {
    name: string;
    description: string;
    pricePerHour: number;
    location: string,
    isDeleted: boolean,
    image?: string,
    _id: string
}


type Inputs = {
    search: string,
  }



const FacilityListingPage = () => {
    const { data } = useGetAllFacilityQuery(undefined)
    const {
        register,
        handleSubmit,
        // formState: { errors },
        // reset
      } = useForm<Inputs>()
   


    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        console.log(data)
    }




    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='flex items-center ml-10 my-10'>
                <div className="relative flex  items-center ml-2  ">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>


                    <input
                        type="text"
                        className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                        placeholder="Search..."
                        {...register('search')}
                    />

                </div>

                <button className='btn btn-sm uppercase font-semibold ml-10 bg-red-600 hover:bg-red-600 hover:text-white text-white py-2'>Search</button>

            </form>

            <div className='flex flex-col md:flex-row justify-around'>
                {
                    data?.data?.map((item: TFacility) => <div key={item._id}>
                        <img className='h-[200px]' src={item.image} alt="" />
                        <p className='text-xl'>{item.name}</p>
                        <p>Location: {item.location}</p>
                        <p>price: {item.pricePerHour}</p>
                        <Link to={`/dashbord/datails/${item._id}`} >
                        <button className=' mt-3 btn btn-sm uppercase font-semibold bg-red-600 hover:bg-red-600 hover:text-white text-white w-full'>View Details</button>
                        </Link>
                        
                    </div>)
                }
            </div>
        </div>
    )
}

export default FacilityListingPage