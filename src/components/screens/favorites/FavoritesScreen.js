import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
// import { useSelector } from 'react-redux';
import MealItem from "../meals/MealItem";
import { FavoritesContext } from "../../../store/context/favorites-context";
import { MEALS } from "../../../utlis/data/dummy-data";

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
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
        style={{ width: "90%" }}
      />
    </View>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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

export default FavoritesScreen;
