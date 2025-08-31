import React from 'react'
import Top from './Top'
import Navbar from '../Components/common/Navbar'
import { Link } from "react-router-dom"
import Pics from './Pics'
import ProductDisplay from './ProductDisplay'
import Accessories from './Accessories'
import Fragrance from './Fragrance'
import NewsletterSection from './NewsLetterSection'
import Footer from './Footer'

function Women() {
  return (
    <div>
      <Top />
      <Navbar />
      <div className="navbar  bg-[whitesmoke] shadow-sm">
  <div class="flex items-center space-x-2 text-gray-600 ">
  <Link to="/Home">Home</Link>
  <span>›</span>
  <span className='text-black'>Women Collection</span>
</div>
</div>
<div className="min-h-screen bg-gray-50 px-2 sm:px-4 md:px-6 lg:px-8">
 <div className="w-full py-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
      <Link to="/Unstiched" 
        className="w-[95%] md:w-[45%] mx-auto md:mx-4 block">  <img
          src="https://www.junaidjamshed.com/media/wysiwyg/uns_6.jpg" 
          alt="Big Image 1"
          className="w-full object-cover hover:brightness-90 transition duration-300 shadow-md"
        /> </Link>
        <img
          src="https://www.junaidjamshed.com/media/wysiwyg/stitched_68.jpg" 
          alt="Big Image 2"
          className="w-[95%] md:w-[45%] mx-auto md:mx-4 object-cover  hover:brightness-90 transition duration-300 shadow-md"
        />
      </div>
    </div>
    <Pics />
     
        <ProductDisplay />
        <Accessories />
        <div className="w-full py-8">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center">
        <img
          src="https://www.junaidjamshed.com/media/wysiwyg/12_2.jpg" 
          alt="Big Image 1"
          className="w-[95%] md:w-[45%] mx-auto md:mx-4 object-cover hover:brightness-90 transition duration-300 shadow-md"
        />
        <img
          src="https://www.junaidjamshed.com/media/wysiwyg/scarf.jpg" 
          alt="Big Image 2"
          className="w-[95%] md:w-[45%] mx-auto md:mx-4 object-cover  hover:brightness-90 transition duration-300 shadow-md"
        />
      </div>
    </div>
    <Fragrance />
    <div className="w-full  overflow-hidden mb-8">
  <img
    src="https://www.junaidjamshed.com/media/wysiwyg/makeup_25.jpg"
    alt="Banner"
    className="w-full h-[590px] object-cover "
  />
</div>
<NewsletterSection />
<Footer />
        </div>
    </div>
  )
}

export default Women