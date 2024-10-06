import run from '../../image/run.webp'
import run2 from '../../image/run2.webp'
import gold from '../../image/gold.svg'
import { motion } from "framer-motion";



const Running = () => {
  return (
    <div>

      <div className='flex flex-col md:flex-row relative mt-10 md:mt-44 '>

        <div className=''>
        <div className='flex relative w-1/2'>
          <div
          className="runningText rotate-[-90deg] z-10">
            <h1 className="text-[56px] font-inter text-secondary font-[600] leading-none uppercase">Running</h1>
            <h1 className="text-[56px] font-inter text-[#121212]  font-[600] text-shadow leading-none uppercase">Running</h1>
            <h1 className="text-[56px] font-inter text-white font-[600] opacity-40 leading-none uppercase">Running</h1>
          </div>

          <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
          className='absolute left-[160px] top-[-44px] w-full'>
            <img className='w-full h-[260px]' src={run} alt="" />
          </motion.div>
        </div>



           <div className='flex justify-start items-center mt-20  w-[90%] '>

               <motion.div
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.4 }}
                className='w-full md:w-1/2 '>
                <img className='px-12' src={run2} alt="" />
               </motion.div>

               <motion.div
               initial={{ opacity: 0, x: 50 }} 
               whileInView={{ opacity: 1, x: 0 }} 
               transition={{ duration: 0.4 }} 
               className='w-1/2'>
                <img className='' src={gold} alt="" />
               </motion.div>
           </div>
        </div>



        <div className='w-full mt-20 md:w-1/2 md:mt-[-53px] '>
          <motion.p
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }}
           className='text-center md:text-start text-secondary text-[18px]] '>Welcome to Running Club</motion.p>
          <motion.h1
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }} 
          className=' text-center md:text-start mt-6 text-[44px] md:text-[56px] text-white font-[700] leading-none font-inter '>We are the best</motion.h1>
          <motion.h1
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }} 
          className='text-center md:text-start text-[44px] md:text-[56px] font-inter text-white font-[700] leading-none '>running club in town</motion.h1>


          <hr  className=' border-2 md:border-4 border-secondary mt-12 w-[150px] mx-auto md:mx-0' />

          <motion.p
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }} 
          className='text-center md:text-start mt-12 w-full md:w-[80%] text-text text-[16px] md:text-[18px] font-[400] loading-3 font-inter'>Running Club' commitment to excellence shines through in these impressive stats, showcasing our dedication and value to our members and the running community.</motion.p>


          <motion.button
                    className="uppercase text-white bg-secondary mt-10 px-8 rounded py-3 font-semibold "
                    initial={{ opacity: 0, y: 30 }} // Start state
                    whileInView={{ opacity: 1, y: 0 }} // End state when in view
                    transition={{ duration: 0.4, delay: 0.6 }} // Delay for staggered animation
                >
                    let!s run
                </motion.button>

        </div>
      </div>
    </div>
  )
}

export default Running