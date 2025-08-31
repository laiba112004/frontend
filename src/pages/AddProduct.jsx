import axiosInstance from "../utils/axiosInstance"; 
import React, { useState } from "react";
const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    sku: "",
    color: "",
    type: "",
    size: "",
   ProductDetails: "",
      MoreInformation: "",
       Reviews: "",
    images: [],
  });

  function changeHandler(e) {
    const name = e.target.name;
    if (name === "images") {
      setProductData({
        ...productData,
        images: Array.from(e.target.files),
         
      });
       
    } else {
      setProductData({
        ...productData,
        [name]: e.target.value,
      });
    }
  }

  async function submitHandler(e) {
    e.preventDefault();

    const formData = new FormData();

    for (const key in productData) {
      if (key === "images") {
        productData.images.forEach((file) => {
          formData.append("images", file); 
        });
      } else {
        formData.append(key, productData[key]);
      }
    }

    try {
      const res = await axiosInstance.post("http://localhost:5001/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
           price: Number(formData.price),  
        },
      });

      console.log("Product created:", res.data);
      alert("Product added successfully!");

      setProductData({
        title: "",
        price: "",
        sku: "",
        color: "",
        type: "",
        size: "",
        ProductDetails: "",
        MoreInformation: "",
        Reviews: "",
        images: [],
      });

      document.getElementById("images").value = "";
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to add product.");
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">ADD PRODUCT</h1>
      <form
        onSubmit={submitHandler}
        className="w-[50%] mx-auto p-6 bg-gray-100 my-10 rounded-md"
      >
        <label htmlFor="title" className="block text-sm mb-1">Product Name</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter product name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.title}
          onChange={changeHandler}
          required
        />

        <label htmlFor="price" className="block text-sm mb-1">Price</label>
        <input
          id="price"
          name="price"
          type="Number"
          placeholder="Enter price"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.price}
          onChange={changeHandler}
          required
        />

        <label htmlFor="sku" className="block text-sm mb-1">SKU</label>
        <input
          id="sku"
          name="sku"
          type="text"
          placeholder="e.g.,ESUF4149 "
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.sku}
          onChange={changeHandler}
          required
        />

        

        <label htmlFor="color" className="block text-sm mb-1">Color</label>
        <input
          id="color"
          name="color"
          type="text"
          placeholder="Enter Color"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.color}
          onChange={changeHandler}
          required
        />

        <label htmlFor="type" className="block text-sm mb-1">Product Type</label>
        <input
          id="type"
          name="type"
          type="text"
          placeholder="e.g., UNSTITCHED"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.type}
          onChange={changeHandler}
          required
        />

        <label htmlFor="size" className="block text-sm mb-1">Product Size</label>
        <input
          id="size"
          name="size"
          type="text"
          placeholder="e.g., DEFAULT"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.size}
          onChange={changeHandler}
          required
        />

        <label htmlFor="images" className="block text-sm mb-1">Upload Product Images</label>
        <input
          id="images"
          name="images"
          type="file"
          multiple
          accept="image/*"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          onChange={changeHandler}
        />

        

        <label htmlFor="ProductDetails" className="block text-sm mb-1">Product Details</label>
        <textarea
          id="ProductDetails"
          name="ProductDetails"
          rows={4}
          placeholder="e.g., Details"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.ProductDetails}
          onChange={changeHandler}
          required
        />

<label htmlFor="MoreInformation" className="block text-sm mb-1">MoreInformation</label>
        <textarea
          id="MoreInformation"
          name="MoreInformation"
          rows={2}
          placeholder="e.g., Info"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.MoreInformation}
          onChange={changeHandler}
          required
        />

<label htmlFor="Reviews" className="block text-sm mb-1">Reviews</label>
        <textarea
          id="Reviews"
          name="Reviews"
          rows={2}
          placeholder="e.g., Reviews"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.Reviews}
          onChange={changeHandler}
          required
        />


        <div className="flex justify-center mt-2">
          <button type="submit" className="py-2 px-10 bg-black text-white rounded-sm">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
