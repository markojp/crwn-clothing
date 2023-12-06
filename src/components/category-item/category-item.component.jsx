import React from "react";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const actionText = "shop now";
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>{actionText.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
