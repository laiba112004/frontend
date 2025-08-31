import React, { useState } from 'react';

const relatedProducts = [
  
  { id: 1, name: "Product 1", price: "PKR 2,500", image: "https://www.junaidjamshed.com/media/catalog/product/j/s/jss-24-365_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2" },
  { id: 2, name: "Product 2", price: "PKR 3,000", image: "https://www.junaidjamshed.com/media/catalog/product/j/s/jss-24-453_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2" },
  { id: 3, name: "Product 3", price: "PKR 1,750", image: "https://www.junaidjamshed.com/media/catalog/product/j/s/jss-25-412_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2" },
  { id: 4, name: "Product 4", price: "PKR 2,900", image: "https://www.junaidjamshed.com/media/catalog/product/j/s/jss-25-433_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2" },
  { id: 5, name: "Product 5", price: "PKR 3,200", image: "https://www.junaidjamshed.com/media/catalog/product/j/s/jss-24-465_1__2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=640&width=640&canvas=640:640&dpr=2" },
  { id: 6, name: "Product 6", price: "PKR 2,850", image: "/img6.jpg" },
  { id: 7, name: "Product 7", price: "PKR 4,100", image: "/img7.jpg" },
  { id: 8, name: "Product 8", price: "PKR 3,750", image: "/img8.jpg" },
  { id: 9, name: "Product 9", price: "PKR 2,650", image: "/img9.jpg" },
  { id: 10, name: "Product 10", price: "PKR 2,150", image: "/img10.jpg" },
  { id: 11, name: "Product 11", price: "PKR 3,550", image: "/img11.jpg" },
  { id: 12, name: "Product 12", price: "PKR 4,000", image: "/img12.jpg" },
  { id: 13, name: "Product 13", price: "PKR 2,400", image: "/img13.jpg" },
  { id: 14, name: "Product 14", price: "PKR 3,950", image: "/img14.jpg" },
  { id: 15, name: "Product 15", price: "PKR 2,300", image: "/img15.jpg" },
];

export default function RelatedCarousel() {
  const [start, setStart] = useState(0);
  const visibleItems = 4;

  const handlePrev = () => {
    if (start > 0) setStart(start - 1);
  };

  const handleNext = () => {
    if (start + visibleItems < relatedProducts.length) setStart(start + 1);
  };

  return (
    <div className="mt-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl font-semibold mb-6">Related Products</h2>

      <div className="relative">
     
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  shadow w-8 h-8 flex items-center justify-center z-10 hover:bg-gray-100"
        >
          ‹
        </button>

       
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300"
               style={{ transform: `translateX(-${start * 25}%)` }}>
            {relatedProducts.map((product, index) => (
              <div key={product.id} className="w-1/4 px-2 mx-2  flex-shrink-0 hover:bg-white/95 hover:shadow-2xl transition-shadow duration-300">
                <div className=" overflow-hidden ">
                  <img src={product.image} alt={product.name} className="w-11/12 h-65 object-cover rounded" />
                  <div className="p-3 ml-4 ">
                    <p className="font-medium text-sm">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <button
          onClick={handleNext}
          className="absolute right-[-35px]  top-1/2 transform -translate-y-1/2 shadow w-8 h-8 flex items-center justify-center z-10 hover:bg-gray-100"
        >
          ›
        </button>
      </div>
    </div>
  );
}
