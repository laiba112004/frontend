import React from "react";

const collections = [
  {
    title: "Unstiched Collection",
    image: "https://www.junaidjamshed.com/media/wysiwyg/jj-theme-16.jpg", 
  },
  {
    title: "Men's Festive Collection",
    image: "https://www.junaidjamshed.com/media/wysiwyg/jj-theme-18.jpg",
  },
  {
    title: "Stiched Collection",
    image: "https://www.junaidjamshed.com/media/wysiwyg/jj-theme-17.jpg",
  },
  {
    title: "Naerang",
    image: "https://www.junaidjamshed.com/media/wysiwyg/feature_4_.jpg",
  },
];

const FeaturedCollection = () => {
  return (
    <div className="max-w-9xl   px-4 md:px-20 py-10 bg-white">
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8 border-b pb-2">
        Featured Collections
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-center text-gray-700 group-hover:text-black">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollection;
