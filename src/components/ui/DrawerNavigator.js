import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "../screens/categories/CategoriesScreen";
import FavoritesScreen from "../screens/favorites/FavoritesScreen";
import { colors } from "../../utlis/colors";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.purple,
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: colors.secondary,
        },
        drawerContentStyle: { backgroundColor: colors.purple },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: colors.primary,
      }}
    >
      <Drawer.Screen
        name="MealCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}
