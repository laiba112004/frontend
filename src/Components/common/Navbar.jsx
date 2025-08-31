import { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { FaRegFlag } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full sticky top-0 z-50 bg-white">
      
      <div className="bg-[#f8f8f8] text-sm text-gray-700 px-4 py-2 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="hidden md:flex justify-center md:justify-start space-x-4">
          <span>WELCOME TO J.</span>
         <Link to="/SignIn"> <span>SIGN IN</span></Link>
          <FaRegFlag className="inline" />
          <span>TRACKING INFO</span>
          <span>CORPORATE INQUIRY</span>
        <Link to="/CreateAccount">  <span>CREATE AN ACCOUNT</span></Link>
          <span>PKR ▾</span>
        </div>

        <div className="flex items-center justify-between md:justify-end w-full md:w-auto">
         
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <FiMenu className="text-2xl" />
            </button>
          </div>

       
          <div className="flex items-center space-x-4">
            <FiShoppingCart className="text-xl ml-4" />
            <FiSearch className="text-xl" />
          </div>
        </div>
      </div>

   
      <div className="text-center px-4 py-1 ">
        <div className="text-5xl font-light">J.</div>
      </div>

   
      <div className="hidden md:flex items-center flex-wrap justify-center gap-4 py-3 text-[14px] font-medium uppercase text-gray-800">
        <a className="hover:text-red-600 transition duration-200" href="#">New Arrivals</a>
        <a className="text-2xl font-light capitalize" href="#">SYNCC</a>
        <a className="text-[#bfa14a] text-3xl font-semibold tracking-wide capitalize" href="#">Cast & Crew</a>
        <a className="text-red-600 hover:text-black transition duration-200" href="#">Featured Collection</a>
        <Link to="/Women" className="hover:text-red-600 transition duration-200">Women</Link>
        <a className="hover:text-red-600 transition duration-200" href="#">Men</a>
        <a className="hover:text-red-600 transition duration-200" href="#">Boys & Girls</a>
        <a className="hover:text-red-600 transition duration-200" href="#">Fragrances</a>
        <a className="hover:text-red-600 transition duration-200" href="#">Makeup</a>
        <a className="hover:text-red-600 transition duration-200" href="#">Skincare</a>
        <a className="text-red-600 hover:text-black transition duration-200" href="#">New</a>
        <a className="text-red-600 hover:text-black transition duration-200" href="#">Sale</a>
      </div>

   
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <div className="text-3xl font-light">J.</div>
          <button onClick={toggleMenu}>
            <FiX className="text-2xl" />
          </button>
        </div>

        <div className="flex flex-col px-4 py-4 space-y-3 text-[14px] font-medium uppercase text-gray-800">
          <a href="#" onClick={toggleMenu}>New Arrivals</a>
          <a href="#" onClick={toggleMenu}>SYNCC</a>
          <a href="#" onClick={toggleMenu}>Cast & Crew</a>
          <a href="#" onClick={toggleMenu}>Featured Collection</a>
          <a href="#" onClick={toggleMenu}>Women</a>
          <a href="#" onClick={toggleMenu}>Men</a>
          <a href="#" onClick={toggleMenu}>Boys & Girls</a>
          <a href="#" onClick={toggleMenu}>Fragrances</a>
          <a href="#" onClick={toggleMenu}>Makeup</a>
          <a href="#" onClick={toggleMenu}>Skincare</a>
          <a href="#" onClick={toggleMenu}>New</a>
          <a href="#" onClick={toggleMenu}>Sale</a>
        </div>
      </div>

    
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
