
import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
       
        <div className="flex-1">
          <Link to="/home" className="text-sm text-gray-700 hover:text-black transition">
            CONTINUE SHOPPING
          </Link>
        </div>

    
        <div className="flex-1 text-center">
          <Link to="/home" className="text-3xl font-bold text-gray-800">
            J.
          </Link>
        </div>

    
        <div className="flex-1 text-right text-sm text-gray-600 hidden md:block">
          <p>+92 21 111 112 113</p>
          <p>ESHOP@JUNAIDJAMSHED.COM</p>
        </div>
      </div>
    </nav>
  );
}