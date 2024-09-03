import BannerSection from "../../components/banner/BannerSection"
import Facility from "../../components/facility/Facility"
import TestimonialSlider from "../../components/testimonialSlider/TestimonialSlider"
import Howitwork from "../howitwork/Howitwork"


const Home = () => {
  return (
    <div>
      <BannerSection />
      <Facility />
      <Howitwork/>
      <TestimonialSlider/>
      
    </div>
  )
}

export default Home