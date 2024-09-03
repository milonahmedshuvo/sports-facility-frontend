import BannerSection from "../../components/banner/BannerSection"
import Facility from "../../components/facility/Facility"
import TestimonialSlider from "../../components/testimonialSlider/TestimonialSlider"
import Howitwork from "../howitwork/Howitwork"
import SportsNews from "../sportsnews/SportsNews"


const Home = () => {
  return (
    <div>
      <BannerSection />
      <Facility />
      <Howitwork/>
      <SportsNews/>
      <TestimonialSlider/>
     
      
    </div>
  )
}

export default Home