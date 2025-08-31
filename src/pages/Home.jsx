import Navbar from "../Components/common/Navbar"
import Carousel from "./Carousel"
import FeaturedCollection from "./FeaturedCollection"
import ImageCollection from "./ImageCollection"
import MenCategory from "./MenCategory"
import NewArrivalsSection from "./NewArrivalsSection"
import Fragrances from "./Fragrances"


import Top from "./Top"

import Boysgirls from "./boysgirls"
import FullScreenVideo from "./FullScreenVideo"
import NewsletterSection from "./NewsLetterSection"
import Footer from "./Footer"


 function Home() {
 return (
  <>
    <Top />
      <Navbar />
      <div className="max-w-9xl  px-2 sm:px-4 md:px-6 lg:px-8">
      <Carousel />
      <NewArrivalsSection />
      <FeaturedCollection />
      
      <ImageCollection />
      <MenCategory />
      <Fragrances />
      <Boysgirls />
      <FullScreenVideo />
      <NewsletterSection />
      <Footer/>
      
      </div>
      
       </>
  
    
      
  )
}

export default Home