import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ addFavorite, color, icon }) {
  return (
    <Pressable onPress={addFavorite} style={({ pressed }) => [pressed && styles.prssed]}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  prssed: {
    opacity: 0.5,
  },
});
