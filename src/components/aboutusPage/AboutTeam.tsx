import teamdatas from '../../assets/team.json'

const AboutTeam = () => {


  return (
    <div>
        <p className='text-4xl font-semibold  text-center mt-16'>TEAM MANAGEMENT</p>
        <p className='text-center text-lg mb-20'>Meet the leadership behind Catapult</p>

        
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 lg:gap-20 md:mx-10 lg:mx-20 hover:text-orange-500'>
        {
            teamdatas.map((team) => 
                <div>
                    <img src={team.image} alt="" />
                    <h3 className=' text-2xl font-semibold text-center mt-2' >{team.name}</h3>
                    <p className='text-center text-lg'>{team.identy}</p>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default AboutTeam