import axios from "axios"
import { useForm, SubmitHandler } from "react-hook-form"



type Inputs = {
  name: string,
  description: string,
  pricePerHour: number,
  location: string,
  image:string
}


const CreateFacility = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>()
  
  


//   if(isError){
//     toast.error('User Register Filed...!!')
//   }

//   if(isSuccess){
//     toast.success('User Register Successfully...!!')
//     localStorage.setItem('accessToken', data.data.accessToken)
//   }



  








  

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log(data)
     console.log(data.image[0])

     const formData = new FormData();
     formData.append('image', data.image[0]);


    try{
        const response = await axios.post('https://api.imgbb.com/1/upload?&key=1e1cb35e45fc37d4bfe6bd8a3ed195cc', formData, {
            params: { key: '1e1cb35e45fc37d4bfe6bd8a3ed195cc'},
            headers: {
                'Content-Type': 'multipart/form-data',
              },
        })



        // console.log("image upload success:", response.data.data.url)
        const facilityData = {...data, image: response.data.data.url}

        console.log('backend a jabe:', facilityData)
        reset()
    } catch(err){
        console.log("error uploading image", err)
    }






    // userRegister({
    //   data: data
    // })

    // reset()
  }









  return (
    <div className=' h-screen w-1/2 mx-auto '>

    
      {/* create from here ...........  */}

      <div>
        <p className='text-3xl text-[#3B94E9] mt-5 font-semibold '>Create Facility Now</p>
        <span className='text-white'>please sheare your information in form </span>



        <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>



          <div className="relative flex items-center my-2">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>


            <input
              type="text"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full"
              placeholder="name"
              {...register("name", { required: true })}
            />
          </div>


          {/* description filed this  */} 
          <div className="relative flex items-center my-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>



            <input
              type="text"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="description"
              {...register("description", { required: true })}
            />
          </div>



         {/* pricePerHour filed this  */} 
         <div className="relative flex items-center my-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>



            <input
              type="number"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="pricePerHour"
              {...register("pricePerHour", { required: true })}
            />
          </div>


           {/* location filed this  */} 
         <div className="relative flex items-center my-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>



            <input
              type="text"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="location"
              {...register("location", { required: true })}
            />
          </div>




          <div className="relative flex items-center my-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>



            <input
              type="file"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="file"
              {...register("image", { required: true })}
            />
          </div>


          {errors.name && <span>This field is  required </span>}

          <input type="submit" className='bg-[#3B94E9] text-white py-2 px-6 w-1/2 font-semibold' />
        </form>




        



      </div>

    </div>
  )
}

export default CreateFacility;