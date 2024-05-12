import React from "react"
import { StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useAllBars } from "./services/endpoints"
import { Map } from "./src/components"
import { BarMetadata } from "./src/types"

export default function App() {
  const response = useAllBars()

  const [selectedBar, setSelectedBar] = React.useState<BarMetadata>({
    name: "bar name",
    latitude: 40.7386178790617,
    longitude: -73.9834206895483,
  })

  console.log(selectedBar)

  return (
    <View style={styles.container}>
      <Map latitude={selectedBar.latitude} longitude={selectedBar.longitude} />
      <ScrollView style={styles.scrollableList}>
        {response.map((value: any, index: number) => {
          return (
            <Button
              key={index}
              onPress={() =>
                setSelectedBar({
                  name: value.barName,
                  latitude: value.latitude,
                  longitude: value.longitude,
                })
              }
              title={value.barName}
              color="#d18fd1"
              accessibilityLabel="button"
            ></Button>
          )
        })}
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
  scrollableList: {
    paddingTop: 400,
  },
})
