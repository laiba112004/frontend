



import React from "react";

const UnstitchedCollection = () => {
  const items = [
    {
      src: "https://www.junaidjamshed.com/media/wysiwyg/07_1.jpg",
      label: "1PC UNSTITCHED",
    },
    {
      src: "https://www.junaidjamshed.com/media/wysiwyg/08_2.jpg",
      label: "2PC UNSTITCHED",
    },
    {
      src: "https://www.junaidjamshed.com/media/wysiwyg/09_2.jpg",
      label: "3PC UNSTITCHED",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-center gap-8">

        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-[360px] h-[450px] shadow-md  overflow-hidden border border-gray-200"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black border border-black px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition duration-300">
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnstitchedCollection;



