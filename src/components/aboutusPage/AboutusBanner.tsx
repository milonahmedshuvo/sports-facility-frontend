

const AboutusBanner = () => {
    return (
        <div className="w-full relative ">
            <video controls autoPlay loop muted>
                <source src='https://www.catapult.com/wp-content/uploads/2023/06/CATAPULT-ANTHEM-CUTDOWN-NO-SUPERS.mp4' type="video/mp4" />
            </video>

            <div className=" w-full lg:w-2/5  absolute h-full top-0 bg-black opacity-[0.7] trans flex flex-col items-center  px-20 ">
               
               
               <p className="uppercase text-white text-center text-4xl font-bold border-b-2 border-[#FF004C]  pb-2 mt-14">about our company</p>
               <p className="text-white text-center mt-4 hidden md:block"> Welcome to <span className="text-[#FF004C]">stack sports</span> , where passion for sports meets innovation and excellence. We are a dynamic sports company dedicated to empowering athletes and sports enthusiasts at all levels. Whether you’re a seasoned professional or just starting out, we provide the tools, resources, and inspiration to help you achieve your goals and push beyond your limits.</p>

               <button className="text-white border border-[#FF004C] hover:bg-[#FF004C] w-[200px] text-xl mx-auto py-2 font-bold rounded-lg mt-6 hidden md:block">Book Now</button>
            </div>
        </div>
    )
}

export default AboutusBanner;