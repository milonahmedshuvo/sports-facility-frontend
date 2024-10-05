import { motion } from "framer-motion";

const Count = () => {
    return (
        <div className="mx-10 flex flex-col md:flex-row justify-between  items-center mt-14 mb-24 ">

            <motion.div className=" w-full md:w-[30%]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-text text-[18px] font-[500] loading-3 font-inter">Our commitment to excellence has led to these impressive figures that showcase our dedication, hard work, and the value we bring to our customers.</p>
            </motion.div>



            <div className=" w-full md:w-[70%] flex flex-col md:flex-row items-center md:justify-end gap-7 mt-6 md:mt-0 md:gap-20">

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }} >
                    <h1 className="text-secondary text-[54px] md:text-[64px] font-bold font-inter">785+</h1>
                    <p className="text-text text-[18px] font-inter">Kilometers Run</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-secondary text-[54px] md:text-[64px] font-bold font-inter">145+</h1>
                    <p className="text-text text-[18px] font-inter">Location</p>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-secondary text-[54px] md:text-[64px] font-bold font-inter">3,5K</h1>
                    <p className="text-text text-[18px] font-inter">Runners</p>
                </motion.div>
            </div>

        </div>
    )
}

export default Count