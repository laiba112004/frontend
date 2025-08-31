const imageData = [
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/vol3-4.jpg',
    name: 'Kameez Shalwar',
  },
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/jj-theme-5.jpg',
    name: 'Kurta',
  },
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/jj-theme-6.jpg',
    name: 'Waiscoat',
  },
  {
    src: 'https://www.junaidjamshed.com/media/wysiwyg/jj-theme-7.jpg',
    name: 'Grooms Sherwani',
  },
];

const MenCategory = () => {
  return (
    <section className="py-10 px-4 ml-4 mr-4 bg-white">
      <h2 className="text-2xl font-bold  text-gray-800 mb-10">
        Shop by Men Category
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

export default MenCategory;
