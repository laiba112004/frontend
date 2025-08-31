import React from 'react';



const products = [
  {
    id: 1,
    image: 'https://www.junaidjamshed.com/media/catalog/product/2/5/25-213_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2',
    name: 'WHITE RAW SILK EMBROIDERED KURTI',
    price: 'PKR 10,990.00',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    image: 'https://www.junaidjamshed.com/media/catalog/product/j/s/jss-25-441_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2',
    name: 'OFF WHITE LAWN EMBROIDERED KURTI',
    price: 'PKR 4,690.00',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    image: 'https://www.junaidjamshed.com/media/catalog/product/j/s/jss-25-440_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2',
    name: 'GREEN LAWN EMBROIDERED KURTI',
    price: 'PKR 4,690.00',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    image: 'https://www.junaidjamshed.com/media/catalog/product/2/5/25-454_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2',
    name: 'GREEN LAWN EMBROIDERED KURTI',
    price: 'PKR 4,690.00',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    image: 'https://www.junaidjamshed.com/media/catalog/product/2/4/24-448._1_a.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2',
    name: 'GREEN LAWN EMBROIDERED KURTI',
    price: 'PKR 4,690.00',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
];


const ProductCard = ({ product }) => {
  return (
    <div  className="w-full sm:w-1/2 md:w-1/3  xl:w-1/5 p-1 sm:p-2 group">

      <div
        className=" transition duration-300 p-3 
             relative overflow-hidden group hover:shadow-lg hover:bg-white"
      >
    
       
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
      
          
        
        <p className="text-sm font-medium text-gray-800 h-10 overflow-hidden mt-3">{product.name}</p>
        <p className="text-base font-semibold text-gray-900 mt-1">{product.price}</p>

    
        <div className="flex flex-wrap  gap-2 mt-3">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="text-xs px-2 py-1 border border-gray-300 rounded text-gray-600 bg-white"
            >
              {size}
            </span>
          ))}
        </div>

        
        <div className="mt-3">
          <button
            className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 
             bg-white text-black border border-black text-sm py-2 rounded-md"
            onClick={() => alert(`Added "${product.name}" to bag!`)}
          >
            ADD TO BAG
          </button>
        </div>
      </div>
      </div>
      
    
  );
};


const ProductDisplay = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-4 md:px-6 lg:px-8">
  <div className="max-w-screen-xl mx-auto py-8">
    <h2 className="text-small font-semibold text-gray-800 mb-6 text-center">
      TRENDY KURTIS
    </h2>
    <hr />

    <div className="flex flex-wrap -mx-1 sm:-mx-2 justify-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />

      ))}
    </div>
  </div>
</div>


    
  );
};

export default ProductDisplay;
