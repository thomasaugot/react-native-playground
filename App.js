import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, RefreshControl } from "react-native";

export default function App() {
  const obj = [
    { id: "1", name: "Stan", age: 45 },
    { id: "2", name: "Francine", age: 45 },
    { id: "3", name: "Hayley", age: 18 },
    { id: "4", name: "Steve", age: 14 },
    { id: "5", name: "Roger", age: 1020 },
    { id: "6", name: "Klaus", age: 30 },
    { id: "7", name: "Klaus", age: 30 },
    { id: "8", name: "Klaus", age: 30 },
    { id: "9", name: "Klaus", age: 30 },
    { id: "10", name: "Klaus", age: 30 },
    { id: "11", name: "Klaus", age: 30 },
  ];

  const [isrefreshing, setIsrefreshing] = useState(false);

  const updateRefresh = () => (obj ? setIsrefreshing(false) : isrefreshing);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={isrefreshing} onRefresh={updateRefresh} />}
      >
        {obj.map((character) => {
          return (
            <View style={styles.charElement} key={character.id}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  charElement: {
    backgroundColor: "skyblue",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 25,
    padding: 10,
  },
});
