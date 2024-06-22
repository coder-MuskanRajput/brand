import React from 'react';
import { useNavigate } from 'react-router-dom';

const Brand = () => {
  const navigate = useNavigate();

  const image1 = [
    "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230207130455.jpg",
    "https://mir-s3-cdn-cf.behance.net/projects/404/dec23384735345.Y3JvcCwxMTUwLDkwMCwyNSww.jpg",
    "https://buyspectra.com/uploads/brands/jaquar.png",
    "https://mir-s3-cdn-cf.behance.net/projects/404/dec23384735345.Y3JvcCwxMTUwLDkwMCwyNSww.jpg",
    "https://buyspectra.com/uploads/brands/jaquar.png",
    "https://mir-s3-cdn-cf.behance.net/projects/404/dec23384735345.Y3JvcCwxMTUwLDkwMCwyNSww.jpg",
  ];
  const image2 = [
    "https://ravirao.com/wp-content/uploads/2017/09/cera-tiles-logo.png",
    "https://srinathcollective.com/wp-content/uploads/2021/02/essco-bathrm-21.jpg",
    "https://ravirao.com/wp-content/uploads/2017/09/cera-tiles-logo.png",
    "https://srinathcollective.com/wp-content/uploads/2021/02/essco-bathrm-21.jpg",
    "https://ravirao.com/wp-content/uploads/2017/09/cera-tiles-logo.png",
    "https://srinathcollective.com/wp-content/uploads/2021/02/essco-bathrm-21.jpg",
  ];
  const image3 = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZgsV9fXuDciL77u9mAqHNo6VarqajjFewg&s",
    "https://pngimagesfree.com/wp-content/uploads/Hindware-Logo-PNG_pngimagesfree.com_.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiIv-NrGPjIbnJnYzxT1vR1MtOOHAM5aHJw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjXrbon9YNjiyfWnZyyTjcJy1Vaxqo6tNig&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiIv-NrGPjIbnJnYzxT1vR1MtOOHAM5aHJw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjXrbon9YNjiyfWnZyyTjcJy1Vaxqo6tNig&s",
  ];
  const image4 = [
    "https://mma.prnewswire.com/media/619434/Kohler_Logo.jpg?p=facebook",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRossrJf4isaRq0QiYAYGqwde8_88gsOjI2cg&s",
    "https://www.vikingindia.com/wp-content/themes/vikingindia/images/viking_logo.png",
    "https://i.ytimg.com/vi/nq-YKUC25Nk/maxresdefault.jpg",
    "https://www.vikingindia.com/wp-content/themes/vikingindia/images/viking_logo.png",
    "https://i.ytimg.com/vi/nq-YKUC25Nk/maxresdefault.jpg",
  ];

  const handleImageClick = (image) => {
    navigate('/image-detail', { state: { selectedImage: image } });
  };

  const renderImages = (images, withMargin = false) => (
    images.map((image, index) => (
      <div 
        key={index} 
        onClick={() => handleImageClick(image)}
        className={`flex justify-center items-center w-28 h-16 p-4 border-2 cursor-pointer rounded-lg border-red-500 bg-white shadow-md ${withMargin ? 'ml-4 md:ml-20' : ''}`}
      >
        <img src={image} alt={`Logo ${index + 1}`} className="h-12 w-12"/>
      </div>
    ))
  );

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gray-100 p-4">
      <h2 className="text-2xl text-center text-[#354FA7] font-bold mb-4">Our Top Brands</h2>

      <div className="w-full bg-white shadow-xl mb-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-6 bg-white shadow-xl">
          {renderImages(image1)}
          {renderImages(image2, true)}
          {renderImages(image3)}
          {renderImages(image4, true)}
        </div>
      </div>

      <div className="w-full bg-white shadow-xl mb-6">
        <h2 className="text-xl p-2 font-bold mb-4">Plumbing Material Brands</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-6 bg-white shadow-xl">
          {renderImages(image1)}
          {renderImages(image2, true)}
          {renderImages(image3)}
          {renderImages(image4, true)}
        </div>
      </div>

      <div className="w-full bg-white shadow-xl mb-6">
        <h2 className="text-xl p-2 font-bold mb-4">Construction Material Brands</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-6 bg-white shadow-xl">
          {renderImages(image1)}
          {renderImages(image2, true)}
          {renderImages(image3)}
          {renderImages(image4, true)}
        </div>
      </div>

      <div className="w-full bg-white shadow-xl mb-6">
        <h2 className="text-xl p-2 font-bold mb-4">Home Design Material Brands</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-6 bg-white shadow-xl">
          {renderImages(image1)}
          {renderImages(image2, true)}
          {renderImages(image3)}
          {renderImages(image4, true)}
        </div>
      </div>
    </div>
  );
};

export default Brand;
