import BannerSection from "../../components/banner/BannerSection"
import Card from "../../components/card/Card"
import Facility from "../../components/facility/Facility"
import TestimonialSlider from "../../components/testimonialSlider/TestimonialSlider"
import Timeline from "../../components/timeline/TimeLine"
import NextEvent from "../../components/watchEvent/NextEvent"
import WatchEvent from "../../components/watchEvent/WatchEvent"
// import Howitwork from "../howitwork/Howitwork"
import SportsNews from "../sportsnews/SportsNews"


const Home = () => {
  return (
    <div>
      <BannerSection />
      <Card></Card>
      <Facility />
      {/* <Howitwork/> */}
      <Timeline></Timeline>
      <SportsNews/>
      <WatchEvent></WatchEvent>
      <NextEvent></NextEvent>
      <TestimonialSlider/>
     
      
    </div>
  )
}

export default Home