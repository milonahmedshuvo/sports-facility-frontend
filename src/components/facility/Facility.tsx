

const Facility = () => {


    const faciltys = [
        {
            image: 'https://www.catapult.com/wp-content/uploads/2024/05/Purdue-Volleyball-1920x1080.jpeg',
            name: 'Tactical Analysis and Skills in',
            description: 'We are a global company that works with top leagues, teams, and organizations to help them unleash  potential. NBA.com evaluates the state of each franchise heading into training camp.'

        },
        {
            image: 'https://www.catapult.com/wp-content/uploads/2024/04/2024_T7_PURDUE_BLOG_HEADER.jpg',
            name: 'Netflix series to chronicle LeBron, Tatum ',
            description: 'The Facility Featured section showcases the best sports venues, and your favorites are saved here in your cart. Review your selected facilities, change booking details, or remove any venue as you finalize your reservation.'

        },
        {
            image: 'https://www.catapult.com/wp-content/uploads/2024/05/Purdue-Volleyball-1920x1080.jpeg',
            name: 'Kidd-Gilchrist turns stutter into mission',
            description: 'our Facility Featured section, your chosen venues are waiting for you in the cart. Make changes compare options, and finalize your bookings with ease. Whether its a football field, tennis court, or a multi-purpose arena, the cart ensures you re just a step away from securing the best facilities for your next game or event.'

        }
    ]

    return (
        <div className="mt-20 mb-10 mx-0 md:mx-10 ">
            

            <div className="mb-10 ">
                <p className="uppercase text-3xl font-bold text-center">our Facility featured</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
            {
                faciltys.map((item) => (
                    <div className="border-b-2 border-black pb-4">
                        <img src={item.image} alt="" />
                        <p className="text-lg font-semibold my-2">{item.name}</p>
                        <p className="text-md text-text">{item.description.length > 40 ? `${item.description.substring(0, 105)}...` : `${item.description}` } </p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}


export default Facility