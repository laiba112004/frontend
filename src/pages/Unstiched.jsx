import Navbar from "../Components/common/Navbar";
import Top from "./Top";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const api_url  = "http://localhost:5001/api/products";
import axiosInstance from "../utils/axiosInstance"; 
import Footer from "./Footer";
import NewsletterSection from "./NewsLetterSection";




const Unstiched = () => {
  const [unstitchSuits, setUnstitchSuits] = useState([]);
  async function fetchProducts() {
   
    const data = await axiosInstance.get(api_url);
    console.log("data", data.data);
    setUnstitchSuits(data.data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
    return (
<>

<Top />
<Navbar />


<hr className="text-gray-500" />
      <div className="grid grid-cols-[86%_12%] py-5">
        <p className="text-center "> {unstitchSuits.length} PRODUCTS</p>

        <div>
          <select style={{ borderLeft: "1px solid black" }}>
            <option value="sort" selected>
              SORT BY
            </option>
            <option value="featured">Featured</option>
            <option value="bestselling">Best selling</option>
            <option value="A-Z">Alphabetically, A-Z</option>
            <option value="Z-A">Alphabetically, Z-A</option>
            <option value="lowtohigh">Price, low to high</option>
            <option value="hightolow">Price, high to low</option>
            <option value="old">Date, old to new</option>
            <option value="new">Date, new to old</option>
          </select>
        </div>
      </div>
      <hr className="text-gray-500" />
      <div className="w-[95%] mx-auto flex flex-col lg:flex-row gap-6 py-14">
        <aside className="hidden lg:block w-[250px] sticky top-20 self-start border-r pr-4">
          <div className="space-y-6">
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                AVAILABILTY <span className="text-xl">&#9662;</span>
              </div>

              <div className="collapse-content text-sm">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-neutral"
                />
                <span className="ml-2">IN STOCK ONLY</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                PRICE <span className="text-xl">&#9662;</span>
              </div>
              <div className="collapse-content text-sm">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-neutral"
                />
                <span className="ml-2">IN STOCK ONLY</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                PRODUCT TYPE <span className="text-xl">&#9662;</span>
              </div>
              <div className="collapse-content text-sm">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-neutral"
                />
                <span className="ml-2">IN STOCK ONLY</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                TYPE <span className="text-xl">&#9662;</span>
              </div>
              <div className="collapse-content text-sm">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-neutral"
                />
                <span className="ml-2">FABRICE</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                SIZE <span className="text-xl">&#9662;</span>
              </div>
              <div className="collapse-content text-sm">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-neutral"
                />
                <span className="ml-2">IN STOCK ONLY</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="collapse bg-base-100 border-base-300 border">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                PIECES <span className="text-xl">&#9662;</span>
              </div>
              <div className="collapse-content text-sm">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-neutral"
                />
                <span className="ml-2">IN STOCK ONLY</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
            {unstitchSuits.map((suit, index) => {
              console.log("suit", suit.images)
              return (
                <Link
                  to={`/product/${suit._id}`}
                  key={index}
                  className="bg-white p-4 "
                >
                  <img
                    src={`${suit.images[0]}`}
                    alt="suit"
                    className="w-full h-64 md:h-72 lg:h-80 object-cover mb-4"
                  />
                  <p className="font-sm text-gray-800">{suit.title}</p>
                  <p className="text-black text-sm font-bold">
                    {suit.price}
                  </p>
                  <p className="text-xs text-gray-500">{suit.type}</p>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
      
      <hr className="text-gray" />

<NewsletterSection />
<Footer />
</>



    );
};
export default Unstiched;