import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  const obj = [
    { id: "1", name: "Stan", age: 45 },
    { id: "2", name: "Francine", age: 45 },
    { id: "3", name: "hayley", age: 18 },
    { id: "4", name: "Steve", age: 14 },
    { id: "5", name: "Roger", age: 1020 },
    { id: "6", name: "Klaus", age: 30 },
  ];

  return (
    <View style={styles.container}>
      {obj.map((character) => {
        return (
          <View style={styles.charElement}>
            <View>
              <Text style={styles.text}>Nom: {character.name}</Text>
            </View>
            <Text style={styles.text}>|</Text>
            <View>
              <Text style={styles.text}>Age: {character.age}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 15,
    marginTop: 60,
  },
  charElement: {
    padding: 10,
    backgroundColor: "skyblue",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
});
