import img1 from '../../image/news1.webp'
import img2 from '../../image/news2.webp'
import img3 from '../../image/news3.webp'


const LatestNews = () => {


    return (
        <div className="mx-10  mt-14 lg:mt-32">

            <div className="flex flex-col md:flex-row justify-between items-center ">
                <h3 className="text-[54px] font-inter font-bold ">Latest news</h3>
                <button
                    className="uppercase text-white bg-secondary mt-5 md:mt-0  px-8 rounded py-3 font-semibold ">
                    view more
                </button>
            </div>




            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>

                <div className="relative bg-cover bg-center h-[400px] overflow-hidden group">
                    <div
                        className="absolute inset-0 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-110"
                        style={{
                            backgroundImage: `url(${img1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            boxShadow: "inset 0px -50px 10px rgba(0, 0, 0, 0.6)"
                        }}
                    ></div>


                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>


                    <div className="z-10 absolute left-8 bottom-6">
                        <p className="text-secondary text-md">February 27, 2024</p>
                        <p className="text-lg text-[26px] mt-4 leading-none font-semibold">
                            Must-Have Equipment for
                        </p>
                        <p className="text-lg text-[26px] mt-2 leading-none font-semibold">
                            Every Runner
                        </p>
                        <p className="text-secondary font-medium text-lg mt-4">Read More</p>
                    </div>
                </div>








                <div className="relative bg-cover bg-center h-[400px] overflow-hidden group">
                    <div
                        className="absolute inset-0 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-110"
                        style={{
                            backgroundImage: `url(${img2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            boxShadow: "inset 0px -50px 10px rgba(0, 0, 0, 0.6)"
                        }}
                    ></div>


                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>


                    <div className="z-10 absolute left-8 bottom-6">
                        <p className="text-secondary text-md">February 27, 2024</p>
                        <p className="text-lg text-[26px] mt-4 leading-none font-semibold">
                            Must-Have Equipment for
                        </p>
                        <p className="text-lg text-[26px] mt-2 leading-none font-semibold">
                            Every Runner
                        </p>
                        <p className="text-secondary font-medium text-lg mt-4">Read More</p>
                    </div>
                </div>


                <div className="relative bg-cover bg-center h-[400px] overflow-hidden group">
                    <div
                        className="absolute inset-0 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-110"
                        style={{
                            backgroundImage: `url(${img3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            boxShadow: "inset 0px -50px 10px rgba(0, 0, 0, 0.6)"
                        }}
                    ></div>


                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>


                    <div className="z-10 absolute left-8 bottom-6">
                        <p className="text-secondary text-md">February 27, 2024</p>
                        <p className="text-lg text-[26px] mt-4 leading-none font-semibold">
                            Must-Have Equipment for
                        </p>
                        <p className="text-lg text-[26px] mt-2 leading-none font-semibold">
                            Every Runner
                        </p>
                        <p className="text-secondary font-medium text-lg mt-4">Read More</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default LatestNews