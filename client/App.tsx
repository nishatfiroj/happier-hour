import React, { useEffect } from "react"
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native"
import { Map, Drawer, ListItem } from "./src/components"
import { BarMetadata } from "./src/types"
import { createTamagui, TamaguiProvider, Text } from "@tamagui/core"
import { config as configBase } from "@tamagui/config"
import { useCurrentLocation, useSelectedBar } from "./src/hooks"
import { useAllBars, useBarsByDay } from "./src/api"
import { MapProvider, useMap } from "./src/providers/MapProvider"

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
  const { setCurrentRegion } = useMap()

  const onSelectBar = (bar: BarMetadata) => {
    setSelectedBar(bar)
    setCurrentRegion({
      latitude: bar.latitude,
      longitude: bar.longitude,
      longitudeDelta: 0.003,
      latitudeDelta: 0.002,
    })
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <MapProvider>
        <SafeAreaView style={styles.container}>
          <Map selectedBar={selectedBar} />
          <Drawer>
            <ScrollView>
              {allBars.map((bar: BarMetadata) => {
                return (
                  <View key={bar._id}>
                    <ListItem bar={bar} onPress={() => onSelectBar(bar)} />
                  </View>
                )
              })}
            </ScrollView>
          </Drawer>
        </SafeAreaView>
      </MapProvider>
    </TamaguiProvider>
  )
}
