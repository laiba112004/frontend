


import { useState, useEffect } from 'react';

const images = [
  'https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/m/e/men_23.jpg',
  'https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner_144.jpg',
  'https://scontent.flhe18-1.fna.fbcdn.net/v/t39.30808-6/480324077_1058245826333615_8490748723122373909_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=hV7zA99v9UQQ7kNvwGe1Re3&_nc_oc=AdmcFfV1dveTHa5Y4AMfhzyVTTVBiltIatgzwTVxB07xyjjwMzjvHLtRWb3vdeLf798&_nc_zt=23&_nc_ht=scontent.flhe18-1.fna&_nc_gid=Mi-R3KygmeXKPevclvKMRw&oh=00_AfJCMngicBEYZClB9V9uiqKRt0yPL_02VLA0uUuWLT-bsA&oe=683287B1',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden mt-2">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
