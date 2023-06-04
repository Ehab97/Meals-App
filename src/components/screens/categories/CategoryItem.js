import React from "react";
import CategoryGridTile from "./CategoryGridTile";

function CategoryItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

export default CategoryItem;
