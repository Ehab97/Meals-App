import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import MealItem from "./MealItem";

const MealsList = ({ meals, isFav }) => {
  console.log({ meals });
  if (meals.length === 0) {
    return (
      <View style={styles.content}>
        {!isFav ? (
          <Text style={styles.text}>No meals found, maybe check your filters?</Text>
        ) : (
          <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
        )}
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={meals}
        renderItem={({ item }) => <MealItem item={item} />}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // fontFamily: "open-sans",
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
});

export default MealsList;
