import img1 from '../../image/football-1.jpg'
import img2 from '../../image/player-1.jpg'
import img3 from '../../image/team.jpg'

const Card = () => {
    return (
        <div className=' mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>

            <div
                className="bg-cover bg-center h-[500px] relative"
                style={{ backgroundImage: `url(${img2})` }}
            >
                {/* Your content goes here */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> 


                <div className='h-24 bg-black absolute bottom-0 w-full image-color-spred border-b-8 border-b-orange-500' >
                </div>
            </div>


            <div
                className="bg-cover bg-center h-[500px] relative"
                style={{ backgroundImage: `url(${img1})` }}
            >
                {/* Your content goes here */}

                <div className="absolute inset-0 bg-black bg-opacity-50"></div> 

                <div className='h-24 bg-black absolute bottom-0 w-full image-color-spred border-b-8 border-b-orange-500' >
                </div>
            </div>


            <div
                className="bg-cover bg-center h-[500px] relative"
                style={{ backgroundImage: `url(${img3})` }}
            >
                {/* Your content goes here */}

                <div className="absolute inset-0 bg-black bg-opacity-50"></div> 


                <div className='h-24 bg-black absolute bottom-0 w-full image-color-spred border-b-8 border-b-orange-500' >
                </div>
            </div>

        </div>
    )
}

export default Card
