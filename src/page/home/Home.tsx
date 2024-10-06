import Banner from "../../homeComponents/banner/Banner"
import Client from "../../homeComponents/client/Client"
import Count from "../../homeComponents/count/Count"
import LatestNews from "../../homeComponents/latestnews/LatestNews"
import Running from "../../homeComponents/running/Running"
import RunningBenifit from "../../homeComponents/runningBenifit/RunningBenifit"
import RunningGoal from "../../homeComponents/runningoal/RunningGoal"
import Teams from "../../homeComponents/teammember/Team"
import Upcomming from "../../homeComponents/upcomming/Upcomming"



const Home = () => {
  return (
    <div>

    <Banner/>
     <Count/>
    <Running/>
    <RunningBenifit/>
    <Upcomming/>

    <Teams/> 
    <Client/>
    <RunningGoal/>
    <LatestNews/>






    {/* <Card></Card> 
    <Facility />
    <Timeline></Timeline>
    <NextEvent></NextEvent>
    <TestimonialSlider/> */}





      {/* <BannerSection />
      <Card></Card> */}
      {/* <Facility /> */}
      {/* <Howitwork/> */}
      {/* <Timeline></Timeline> */}
      {/* <SportsNews/> */}
      {/* <WatchEvent></WatchEvent> */}
      {/* <NextEvent></NextEvent> */}
      {/* <TestimonialSlider/> */}
     
      
    </div>
  )
}

export default Home