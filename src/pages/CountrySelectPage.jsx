
import { Link } from "react-router-dom"



function CountrySelectPage({}) {
  return (
    <div>
        <div className="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner_144.jpg')" }}> 
        <div className="flex flex-col items-center space-y-4  backdrop-blur-sm bg-white/10  ">
     <Link to="/Admindashboard">  <button className="w-64 text-white text-lg py-2 border border-white bg-transparent hover:bg-white hover:text-black transition duration-300">
          Admin Dashboard
        </button> </Link> 
         <Link to="/home" className="w-64 text-center text-white text-lg py-2 border border-white bg-transparent hover:bg-white hover:text-black transition duration-300">Enter</Link>
          
      </div>

                 </div>
    </div>
  )
}

export default CountrySelectPage