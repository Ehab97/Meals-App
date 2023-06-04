import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import { MEALS } from "../../../../utlis/data/dummy-data";
import { colors } from "../../../../utlis/colors";
import MealIngredient from "./MealIngredient";
import MealSteps from "./MealSteps";
import MealInfo from "./MealInfo";
import IconButton from "../../../ui/IconButton";

function MealDetails({ route, navigation }) {
  const [item, setItem] = React.useState(null);
  const { mealId } = route.params;


  const addToFavorite = (id) => {};

  React.useEffect(() => {
    const meal = MEALS.find((meal) => meal.id === mealId);
    setItem(meal);
  }, [mealId]);

  React.useLayoutEffect(() => {
    const meal = MEALS.find((meal) => meal.id === mealId);
    navigation.setOptions({
      title: meal.title,
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
         <IconButton
          addFavorite={addToFavorite.bind(this, mealId)}
          color="white"
          icon="star"
         />
        </View>
      )
    });
  }, [navigation, mealId]);

  return (
    <ScrollView style={styles.container}>
      {item && (
        <>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <MealInfo duration={item.duration} complexity={item.complexity} affordability={item.affordability} />
            {/* creat line here */}

            <MealIngredient ingredients={item.ingredients} />
            <MealSteps steps={item.steps} />
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
    marginBottom: 20,
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
});

export default MealDetails;
