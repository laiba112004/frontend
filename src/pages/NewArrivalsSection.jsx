export default function NewArrivalsSection() {
  const categories = ["Women", "Men", "Boys & Girls", "Fragrances"];

  return (
    <section className=" bg-white py-10 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6 text-center ">
          Shop For New Arrival
        </h2>

        
        <div className=" flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full border border-gray-600 text-gray-800 text-sm md:text-base 
             hover:bg-black hover:text-white transition duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


