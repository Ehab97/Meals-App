import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../../../utlis/data/dummy-data";
import { colors } from "../../../utlis/colors";

function MealDetails({ route, navigation }) {
  const [item, setItem] = React.useState(null);
  const { mealId } = route.params;
  React.useEffect(() => {
    const meal = MEALS.find((meal) => meal.id === mealId);
    setItem(meal);
  }, [mealId]);

  React.useLayoutEffect(() => {
    const meal = MEALS.find((meal) => meal.id === mealId);
    navigation.setOptions({
      title: meal.title,
      headerStyle: {
        backgroundColor: colors.accent,
      },
    });
  }, [navigation, mealId]);

  return (
    <ScrollView style={styles.container}>
      {item && (
        <>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.info}>
              <Text style={styles.infoText}>{`${item.duration} min`}</Text>
              <Text style={styles.infoText}>{item.complexity.toUpperCase()}</Text>
              <Text style={styles.infoText}>{item.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.ingredientsTitle}>Ingredients:</Text>
            {item.ingredients.map((ingredient, index) => (
              <Text key={index} style={styles.ingredient}>
                {ingredient}
              </Text>
            ))}
            <Text style={styles.stepsTitle}>Steps:</Text>
            {item.steps.map((step, index) => (
              <Text key={index} style={styles.step}>
                {`${index + 1}. ${step}`}
              </Text>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: 200,
    width: "100%",
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#888",
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  step: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default MealDetails;
