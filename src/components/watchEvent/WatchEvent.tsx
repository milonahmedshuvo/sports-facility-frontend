import eventImg from '../../image/event.avif'

const WatchEvent = () => {
  return (
    <div className=' pt-5 border-t-2 flex relative mx-0 md:mx-10 '>

        <div className='w-2/3'>
            <img className='w-[86%]' src={eventImg} alt="" />
        </div>

        <div className='w-1/3 absolute top-[-12px] right-[100px] relative'>
           <h2 className='text-7xl font-bold uppercase text-black'>Insider</h2>
           <h2 className='text-7xl font-bold uppercase text-black'>Access</h2>
           <h5 className=' mt-10 text-xl text-[#000000] w-full'>Never miss a moment. Track your favorite athletes, watch live events, and stay updated with breaking news.</h5>


           <button className='text-white bg-black px-4 rounded textarea-md py-3 absolute bottom-0 '>Dawnload Now</button>
        </div>


    </div>
  )
}

export default WatchEvent