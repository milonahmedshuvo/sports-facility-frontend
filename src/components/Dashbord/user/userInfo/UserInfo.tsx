// import { useGetSingleuserInfoQuery } from "../../../../redux/api/user"
import shuvo from '../../../../image/ahmed.jpg'
import backgroundImg from '../../../../image/background-profile.jpeg'
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";


const UserInfo = () => {
  // const { data } = useGetSingleuserInfoQuery(undefined)
  // console.log(data)


  return (
    <div className="pb-80">


      <div className='bg-cover bg-center w-full h-[200px] relative' style={{ backgroundImage: `url(${backgroundImg})` }} >

        <div className='backdrop-blur-sm bg-white/30 h-[130px]  w-[1020px] rounded-lg absolute top-32  left-6 '>
          <div className='flex justify-between items-center h-full mx-10'>
            <div className='flex gap-3 items-center'>
              <div className=' '>
                <img className=' w-[70px] h-[70px] rounded-lg' src={shuvo} alt="" />
              </div>

              <div>
                <h5 className='text-sm font-inter' >Milon Ahmed Shuvo</h5>
                <p className='text-sm font-inter' >CEO/Co-Founder</p>
              </div>
            </div>


            <div className='flex gap-3'>
              <button className='bg-blue-800 py-2 px-3 rounded'>
                <FaFacebook className='text-white'></FaFacebook>
              </button>

              <button className='bg-sky-500 py-2 px-3 rounded'>
                <FaTwitter className='text-white'></FaTwitter>
              </button>

              <button className='bg-black py-2 px-3 rounded'>
                <FaGithub className='text-white'></FaGithub>
              </button>
            </div>
          </div>

        </div>
      </div>



      <div className='mt-24 mx-10'>
        <h4 className='text-2xl mt-2 mb-4'>About me</h4>
        <p className=''>I'm Milon Ahmed Shuvo, a passionate and detail-oriented Frontend Developer with expertise in building dynamic and responsive web applications. I specialize in creating clean, efficient, and scalable solutions using HTML, CSS, JavaScript, and TypeScript. I have extensive experience with modern frontend frameworks and libraries like React.js, Next.js, and Redux. With a solid foundation in Node.js, Express, MongoDB, and Mongoose, I enjoy working on full-stack applications, particularly with the MERN stack. I am constantly learning and applying the latest trends in web development to ensure top-tier user experiences. I love collaborating with teams, tackling complex problems, and turning ideas into seamless digital products.</p>
      </div>

    </div>
  )
}

export default UserInfo