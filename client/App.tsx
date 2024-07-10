import React from "react"
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native"
import { Map, Drawer, ListItem } from "./src/components"
import { BarMetadata } from "./src/types"
import { createTamagui, TamaguiProvider } from "@tamagui/core"
import { config as configBase } from "@tamagui/config"
import { useCurrentLocation, useAllBars, useSelectedBar } from "./src/hooks"

const tamaguiConfig = createTamagui({ ...configBase })

export default function App() {
  const response = useAllBars()
  const { selectedBar, setSelectedBar } = useSelectedBar()
  const { currentLocation } = useCurrentLocation()

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView style={styles.container}>
        <Map
          currentLocation={currentLocation}
          selectedBar={selectedBar}
          bars={response}
        />
        <Drawer>
          <ScrollView>
            {response.map((bar: BarMetadata) => {
              return (
                <View key={bar._id}>
                  <ListItem bar={bar} onPress={() => setSelectedBar(bar)} />
                </View>
              )
            })}
          </ScrollView>
        </Drawer>
      </SafeAreaView>
    </TamaguiProvider>
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
