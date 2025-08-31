import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../Components/common/Navbar';
import axiosInstance from "../utils/axiosInstance"; 


const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      return setError('Please fill in both fields');
    }
    try{
     const res = await axiosInstance.post("/users/login", {email, password})
    
      const token = res.data.token;
    localStorage.setItem("token", token);  
    alert("Login successful!");
     navigate("/Home");

   
  } catch (err) {
    console.error(err.response?.data || err.message);
    setError(err.response?.data?.message || "Login failed!");
  }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row">
        
        <div className="md:w-1/2 w-full  px-4 py-10">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 ">CUSTOMER LOGIN</h2>
            <label className="block text-sm  font-semibold text-gray-700 mb-1">REGISTERED CUSTOMERS</label>
            <hr className='mt-2' />
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mt-3  font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black-400"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black-400"
                />
              </div>
              <button
                type="submit"
                className="w-50 bg-black text-white font-semibold py-2  transition duration-300"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        
        <div className="md:w-1/2 w-full flex flex-col  px-6 py-24  ">
         <label className="block text-sm  font-semibold text-gray-700 mb-1">NEW CUSTOMERS</label>
         <hr className='mt-1 mb-1' />
          <p className="text-gray-600 mb-6 ">Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
          <button
            onClick={() => navigate('/CreateAccount')}
            className="bg-black w-50 text-white font-semibold py-2 px-6  "
          >
            Create an Account
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
