import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function MealIngredient({ ingredients }) {
  return (
    <>
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      <View style={styles.ingredientsContainer}>
        {ingredients?.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <View key={index} style={styles.ingredientItem}>
              <Icon name="circle" style={styles.ingredientIcon} />
              <Text style={styles.ingredientText}>{ingredient}</Text>
            </View>
          ))
        ) : (
          <Text>No ingredients found</Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  infoText: {
    fontSize: 16,
    color: "#888",
  },
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  ingredientsContainer: {
    marginTop: 10,
  },
  ingredientItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  ingredientIcon: {
    fontSize: 20,
    color: "#4CAF50",
    marginRight: 5,
  },
  ingredientText: {
    fontSize: 16,
    color: "#444",
  },
});

export default MealIngredient;
