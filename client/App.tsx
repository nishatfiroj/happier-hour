import React from "react"
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native"
import { Map, Drawer, ListItem } from "./src/components"
import { BarMetadata } from "./src/types"
import { createTamagui, TamaguiProvider } from "@tamagui/core"
import { config as configBase } from "@tamagui/config"
import { useCurrentLocation, useSelectedBar } from "./src/hooks"
import { useAllBars, useBarsByDay } from "./src/api"

const tamaguiConfig = createTamagui({ ...configBase })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default function App() {
  const allBars = useAllBars()
  const { selectedBar, setSelectedBar } = useSelectedBar()
  const { currentLocation } = useCurrentLocation()

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView style={styles.container}>
        <Map
          currentLocation={currentLocation}
          selectedBar={selectedBar}
          bars={allBars}
        />
        <Drawer>
          <ScrollView>
            {allBars.map((bar: BarMetadata) => {
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
