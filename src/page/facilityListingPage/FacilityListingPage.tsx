import { SubmitHandler, useForm } from 'react-hook-form';
import { useGetAllFacilityQuery } from '../../redux/api/user'
import { Link } from 'react-router-dom';
import Spinner from '../../sheared/Spinner/Spinner';

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
    const { data, isLoading } = useGetAllFacilityQuery(undefined)
    const { register, handleSubmit } = useForm<Inputs>()


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
    }
    if (isLoading) {
        return <Spinner />
    }



    

    return (
        <div className='pb-24 px-10 pt-28 bg-white'>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='flex items-center  mb-14 '>
                <div className="relative flex">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3 top-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                        type="text"
                        className="pl-10 pr-4 rounded py-2 border border-gray-600 w-full"
                        placeholder="Search..."
                        {...register('search')}
                    />

                </div>
            </form>

            <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-6'>
                {
                    data?.data?.map((item: TFacility) => <div key={item._id} className='' >
                        <img className='h-[200px] w-full' src={item.image} alt="" />
                        <p className='text-2xl text-[#1D1D1F] mt-2 mb-3'>{item.name}</p>
                        <p className='text-[#4F5465]'>{`${item.description.length >= 100 ? item.description.slice(0, 100) : item.description}...`}</p>
                        <Link to={`/dashbord/datails/${item._id}`} >
                            <button className=' mt-7  btn btn-sm uppercase font-semibold bg-secondary hover:border-red-500 hover:bg-secondary border-secondary  text-white w-full font-serif'>View Details</button>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FacilityListingPage