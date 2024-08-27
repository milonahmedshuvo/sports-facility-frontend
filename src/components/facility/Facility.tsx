

const Facility = () => {


    const faciltys = [
        {
            image: 'https://www.catapult.com/wp-content/uploads/2024/05/Purdue-Volleyball-1920x1080.jpeg',
            name: 'Tactical Analysis and Skills in',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptas a ex quas explicabo optio rerum cum tempore ut tempora libero!'

        },
        {
            image: 'https://www.catapult.com/wp-content/uploads/2024/04/2024_T7_PURDUE_BLOG_HEADER.jpg',
            name: 'Tactical Analysis and Skills in',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptas a ex quas explicabo optio rerum cum tempore ut tempora libero!'

        },
        {
            image: 'https://www.catapult.com/wp-content/uploads/2024/05/Purdue-Volleyball-1920x1080.jpeg',
            name: 'Tactical Analysis and Skills in',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptas a ex quas explicabo optio rerum cum tempore ut tempora libero!'

        }
    ]

    return (
        <div className="mt-10">
            

            <div className="mb-10">
                <p className="uppercase text-4xl font-bold text-center">our Facility featured</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                faciltys.map((item) => (
                    <div>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.description.length > 40 ? `${item.description.substring(0, 105)}...` : `${item.description}` } </p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}


export default Facility