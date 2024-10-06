import runningBanner from '../../image/running.webp'
import {motion} from 'framer-motion'




const RunningGoal = () => {


  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className=' bg-cover bg-center h-[500px] mt-32 relative  '    
    style={{backgroundImage: `url(${runningBanner})` }}>


      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
       <div className='z-10  absolute top-24 left-16 '>
       <p className='text-secondary text-lg font-semibold '>Get in Touch</p>
       
       <h1 className=' text-[30px] md:text-[44px] lg:text-[56px] font-inter font-semibold mt-6 leading-none'>Take the first step towards</h1>

       <h1 className='text-[30px] md:text-[44px] lg:text-[56px] font-inter font-semibold mt-3 leading-none '>your running goals today!</h1>




                <button
                    className="uppercase text-white bg-secondary mt-12 px-8 rounded py-3 font-semibold"
                >
                    let!s run
                </button>


       </div>
    </motion.div>

 
  )
}

export default RunningGoal