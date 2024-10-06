import eventImg from '../../image/event2.avif'

const NextEvent = () => {
  return (
    <div className=' pt-5 border-t-2 flex justify-between relative mt-32 mx-0 md:mx-10 '>

       
        <div className='w-2/5 relative'>
           <h2 className='text-6xl font-bold uppercase text-white'>Memories are</h2>
           <h2 className='text-6xl font-bold uppercase text-white'>for ever!</h2>
           <h5 className=' mt-10 text-xl text-white w-full'>Paris 2024 Paralympics Collection!</h5>


           <button className='text-white bg-secondary px-4 rounded textarea-md py-3 absolute bottom-0 '>Dawnload Now</button>
        </div>




        <div className='w-3/5 border '>
           <div >
           <img className='w-full' src={eventImg} alt="" />
           </div>
        </div>


    </div>
  )
}

export default NextEvent;