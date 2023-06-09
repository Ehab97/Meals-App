import React from "react";
import {  Text, View } from "react-native";
// import { useSelector } from 'react-redux';
import { FavoritesContext } from "../../../store/context/favorites-context";
import { MEALS } from "../../../utlis/data/dummy-data";
import MealsList from "../../MealsList/MealsList";

const FavoritesScreen = (props) => {
  //   const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  const favoritesMealsCTX = React.useContext(FavoritesContext);
  const [favoriteMeals, setFavoritesMeals] = React.useState([]);

  React.useEffect(() => {
    const filteredMeals = MEALS.filter((meal) => favoritesMealsCTX.ids.includes(meal.id));
    setFavoritesMeals(filteredMeals);
  }, []);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <MealsList meals={favoriteMeals} isFav={true} />
    </View>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
