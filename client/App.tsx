import React from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import { useAllBars } from "./services/endpoints"

export default function App() {
  const response = useAllBars()
  return (
    <View style={styles.container}>
      <ScrollView>
        {response.map((value: any, index: number) => (
          <Text key={index}>{value.barName}</Text>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
