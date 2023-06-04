import React from "react";
import CategoryGridTile from "./CategoryGridTile";

function CategoryItem({ item, navigation }) {
  const pressHandler = () => {
    navigation.navigate("Meals", { categoryId: item.id });
  };
  return <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler} />;
}

export default CategoryItem;
