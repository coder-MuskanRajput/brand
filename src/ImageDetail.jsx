import React from 'react';
import { useLocation } from 'react-router-dom';

const relatedImages = [
  {
    url: "https://5.imimg.com/data5/SELLER/Default/2021/10/CO/NN/OJ/23571748/ambuja-ppc-cement.jpg",
    heading: "Ambuja PPC Cement",
    rupee : "Rs 430.00" ,
    description: "Sale Price",
    price: "Rs.325.00/Bag",
  },
  {
    url: "https://5.imimg.com/data5/SELLER/Default/2022/11/OH/CT/HF/127069126/ambuja-plus-cement.jpg",
    heading: "Ambuja Plus Cement",
    rupee : "Rs 430.00" ,
    description: "Sale Price",
    price: "Rs.325.00/Bag",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlnVx4C1AJdJeuFYwpTtJI52Z6oYDdgsClw&s",
    heading: "Chemical Cement",
    rupee : "Rs 430.00" ,
    description: "Sale Price",
    price: "Rs.325.00/Bag",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCYImP_8PaR4yFLrnr__9Fcpndl1unh5ZyQ&s",
    heading: "Ambuja Kawach",
    rupee : "Rs 430.00" ,
    description: "Sale Price",
    price: "Rs.325.00/Bag",
  },
  ];

const ImageDetail = () => {
  const location = useLocation();
  const { selectedImage } = location.state || {};

  return (
    <div className="flex min-h-screen w-full bg-gray-100 p-4">
      {selectedImage ? (
        <>
          <div className="w-1/4 flex flex-col items-center p-4">
            <img src="https://img.etimg.com/thumb/width-420,height-315,imgsize-43274,resizemode-75,msid-109871024/markets/stocks/recos/buy-ambuja-cements-target-price-rs-665-choice-equitynbsp/ambuja-cement.jpg" alt="Selected" className="w-full mb-4  p-2 bg-white shadow-md" />
          </div>
          <div className="w-3/4 p-4 flex flex-col gap-4 ">
            <div className="grid grid-cols-2 gap-4  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 bg-white shadow-xl">
              {relatedImages.map((image, index) => (
                <div key={index} className="flex flex-col  p-4 ">
                  <img src={image.url} alt={`Related ${index + 1}`} className="h-24 w-full mb-2 text-center shadow-md" />
                  <h3 className="text-lg font-bold text-left">{image.heading}</h3>
                 <div><span className='line-through'>{image.rupee}</span> <span className='text-blue-600'>20% off</span> </div>
                  <p className="text-gray-400">{image.description}</p>
                  <p className="text-black font-bold">{image.price}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 bg-white shadow-xl">
              {relatedImages.map((image, index) => (
                <div key={index} className="flex flex-col  p-4 ">
                  <img src={image.url} alt={`Related ${index + 1}`} className="h-24 w-full mb-2 text-center shadow-md" />
                  <h3 className="text-lg font-bold text-left">{image.heading}</h3>
                 <div><span className='line-through'>{image.rupee}</span> <span className='text-blue-600'>20% off</span> </div>
                  <p className="text-gray-400">{image.description}</p>
                  <p className="text-black font-bold">{image.price}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>No image selected</p>
      )}
    </div>
  );
};

export default ImageDetail;
