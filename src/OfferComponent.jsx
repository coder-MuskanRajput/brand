import React, { useState } from 'react';

const Offer = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Material');

  const filters = [
    'All Material',
    'Bricks',
    'Crash Stones',
    'Iron Rods',
    'Tiles',
    'Steel Railing',
    'Floor Marble',
    'Door Kit',
    'Cement Chemicals',
    'Iron Wire',
  ];

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const renderContent = () => {
    const data = {
      'All Material': [
        { 
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcafimUiFfH8k1dza4x41ZiPMxHPnLSnrkw&s',
          heading: 'Crush Stone', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img: 'https://brickcart.in/wp-content/uploads/2021/11/clay-brick-1.jpg',
          heading: 'Bricks', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img: 'https://img.theweek.in/content/dam/week/week/news/biz-tech/images/2024/6/14/ambuja-cement.jpg',
          heading: 'Cement', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img: 'https://5.imimg.com/data5/DX/LR/YV/SELLER-39751795/iron-rod-1582098727454-500x500.jpg',
          heading: 'Iron Rod', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:"https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/R226849-91",
          heading: 'Steel Rod', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        {
          img:"https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/R226849-91",
          heading: 'Steel Rod', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:'https://4.imimg.com/data4/YH/IW/MY-5163514/iron-wire.jpg',
          heading: 'Iron Wire', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:'https://5.imimg.com/data5/SELLER/Default/2023/7/323385974/CE/DR/XU/9927785/murram-soil-500x500.jpeg',
          heading: 'Murram', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:'https://www.investopedia.com/thmb/5OehRQwneiZA0LY7O7PMDwv_gDA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sand-texture-in-the-beach-917396446-a71407b27e164c53a7bf0a89510074d4.jpg',
          heading:'Sand', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:'https://5.imimg.com/data5/ANDROID/Default/2023/4/302935121/SR/DH/AK/52523577/product-jpeg.jpg',
          heading: 'White Cement', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:'https://4.imimg.com/data4/YH/IW/MY-5163514/iron-wire.jpg',
          heading: 'Iron Wire', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:'https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/types-of-tiles/_jcr_content/root/container/container_1646056284/teaser.coreimg.jpeg/1702559922043/types-of-tiles-1.jpeg',
          heading: 'Tiles', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:'https://5.imimg.com/data5/ED/KS/RC/SELLER-1454934/stainless-steel-railing.png',
          heading: 'Steel Railing', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:'https://techsquadteam.com/assets/profile/blogimages/de2e6fff1015fa010971966db35f6e19.jpg',
          heading: 'Floor Marble', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:"https://m.media-amazon.com/images/I/61gmMj2ddCL._AC_UF1000,1000_QL80_.jpg",
          heading: 'Door Kit', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
        { 
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1S18V1XkaISj0e3SZv_czb1A8Q-DO0XxQw&s',
          heading: 'Cement Chemical', 
          mrp: '₹59,990' ,
          desc: 'Sale Price', 
          price: '₹ 37,990 / Tone', 
          offer : 'Upto 70% off on your order'
        },
      ],
      'Bricks': [{ 
        img :'https://brickcart.in/wp-content/uploads/2021/11/clay-brick-1.jpg',
        heading: 'Bricks', 
        mrp: '₹59,990' ,
        desc: 'Sale Price', 
        price: '₹ 37,990 / Tone', 
        offer : 'Upto 70% off on your order'
      },],
      'Crash Stones': [{ 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcafimUiFfH8k1dza4x41ZiPMxHPnLSnrkw&s',
        heading: 'Crush Stone', 
        mrp: '₹59,990' ,
        desc: 'Sale Price', 
        price: '₹ 37,990 / Tone', 
        offer : 'Upto 70% off on your order'
      },],
      'Iron Rods': [{ 
        img: 'https://5.imimg.com/data5/DX/LR/YV/SELLER-39751795/iron-rod-1582098727454-500x500.jpg',
        heading: 'Iron Rod', 
        mrp: '₹59,990' ,
        desc: 'Sale Price', 
        price: '₹ 37,990 / Tone', 
        offer : 'Upto 70% off on your order'
      },],
      'Tiles': [{ 
        img:'https://www.ultratechcement.com/content/ultratechcement/in/en/home/for-homebuilders/home-building-explained-single/descriptive-articles/types-of-tiles/_jcr_content/root/container/container_1646056284/teaser.coreimg.jpeg/1702559922043/types-of-tiles-1.jpeg',
        heading: 'Tiles', 
        mrp: '₹59,990' ,
        desc: 'Sale Price', 
        price: '₹ 37,990 / Tone', 
        offer : 'Upto 70% off on your order'
      },
],
      'Steel Railing': [{ 
        img:'https://5.imimg.com/data5/ED/KS/RC/SELLER-1454934/stainless-steel-railing.png',
        heading: 'Steel Railing', 
        mrp: '₹59,990' ,
        desc: 'Sale Price', 
        price: '₹ 37,990 / Tone', 
        offer : 'Upto 70% off on your order'
      },],
      'Floor Marble': [{ 
        img:'https://techsquadteam.com/assets/profile/blogimages/de2e6fff1015fa010971966db35f6e19.jpg',
        heading: 'Floor Marble', 
        mrp: '₹59,990' ,
        desc: 'Sale Price', 
        price: '₹ 37,990 / Tone', 
        offer : 'Upto 70% off on your order'
      },],
      'Door Kit': [{ 
        img:"https://m.media-amazon.com/images/I/61gmMj2ddCL._AC_UF1000,1000_QL80_.jpg",
        heading: 'Door Kit', 
        mrp: '₹59,990' ,
        desc: 'Sale Price', 
        price: '₹ 37,990 / Tone', 
        offer : 'Upto 70% off on your order'
      },],
      'Cement Chemicals': [{ 
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1S18V1XkaISj0e3SZv_czb1A8Q-DO0XxQw&s',
        heading: 'Cement Chemical', 
        mrp: '₹59,990' ,
        desc: 'Sale Price', 
        price: '₹ 37,990 / Tone', 
        offer : 'Upto 70% off on your order'
      },],
      'Iron Wire': [{ 
        img:'https://4.imimg.com/data4/YH/IW/MY-5163514/iron-wire.jpg',
        heading: 'Iron Wire', 
        mrp: '₹59,990' ,
        desc: 'Sale Price', 
        price: '₹ 37,990 / Tone', 
        offer : 'Upto 70% off on your order'
      },],
    };
    
    const itemsToRender = data[selectedFilter] || [];

    return itemsToRender.map((item, index) => (
      <div key={index} className="bg-white p-4 shadow rounded">
        <img src={item.img} alt={item.heading} className="w-full h-32 object-cover" />
        <h3 className="text-2xl text-center font-semibold text-blue-500 mt-2">{item.heading}</h3>
        <p className="text-sm line-through text-left">MRP: {item.mrp}</p>
        <p className="text-sm text-left text-gray-400 mt-1">{item.desc}</p>
        <p className="text-md mt-2 font-bold text-left">{item.price}</p>
        <p className="text-sm mt-2 text-left text-blue-500">{item.offer}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white w-full rounded mx-auto block">Order Now</button>
      </div>
    ));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side Filter */}
      <div className="lg:w-1/5 bg-white shadow-xl p-4 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Filter</h2>
        <ul>
          {filters.map((filter) => (
            <React.Fragment key={filter}>
              <li
                className={`flex items-center p-2 cursor-pointer ${
                  selectedFilter === filter ? 'font-bold' : 'text-black'
                }`}
                onClick={() => handleFilterChange(filter)}
              >
                <div
                  className={`w-4 h-4 mr-2 rounded-full ${
                    selectedFilter === filter ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                ></div>
                {filter}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Right Side Boxes */}
      <div className="lg:w-4/5 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Offer;
