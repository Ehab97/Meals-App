import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./src/components/screens/categories/CategoriesScreen";
import MealsScreen from "./src/components/screens/meals/MealsScreen";
import { colors } from "./src/utlis/colors";
import MealDetails from "./src/components/screens/meals/MealDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            contentStyle: {
              backgroundColor: colors.secondary,
            },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
              headerStyle: {
                backgroundColor: colors.accent,
              },
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsScreen}
            // options={
            //   ({route,navigation})=>{
            //     const catId=route.params.categoryId;
            //     return {
            //       title: catId,
            //       headerStyle: {
            //         backgroundColor: colors.accent,
            //       }
            //     }
            //   }
            // }
          />
          <Stack.Screen name="MealDetails" component={MealDetails} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
