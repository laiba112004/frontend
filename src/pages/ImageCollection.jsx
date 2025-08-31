

const imageData = [
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/vol3-1.jpg',
    name: 'Unstiched',
  },
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/vol3-2.jpg',
    name: 'Stiched',
  },
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/vol3-3.jpg',
    name: 'Kurti',
  },
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/jj-theme-22.jpg',
    name: 'Trouser',
  },
];

const ImageCollection = () => {
  return (
    <section className="py-10 px-4 ml-4 mr-4 bg-white">
      <h2 className="text-2xl font-bold  text-gray-800 mb-10">
        Shop by Women Category
      </h2>
      <div className="flex   items-center gap-8">
        {imageData.map((item, index) => (
          <div key={index} className="w-full max-w-md">
            <img
              src={item.src}
              alt={item.name}
              className=" w-full h-auto  shadow-md"
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

export default ImageCollection;
