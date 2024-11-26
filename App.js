import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>ILHAM</Text>

      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.boxText}>kotak 1</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.boxText}>kotak 2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey", 
  },
  centerText: {
    fontSize: 24,
    color: "blue", 
    fontWeight: "bold", 
    marginBottom: 20, 
  },
  boxContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "80%", 
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10, 
    justifyContent: "center", 
    alignItems: "center", 
  },
  box1: {
    backgroundColor: "#1A1A19", 
  },
  box2: {
    backgroundColor: "#31511E", 
  },
  boxText: {
    color: "#ffffff", 
    fontWeight: "bold", 
    fontSize: 16, 
  },
});