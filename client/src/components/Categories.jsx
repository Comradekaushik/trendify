






import React from 'react';
import { categories } from "../data";
// import { mobile } from "../responsive";
import './styles/mainStyle.css';
import CategoryItem from "./CategoryItem";

export default function Categories() {
  return (
    <div className="categories-container">

        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
    </div>
  )
}
