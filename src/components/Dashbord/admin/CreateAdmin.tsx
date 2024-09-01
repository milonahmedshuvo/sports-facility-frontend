
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast";
import { useCreateAdminMutation } from "../../../redux/api/user";



type Inputs = {
  name: string,
  email: string,
  password: string,
  phone: string,
  role: string;
  address: string
}


const CreateAdmin = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>({ defaultValues: { role: 'user' } })
  
  const [ createAdmin, { data, isError, isSuccess, error } ] = useCreateAdminMutation()


  if(isError){
    toast.error('Admin Create Filed...!!')
    console.log(error)
  }

  if(isSuccess){
    toast.success('Admin Create Successfully...!!')
    localStorage.setItem('accessToken', data.data.accessToken)
  }



  








  

  const onSubmit: SubmitHandler<Inputs> = (data) => {
   
     
    createAdmin({
      data: data
    })

    reset()
  }









  return (
    <div className='flex justify-center mt-10'>

      

     

      <div>
        <p className='text-3xl text-[#3B94E9] font-semibold '>Create Account Now</p>
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



          {/* email filed  */}

          <div className="relative flex items-center my-6">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>


            <input
              type="email"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="email"
              {...register("email", { required: true })}
            />
          </div>


          {/* password filed  */}
          <div className="relative flex items-center my-6">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>


            <input
              type="password"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="password"
              {...register("password", { required: true })}
            />
          </div>




          {/* phone filed  */}
          <div className="relative flex items-center my-6">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
            </svg>

            <input
              type="text"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="phone"
              {...register("phone", { required: true })}
            />
          </div>



         
       




          {/* address filed this  */}
          {/* role filed this  */}
          <div className="relative flex items-center my-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>



            <input
              type="text"
              className="pl-10 pr-10 py-2  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="address"
              {...register("address", { required: true })}
            />
          </div>



          {errors.name && <span>This field is  required </span>}

          <input type="submit" className='bg-[#3B94E9] text-white py-2 px-6 w-full font-semibold' />
        </form>

      </div>

    </div>
  )
}

export default CreateAdmin ;