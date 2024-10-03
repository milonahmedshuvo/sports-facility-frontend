// import sportsnews from '../../assets/sportsnews.json'



const SportsNews = () => {

    const sportsnews = [
        {
            "image": "https://cdn.nba.com/manage/2024/07/paul-george-76ers2-072324.jpg?w=384&h=224",
            "name": "30 Teams in 30 Days: Complete schedule",
            "title": "NBA.com evaluates the state of each franchise heading into training camp.",
            "date": "5 hours ago"
        },
        {
            "image": "https://cdn.nba.com/manage/2024/08/Starting_5_S1_E4_00_27_03_13-scaled.jpg?w=384&h=224",
            "name": "New Netflix series to chronicle LeBron, Tatum & more",
            "title": "10-part series will premier Oct. 9 on Netflix.",
            "date": "August 28, 2024"
        },
        {
            "image": "https://cdn.nba.com/manage/2024/08/GettyImages-2153623595-scaled.jpg?w=384&h=224",
            "name": "NBA Fantasy: Ranking the top 35 guards",
            "title": "Who are the top guards in fantasy basketball this season? RotoWire breaks it down.",
            "date": "August 30, 2024"
        },
        {
            "image": "https://cdn.nba.com/manage/2024/08/GettyImages-1198112181-scaled.jpg?w=384&h=224",
            "name": "Kidd-Gilchrist turns stutter into mission",
            "title": "Former NBA player Michael Kidd-Gilchrist is raising awareness",
            "date": "August 29, 2024"
        },
        {
            "image": "https://cdn.nba.com/manage/2024/08/jokic-dribbling.jpg?w=384&h=224",
            "name": "NBA 2K25 top 100 player ratings released",
            "title": "The NBA 2K25 top 100 ratings have arrived. Check out where the league's best rank ahead of the game",

            "date": "August 27, 2024"
        },
        {
            "image": "https://cdn.nba.com/manage/2024/08/sga-guarding-luka.jpg?w=384&h=224",
            "name": "RotoWire breaks down an early look at the 2024",
            "title": "RotoWire breaks down an early look at the 2024-25 Top 150 Fantasy Basketball Rankings.",
            "date": "August 21, 2024"
        },
        {
            "image": "https://cdn.nba.com/manage/2024/08/lebron-guarding-curry.jpg?w=384&h=224",
            "name": "Emirates NBA Cup, Group Play: 12 matchups",
            "title": "Here are 12 matchups to circle on your calendar when the tournament tips on Nov. 12.",
            "date": "August 14, 2024"
        },
        {
            "image": "https://cdn.nba.com/manage/2024/08/GettyImages-2152309818-scaled-e1722880797972.jpg?w=384&h=224",
            "name": "New Netflix series to chronicle LeBron",
            "title": "Get a team-by-team look at where all 15 squads in the Eastern Conference rank after a busy offseason.",
            "date": "August 23, 2024"
        }
    ]

    return (
        <div className=" my-20 mx-0 md:mx-10 ">
            <p className="text-2xl font-semibold font-mark-pro uppercase border-b-2">sports news</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                {
                    sportsnews.map((news, index) => <div key={index} className='flex gap-5 my-4'>
                        <img className='h-[100px]' src={news.image} alt="" />
                        <div className='flex flex-col justify-between'>
                            <div>
                                <p className='text-xl font-bold text-black font-mark-pro'>{news.name}</p>
                                <p>{news.title}</p>
                            </div>
                            <p className='text-sm'>{news.date}</p>
                        </div>
                    </div>)
                }
            </div>


        </div>
    )
}

export default SportsNews