import axiosInstance from "../utils/axiosInstance";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axiosInstance.get(
          `http://localhost:5001/api/products/${id}`
        );

        setProductData({
          title: res.data.title || "",
          price: res.data.price || "",
          sku: res.data.sku || "",
          color: res.data.color || "",
          type: res.data.type || "",
          size: res.data.size || "",
          ProductDetails: res.data.ProductDetails || "",
          MoreInformation: res.data.MoreInformation || "",
          Reviews: res.data.Reviews || "",
          images: res.data.images || [],
        });
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("Failed to load product.");
      }
    }
    fetchProduct();
  }, [id]);

  function changeHandler(e) {
    const { name, value, files } = e.target;
    if (name === "images") {
      setProductData({
        ...productData,
        images: Array.from(files),
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
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
      const {data} = await axiosInstance.patch(
        `http://localhost:5001/api/products/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(" Product updated:", data);
      

     
      setProductData((prev) => ({
        ...prev,
        ...res.data, 
      }));
      

      alert("Product updated successfully!");

     
      navigate("/Admindashboard", { state: { updatedProduct: data } });
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product.");
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">EDIT PRODUCT</h1>
      <form
        onSubmit={submitHandler}
        className="w-[50%] mx-auto p-6 bg-gray-100 my-10 rounded-md"
      >
        <label htmlFor="title" className="block text-sm mb-1">
          Product Name
        </label>
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

        <label htmlFor="price" className="block text-sm mb-1">
          Price
        </label>
        <input
          id="price"
          name="price"
          type="text"
          placeholder="Enter price"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.price}
          onChange={changeHandler}
          required
        />

        <label htmlFor="sku" className="block text-sm mb-1">
          SKU
        </label>
        <input
          id="sku"
          name="sku"
          type="text"
          placeholder="e.g., ESUF4149"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.sku}
          onChange={changeHandler}
          required
        />

        <label htmlFor="color" className="block text-sm mb-1">
          Color
        </label>
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

        <label htmlFor="type" className="block text-sm mb-1">
          Product Type
        </label>
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

        <label htmlFor="size" className="block text-sm mb-1">
          Product Size
        </label>
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

        <label htmlFor="images" className="block text-sm mb-1">
          Upload Product Images
        </label>
        <input
          id="images"
          name="images"
          type="file"
          multiple
          accept="image/*"
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          onChange={changeHandler}
        />

        <label htmlFor="ProductDetails" className="block text-sm mb-1">
          Product Details
        </label>
        <textarea
          id="ProductDetails"
          name="ProductDetails"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.ProductDetails}
          onChange={changeHandler}
          required
        />

        <label htmlFor="MoreInformation" className="block text-sm mb-1">
          More Information
        </label>
        <textarea
          id="MoreInformation"
          name="MoreInformation"
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.MoreInformation}
          onChange={changeHandler}
          required
        />

        <label htmlFor="Reviews" className="block text-sm mb-1">
          Reviews
        </label>
        <textarea
          id="Reviews"
          name="Reviews"
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
          value={productData.Reviews}
          onChange={changeHandler}
          required
        />

        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="py-2 px-10 bg-blue-600 text-white rounded-sm"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
