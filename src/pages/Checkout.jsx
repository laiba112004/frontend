import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function Checkout({ cartItems = [], subtotal = 0 }) {


  const product = {
    id: "12345", 
    name: "WHITE RAW SILK EMBROIDERED KURTI",
    price: 10990,
    image: "https://www.junaidjamshed.com/media/catalog/product/2/5/25-213_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds",
    size: "Small"
  };

  const quantity = 1; 
  const [shippingMethod, setShippingMethod] = useState('local_shipment');
  const shippingCost = 149; 
  const totalAmount = (product.price * quantity) + shippingCost;

  
  const citiesByProvince = {
    "Punjab": ["Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Sialkot"],
    "Sindh": ["Karachi", "Hyderabad", "Sukkur"],
    "Khyber Pakhtunkhwa": ["Peshawar", "Mardan", "Abbottabad"],
    "Balochistan": ["Quetta", "Gwadar"],
    "Gilgit-Baltistan": ["Gilgit", "Skardu"],
    "Azad Kashmir": ["Muzaffarabad", "Mirpur"],
    "Islamabad Capital Territory": ["Islamabad"],
  };

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedCity(""); 
  };

  
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    country: "Pakistan",
    postalcode: "",
    number: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        ...formData,
        city: selectedCity,
        province: selectedProvince,
        productId: product.id,
        productName: product.name,
        price: product.price,
        quantity,
        totalAmount
      };

      const res = await axiosInstance.post("http://localhost:5001/api/orders", orderData);
      alert(" Order placed successfully!");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert(" Failed to place order");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl  px-4 py-8">
        <h1 className="text-3xl font-medium mb-8 ml-56 text-center text-black-800">SECURE CHECKOUT</h1>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
      
          <div className="lg:w-3/5  p-6 md:p-8 ">
            
            <form className="space-y-6" onSubmit={handleSubmit}>
            
              <div>
                 <h1 className="text-2xl font-bold mb-8 text-gray-800">Shipping Address</h1>

                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-gray-900 placeholder-gray-400 custom-input-focus"
                  placeholder="your.email@example.com"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">You can create an account after checkout.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-gray-900 placeholder-gray-400 custom-input-focus"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-gray-900 placeholder-gray-400 custom-input-focus"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-gray-900 placeholder-gray-400 custom-input-focus"
                  placeholder="House #, Street #, Area"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-gray-900 custom-input-focus"
                    required
                  >
                    <option value="Pakistan">Pakistan</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="province"
                    name="province"
                    value={selectedProvince}
                    onChange={handleProvinceChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-gray-900 custom-input-focus"
                    required
                  >
                    <option value="">-- Select Province --</option>
                    {Object.keys(citiesByProvince).map((province) => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={!selectedProvince}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-gray-900 custom-input-focus"
                    required
                  >
                    <option value="">-- Select City --</option>
                    {selectedProvince && citiesByProvince[selectedProvince].map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700 mb-1">
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalcode"
                    name="postalcode"
                    value={formData.postalcode}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-gray-900 placeholder-gray-400 custom-input-focus"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-gray-900 placeholder-gray-400 custom-input-focus"
                  placeholder="+92 3XX XXXXXXX"
                  required
                />
              </div>

              <div className="pt-4 ">
                <h2 className="text-xl font-bold mb-4">Shipping Methods</h2>
                <div className="flex items-center space-x-4 mb-2">
                  <input
                    type="radio"
                    id="local_shipment"
                    name="shippingMethod"
                    value="local_shipment"
                    checked={shippingMethod === 'local_shipment'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300"
                  />
                  <label htmlFor="local_shipment" className="flex-grow text-sm font-medium text-gray-700">
                    <span className="font-bold">PKR {shippingCost.toLocaleString()}.00</span> Fixed - Local Shipment
                  </label>
                </div>
                <p className="text-sm text-blue-600 hover:underline cursor-pointer mt-4">See our Shipping Policy</p>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-gray-800 transition"
                >
                  NEXT
                </button>
              </div>
            </form>
          </div>

         
          </div>

        </div>
      </div>
    
  );
}
