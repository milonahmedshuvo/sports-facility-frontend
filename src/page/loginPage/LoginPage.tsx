import signin from '../../image/water.jpeg'
import { useForm, SubmitHandler } from "react-hook-form"
import { useUserLoginMutation } from '../../redux/api/user'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

type Inputs = {
  email: string,
  password: string,

}


const LoginPage = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>()
  const [userLoginFunc, {data, error, isError, isSuccess} ] = useUserLoginMutation(undefined)

  if(isError){
    console.log(error)
    toast.error("user login filed!!")
  }
  

  if(isSuccess){
    toast.success('user login successfull!!')
    localStorage.setItem('accessToken', data.data.accessToken)
  }

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data)
    userLoginFunc({
      data: data
    })


    reset()

  }

  if(isSuccess){
    navigate('/dashbord');
  }






  const loaginCadiansial = () => {
     setEmail('user@example.com')
     setPassword('12345')
  }



  return (
    <div className='flex md:flex-row justify-center items-center py-44 bg-cover bg-center '
    style={{ backgroundImage: `url(${signin})` }}
    >

      

      <div className='backdrop-blur-sm bg-white/30 w-full md:w-1/3 px-20 py-10'>


        <p className='text-[#b9263a] text-2xl font-semibold '>Save Your Account Now</p>
        <span className='text-md text-[#b9263a]'>please sheare your information in form </span>


        <div className='my-4'>
        <p className='text-md text-gray-800'>Email: user@example.com</p>
        <p className='text-md text-gray-800'>password: 12345</p>

        <button onClick={loaginCadiansial} className='bg-secondary text-white px-4 py-1 rounded' >User Login</button>
        </div>



        <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>

          {/* email filed  */}
          <div className="relative flex items-center my-6">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>


            <input
              type="email"
              className="pl-10 pr-10 py-2 text-black border-b-2 rounded-md focus:outline-none w-full "
              placeholder="email"
              value={email}
              {...register("email", { required: true })}
            />
          </div>



          {/* password filed  */}
          <div className="relative flex items-center my-6">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 h-5 text-gray-500 absolute left-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
            </svg>

            <input
              type="password"
              className="pl-10 pr-10 py-2 text-black  border-b-2 rounded-md focus:outline-none w-full "
              placeholder="password"
              value={password}
              {...register("password", { required: true })}
            />
          </div>


          {errors.email && <p className='font-bold text-red-600'>  This field is email required </p>}
          {errors.password && <p className='font-bold text-red-600'> This field is password required </p>}

          <input type="submit" className='bg-[#b9263a] text-white py-2 px-6 w-full rounded-md font-semibold mt-4' />
        </form>

        <p className='mt-3 text-text' >Create new an account? <Link to='/register'> <span className='text-gray-700 font-semibold'>Register</span></Link> </p>


      </div>

    </div>
  )
}

export default LoginPage;