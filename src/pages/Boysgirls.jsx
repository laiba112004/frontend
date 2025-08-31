const imageData = [
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/jj-theme-12.jpg',
    name: 'Teen Girls',
  },
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/jj-theme-13.jpg',
    name: 'Teen Boys',
  },
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/jj-theme-14.jpg',
    name: 'Kid Girls',
  },
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/jj-theme-15.jpg',
    name: 'Kid Boys',
  },
];

const Boysgirls = () => {
  return (
    <section className="py-10 ml-4 mr-4 px-4 bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-10">
        Shop By Boys and Girls Category
      </h2>
      <div className="flex  items-center gap-8">
        {imageData.map((item, index) => (
          <div key={index} className="w-full max-w-md ">
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-auto  shadow-md"
            />
            <p className="mt-2 text-xl font-medium text-gray-700">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Boysgirls;
