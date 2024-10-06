import {motion} from 'framer-motion'



const Client = () => {
    return (
        <div className="mx-10 mt-28 ">

            <p className="text-secondary font-inter text-lg text-center">Testimonials</p>
            <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-center text-[35px] md:text-[45px] lg:text-[56px] text-white font-bold font-inter mt-2">What our clients say</motion.h1>



            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-14 ">

                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-cartBG pt-6 pb-6 pl-7 border-l-4 border-t-4 border-secondary  pr-2 md:pr-32 ">
                    <p className=" text-[20px] md:text-[24px] font-semibold font-inter text-white">Running Club changed my life! The supportive community and expert coaching helped me complete my first marathon. I couldn't have done it without them.</p>
                    <p className="text-secondary text-lg mt-3">Noah Brown</p>
                </motion.div>


                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-cartBG pt-6 pb-6 pl-7 border-l-4 border-b-4 border-secondary pr-2 md:pr-32 ">
                    <p className=" text-[20px] md:text-[24px] font-semibold font-inter text-white ">Running Club changed my life! The supportive community and expert coaching helped me complete my first marathon. I couldn't have done it without them.</p>
                    <p className="text-secondary text-lg mt-3">Noah Brown</p>
                </motion.div>


            </div>

        </div>
    )
}

export default Client