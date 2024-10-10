import logo from '../../image/logonews.svg'

const Footer = () => {

  return (
    <div className=' mt-32 pb-20 bg-black pt-32'>


      <div className='flex flex-col lg:flex-row mx-10 lg:mx-20 '>

        <div className=' w-full lg:w-[30%]'>
          <img src={logo} alt="" />
          <p className='text-white font-inter mt-4'>Join us on a journey through scenic trail runs and learn about Running Club exciting trail running outings and tips for tackling the trails.</p>
        </div>



        <div className=' w-full lg:w-[70%] flex flex-col md:flex-row justify-between ml-10 '>

          <div className=' w-[30%] flex flex-col items-center justify-start  my-10 lg:my-0 '>
            <p className='text-xl font-inter text-white mt-2 '>about us</p>
            <p className='text-md font-inter text-white mt-2 ' >Coaches</p>
            <p className='text-md font-inter text-white mt-2 ' >Workouts</p>
            <p className='text-md font-inter text-white mt-2 ' >Contact Us</p>
          </div>

          <div className=' w-full lg:w-[30%] my-8 lg:my-0 '>
            <div className='flex h-[70px] gap-2 '>
              <img src="https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/65d74af9325a44e6589f64b0_nicolas-hoizey--4trKf0Kbow-unsplash.webp" alt="" />
              <img src="https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/65d74e8a8717ff0a7ae8318c_sage-friedman-TT2J5t1QaMw-unsplash.webp" alt="" />
              <img src="https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/65d74e97517c60bbb58c5116_chris-z4P3I52t7-E-unsplash.webp" alt="" />
            </div>

            <div className='flex h-[70px] mt-2 gap-2'>
              <img src="https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/65d74ea57854da790122b673_kristian-egelund-wmdcUQ0CJ4c-unsplash%201.webp" alt="" />
              <img src="https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/65d74eb3d97cb39bf5de03e6_chander-r-AtfA8NDgpKA-unsplash.webp" alt="" />
              <img src="https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/65d74ebedfd0dea605a5ed18_nicolas-hoizey-Lno6-CxVXgo-unsplash.webp" alt="" />
            </div>

          </div>



          <div className=' w-full lg:w-[30%] '>
            <p className='text-secondary text-lg font-inter flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>

              hello@runningclub.com</p>



            <p className='text-secondary text-lg font-inter flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>


              4332 Wilkinson Court</p>


            <p className='text-secondary text-lg font-inter flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg> help and support</p>
          </div>
        </div>


      </div>



      <div className='flex flex-col lg:flex-row justify-between mx-10 lg:mx-20 border-t-[1px] border-gray-400 mt-24'>
        <p className='mt-5' >
          © Running Club. All Rights Reserved.
          <span className='text-secondary ml-2'>Licensing</span>
        </p>

        <p className='mt-5' > <span className='text-secondary '>Webflow Templates</span>  <span className='text-secondary '>by 128</span>.digital.Powered by  <span className='text-secondary '>Webflo More</span> </p>
      </div>
    </div>
  )
}



export default Footer