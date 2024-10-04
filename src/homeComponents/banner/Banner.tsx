import { motion } from "framer-motion";
import bannerImg from "../../image/banner.webp"





const Banner = () => {

    return (
        <div className="relative ">
            <img className=" w-full" src={bannerImg} alt="" />
            {/* <div className="mx-10 absolute top-[160px] hidden md:block">
                <h1 className="text-[80px] font-[700] font-inter ">Run with Passion</h1>
                <h1 className="text-[80px] font-[700] font-inter leading-[76px]">and Purpose</h1>

                <p className="text-text text-[22px] w-[500px] mt-7 loading-0">Lace-up your shoes, set your goals, and let's run together towards a healthier, happier, and faster you.</p>


                <button className="uppercase text-white bg-secondary mt-7 px-8 rounded py-3 font-semibold " >let!s run</button>
            </div> */}
            <div className="mx-10 absolute top-[160px] hidden md:block">
                <motion.h1
                    className="text-[80px] font-[700] font-inter"
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }} 
                >
                    Run with Passion
                </motion.h1>

                <motion.h1
                    className="text-[80px] font-[700] font-inter leading-[76px]"
                    initial={{ opacity: 0, y: 50 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }} 
                >
                    and Purpose
                </motion.h1>

                <motion.p
                    className="text-text text-[22px] w-[500px] mt-7"
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 0.8, delay: 0.4 }} 
                >
                    Lace-up your shoes, set your goals, and let's run together towards a
                    healthier, happier, and faster you.
                </motion.p>

                <motion.button
                    className="uppercase text-white bg-secondary mt-7 px-8 rounded py-3 font-semibold"
                    initial={{ opacity: 0, y: 30 }} // Start state
                    whileInView={{ opacity: 1, y: 0 }} // End state when in view
                    transition={{ duration: 0.8, delay: 0.6 }} // Delay for staggered animation
                >
                    let!s run
                </motion.button>
            </div>

        </div>
    )
}

export default Banner