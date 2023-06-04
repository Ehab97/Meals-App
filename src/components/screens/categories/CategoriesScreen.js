import React from "react";
import { View, FlatList, Text } from "react-native";
import { CATEGORIES } from "../../../utlis/data/dummy-data";
import CategoryItem from "./CategoryItem";

function CategoriesScreen({navigation}) {
    //const navigation = useNavigation();
    //console.log(navigation);
  return ( 
    <FlatList
      data={CATEGORIES}
      renderItem={
        ({ item }) => <CategoryItem item={item} navigation={navigation} /> 
      }
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
