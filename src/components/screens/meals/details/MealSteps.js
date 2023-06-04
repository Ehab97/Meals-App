import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MealSteps({ steps }) {
  return (
    <>
    <Text style={styles.stepsTitle}>Steps</Text>
    <View style={styles.stepsContainer}>
      {steps?.length > 0 ? (
        steps.map((step, index) => (
          <View key={index} style={styles.stepItem}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.stepText}>{step}</Text>
          </View>
        ))
      ) : (
        <Text>No steps found</Text>
      )}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  stepsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  stepsContainer: {
    marginTop: 10,
  },
  stepItem: {
    flexDirection: "row",
    marginBottom: 10,
  },
  stepNumber: {
    marginRight: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#4CAF50",
    alignItems: "center",
    justifyContent: "center",
  },
  stepNumberText: {
    fontSize: 13,
    color: "#fff",
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    color: "#444",
  },
});

export default MealSteps;
