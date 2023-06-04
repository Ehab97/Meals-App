import React from "react";
import { View, Text, StyleSheet, Image, Pressable, Platform } from "react-native";

function MealItem({ item }) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
            styles.container,
            pressed && styles.pressed,
        ]}

      >
        <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.info}>
            <Text style={styles.infoText}>{`${item.duration} min`}</Text>
            <Text style={styles.infoText}>{item.complexity.toUpperCase()}</Text>
            <Text style={styles.infoText}>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 24,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  pressed:{
    backgroundColor: "#ccc",
  },
  imageContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  image: {
    height: "100%",
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
  },
  infoText: {
    fontSize: 14,
    color: "#888",
  },
});

export default MealItem;
