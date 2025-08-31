import axiosInstance from "../utils/axiosInstance";

import React, { useState } from 'react';
import Navbar from '../Components/common/Navbar';
import NewsletterSection from './NewsLetterSection';
import Footer from './Footer';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    Fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Fullname, email, password, confirmPassword, phone } = formData;

    if (!Fullname || !email || !password || !confirmPassword || !phone) {
      return setError('Please fill in all fields');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    try {
      const res = await axiosInstance.post("/users", {
       Fullname: Fullname,
       email,
       password,
       phone,
      })
    
    alert(res.data.message || "Acouunt Created Successfully");
    setFormData({
      Fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });

   
  } catch (err) {
    console.error(err.response?.data || err.message);
    alert(err.response?.data?.message || "Registration failed!");
  }
  };

  return (
    <>
      <Navbar />
      
     <div className="min-h-screen  px-4 py-10">
  <div className="w-full sm:w-3/4 md:w-1/2 p-6 ">
  <h6 className="text-2xl font-semibold text-gray-800 mb-6">CREATE NEW CUSTOMER ACCOUNT</h6>
          <h6 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h6>
          <hr className='mb-3' />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block  font-semibold text-gray-700 py-1">Full Name</label>
              <input
                type="text"
                name="Fullname"
                
                value={formData.Fullname}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block  font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block  font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block  font-semibold text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
             <div>
              <label className="block  font-semibold text-gray-700 mb-1">Number</label>
              <input
                type=""
                name="phone"
                placeholder=""
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-50 bg-black  text-white font-semibold py-2  transition duration-300"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default CreateAccount;
