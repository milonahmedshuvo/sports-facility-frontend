

const BannerSection = () => {
    return (
        <div className="w-full">
            <video controls autoPlay loop muted>
                <source src='https://www.catapult.com/wp-content/uploads/2023/06/HOME-SLIDER-2023-SITE-LAUNCH.mp4' type="video/mp4" />
            </video>

            <div className="w-full h-[200px] bg-[#000000] trans flex flex-col justify-center ">
               
               <button className="text-white border border-orange-600 hover:bg-[#EE4D24] w-[300px] text-xl mx-auto py-4">Book Now</button>
               <p className="uppercase text-white text-center text-4xl font-bold">our solutions</p>
              
            </div>
        </div>
    )
}

export default BannerSection