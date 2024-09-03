import { Link } from "react-router-dom";

import React from 'react';
import './styles/mainStyle.css';

export default function CategoryItem() {
  return (
    
      <div className="categoryitem-container">
        <Link to={`/products/${item.cat}`}>
        <img  className="categoryitem-image" src={item.img} />
        <div className="categoryitem-info-container">
          <h1 className="categoryitem-info-title">{item.title}</h1>
          <button className="categoryitem-info-button">SHOP NOW</button>
        </div>
        </Link>
      </div>
    
    
    
  )
}
