import React from "react";
import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  const categorieElements = categories.map((category) => {
    return <CategoryItem key={category.id} category={category} />;
  });
  return <div className="directory-container">{categorieElements}</div>;
};

export default Directory;
