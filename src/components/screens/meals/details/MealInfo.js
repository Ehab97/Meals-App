import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
function MealInfo({ duration, complexity, affordability }) {
  return (
    <View style={styles.info}>
      <View style={styles.infoSection}>
        <Icon name="access-time" style={styles.infoIcon} />
        <Text style={styles.infoText}>{`${duration} min`}</Text>
      </View>
      <View style={styles.infoSection}>
        <Icon name="trending-up" style={styles.infoIcon} />
        <Text style={styles.infoText}>{complexity.toUpperCase()}</Text>
      </View>
      <View style={styles.infoSection}>
        <Icon name="attach-money" style={styles.infoIcon} />
        <Text style={styles.infoText}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomColor: "#ccc",
    
  },
  infoSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#888",
  },
  infoIcon: {
    fontSize: 20,
    color: "#888",
    marginRight: 5,
  },
});

export default MealInfo;
