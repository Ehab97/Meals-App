import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../../../utlis/data/dummy-data";
import MealItem from "./MealItem";

function MealsScreen({ route }) {
  const [filteredMeals, setFilteredMeals] = React.useState([]);
  const categoryId = route.params.categoryId;
  //const route = useRoute();
  //const categoryId = route.params.categoryId;

  React.useEffect(() => {
    const filteredMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);
    setFilteredMeals(filteredMeals);
  }, [categoryId]);
  console.log(categoryId, filteredMeals);
  return (
    <View style={styles.container}>
      {filteredMeals.length > 0 ? <FlatList
        data={filteredMeals} 
        renderItem={({ item }) => <MealItem item={item} />}
        keyExtractor={(item, index) => item.id} 
      /> : <Text>No meals found, maybe check your filters?</Text> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsScreen;