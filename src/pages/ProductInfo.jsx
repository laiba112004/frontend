import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import Top from "./Top";
import Navbar from "../Components/common/Navbar";
import RelatedCarousel from "./RelatedCarousel";
import Footer from "./Footer";

export default function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [zoomed, setZoomed] = useState(false);

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
       const res = await axiosInstance.get(`/products/${id}`);

        setProduct(res.data);
        if (res.data.images && res.data.images.length > 0) {
          setSelectedImage(res.data.images[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToBag = () => {
    if (!selectedSize) return;
    setAddedToBag(true);
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setItemQuantity((prev) => prev + 1);
    } else if (type === "decrease" && itemQuantity > 1) {
      setItemQuantity((prev) => prev - 1);
    }
  };

  if (!product) return <p className="text-center py-10">Loading product...</p>;

  return (
    <>
    <Top />
    <Navbar />
    <div className="max-w-5xl mx-auto px-4 py-0">
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        
        
        <div className="w-full lg:w-1/2">
          <div
            className="relative overflow-hidden w-full h-[600px] cursor-pointer"
            onClick={() => setZoomed(!zoomed)}
          >
            <img
              src={selectedImage}
              alt={product.title}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                zoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
              }`}
            />
          </div>
          <div className="mt-4 flex justify-center space-x-2 overflow-x-auto">
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 cursor-pointer object-cover transition-all duration-300 ${
                    selectedImage === img ? "border-2 border-black" : "border"
                  }`}
                />
              ))}
          </div>
        </div>

        
        <div className="w-full lg:w-2/4 space-y-4 text-gray-800 mt-10 lg:mt-0">
          <h1 className="text-lg md:text-2xl font-medium">{product.title}</h1>
          <p className="text-sm">SKU#: {product.sku}</p>
          <p className="text-2xl font-bold text-black"> PKR: {product.price}</p>
          <p className="text-sm">Type: {product.type}</p>
          <p className="text-sm">Color: {product.color}</p>
          <hr />

          
          <div>
            <p className="font-medium">
              Size{" "}
              {selectedSize && (
                <span className="text-black font-bold">: {selectedSize}</span>
              )}
            </p>
            <div className="flex space-x-2 mt-2">
              {product.size &&
                product.size.split(" ").map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 border rounded-full transition font-semibold ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "hover:bg-black hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
            </div>
            <button
              onClick={() => setShowSizeChart(true)}
              className="mt-2 text-blue-600 text-sm border border-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition"
            >
              VIEW SIZE CHART
            </button>
          </div>

          
          <button
            onClick={handleAddToBag}
            className="w-[400px] mt-3 bg-white text-black border border-black py-3 hover:bg-black hover:text-white transition"
          >
            {addedToBag ? "ADDED" : "ADD TO BAG"}
          </button>

          
          {addedToBag && (
            <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg p-4 z-50 flex flex-col">
              <div className="flex bg-black justify-between p-2 items-center mb-2">
                <h3 className="text-lg text-center text-white font-medium">MY BAG</h3>
                <button
                  onClick={() => setAddedToBag(false)}
                  className="text-gray-500 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center space-x-4 p-3 mb-4">
                <img
                  src={selectedImage}
                  alt="Product Thumbnail"
                  className="w-20 h-28 object-cover"
                />
                <div className="flex-grow">
                  <p className="font-semibold text-black">{product.title}</p>
                  <p className="text-sm">SIZE: {selectedSize}</p>
                  <div className="flex items-center mt-1">
                    <p className="text-sm mr-2">QTY:</p>
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="border border-gray-300 px-2 py-0.5"
                    >
                      &lt;
                    </button>
                    <span className="px-3 py-0.5 border-t border-b border-gray-300">
                      {itemQuantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="border border-gray-300 px-2 py-0.5"
                    >
                      &gt;
                    </button>
                  </div>
                  <p className="text-sm font-semibold mt-1">
                    PKR: {Number(product.price * itemQuantity).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-auto">
                <p className="font-medium text-lg">CART SUBTOTAL:</p>
                <p className="font-bold text-lg">
                   {Number(product.price * itemQuantity).toLocaleString()}
                </p>
              </div>

              <button className="w-full bg-white text-black py-3 mt-4">
                VIEW AND EDIT CART
              </button>
              <Link to="/Form" className="w-full">
                <button className="w-full bg-white text-black border border-black py-3 mt-2 hover:bg-black hover:text-white transition">
                  GO TO CHECKOUT
                </button>
              </Link>
            </div>
          )}

    
          <div className="mt-4 text-sm space-y-1">
            <p><strong>Product Details: </strong> <br /> {product.ProductDetails}</p>
            
          </div>

          
          <div className="w-full max-w-xl mx-auto my-6">
            <hr />
            <div className="collapse collapse-arrow bg-base-100">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">More Information</div>
              <div className="collapse-content text-sm">
                {product.MoreInformation || "No additional info available"}
              </div>
            </div>
            <hr />
            <div className="collapse collapse-arrow bg-base-100">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">Reviews</div>
              <div className="collapse-content text-sm">
                {product.Reviews || "No reviews yet"}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <RelatedCarousel />
    <hr className="mt-5" />
    <Footer />
    </>
  );
}
