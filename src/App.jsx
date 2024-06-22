import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Brand from './Brand';
import ImageDetail from './ImageDetail';
import Offer from './OfferComponent';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Brand />} />
      <Route path="/image-detail" element={<ImageDetail />} />
      <Route path='/offer' element={<Offer/>}/>
    </Routes>
  );
};

export default App;
