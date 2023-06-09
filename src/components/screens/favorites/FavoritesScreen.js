import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
// import { FavoritesContext } from "../../../store/context/favorites-context";
import { MEALS } from "../../../utlis/data/dummy-data";
import MealsList from "../../MealsList/MealsList";

const FavoritesScreen = () => {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  //   const favoritesMealsCTX = React.useContext(FavoritesContext);
  const [favoriteMeals, setFavoritesMeals] = React.useState([]);

  React.useEffect(() => {
    // const filteredMeals = MEALS.filter((meal) => favoritesMealsCTX.ids.includes(meal.id));
    const filteredMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));
    setFavoritesMeals(filteredMeals);
  }, [favoriteMealsIds]);

  return (
    <View style={styles.screen}>
      <MealsList meals={favoriteMeals} isFav={true} />
    </View>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});

export default FavoritesScreen;
