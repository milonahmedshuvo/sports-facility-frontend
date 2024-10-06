import { useRef, useState } from "react";
import { motion } from 'framer-motion'

const RunningBenifit = () => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <div className="mt-32">

      <p className="text-secondary text-center font-inter loading-none">Running Benefits</p>
      <h1 className="text-[56px] font-inter font-bold text-center leading-none mt-5">Benefits of running with</h1>
      <h1 className="text-[56px] font-inter font-bold text-center leading-none mb-20">Running Club</h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>


          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex justify-center md:justify-end items-center gap-7 mb-12">
            <div>
              <h1 className="font-inter text-end text-xl text-white font-bold mb-3">Personal Growth</h1>
              <p className="w-[250px] text-end font-inter text-text text-md">We lead to personal growth, enhancing self-discipline, and goal-setting skills.</p>
            </div>

            <h1 className="text-6xl text-secondary font-inter font-bold">01</h1>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex justify-center md:justify-end items-center gap-7">
            <div>
              <h1 className="font-inter text-end text-xl text-white font-bold mb-3">Personal Growth</h1>
              <p className="w-[250px] text-end font-inter text-text text-md">We lead to personal growth, enhancing self-discipline, and goal-setting skills.</p>
            </div>

            <h1 className="text-6xl text-secondary font-inter font-bold">02</h1>
          </motion.div>
        </div>


        {/* <div>
      <video controls autoPlay loop muted >
                <source src='https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/65c64898402a553e8acf5308_Man Runner Park 1280x720-transcode.mp4' type="video/mp4" />
            </video>
      </div> */}

        <div className="relative ">
          <video
            ref={videoRef}
            loop
            muted
            className=" w-[200px] mx-auto md:mx-auto md:w-[400px] rounded-full bg-black opacity-[0.7]"
          >
            <source src="https://cdn.prod.website-files.com/65c0febf494dff5e0b629052/65c64898402a553e8acf5308_Man Runner Park 1280x720-transcode.mp4" type="video/mp4" />
          </video>
          <button
            onClick={toggleVideo}
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white py-2 px-2 rounded-full"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>





        <div>

          <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.4, delay: 0.6 }}
          className="flex justify-start items-center gap-7 mb-12">
            <h1 className="text-6xl text-secondary font-inter font-bold">03</h1>
            <div>
              <h1 className="font-inter text-start text-xl text-white font-bold mb-3">Personal Growth</h1>
              <p className="w-[250px] text-start font-inter text-text text-md">We lead to personal growth, enhancing self-discipline, and goal-setting skills.</p>
            </div>
          </motion.div>


          <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.4, delay: 0.6 }}
          className="flex justify-start items-center gap-7 mb-12">
            <h1 className="text-6xl text-secondary font-inter font-bold">04</h1>
            <div>
              <h1 className="font-inter text-start text-xl text-white font-bold mb-3">Personal Growth</h1>
              <p className="w-[250px] text-start font-inter text-text text-md">We lead to personal growth, enhancing self-discipline, and goal-setting skills.</p>
            </div>
          </motion.div>

        </div>


      </div>

    </div>
  )
}

export default RunningBenifit