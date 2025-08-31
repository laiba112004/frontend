
import React from "react";
import { useParams } from "react-router-dom";

import Top from "./Top";
import Navbar from "../Components/common/Navbar";
import ProductInfo from "./ProductInfo";
import RelatedCarousel from "./RelatedCarousel";
import NewsletterSection from "./NewsLetterSection";
import Footer from "./Footer";

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



const ProductPage1 = () => {
  const { id } = useParams(); 
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found!</p>;
   

  return (
    <>
      <Top />
      <Navbar />
    
      <div className="max-w-6xl mx-auto px-4 py-0">
      <ProductInfo />
      <RelatedCarousel />
      <NewsletterSection />
      <Footer />
      </div>
    
    </>
  );
};

export default ProductPage1;

