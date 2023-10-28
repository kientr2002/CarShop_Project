import React from "react";
import Sidebar from "../../component/Product/Sidebar";
import Products from "../../component/Product/Products";
import  { useState } from 'react';

export default function ViewProduct() {
  const [selectedBrand, setSelectedBrand] = useState('Porsche');

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
  }

  return (
    <div className="Body">
     <div className="row">
      <div className="col-md-3">
        <Sidebar onBrandClick={handleBrandClick} />
      </div>
      <div className="col-md-9">
        <Products selectedBrand={selectedBrand} />
      </div>
    </div>
    </div> 
  );
}

