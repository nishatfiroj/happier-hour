import React from "react"
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native"
import { useAllBars } from "./services/endpoints"
import { Map, Drawer, ListItem } from "./src/components"
import { BarMetadata } from "./src/types"
import Geolocation from "@react-native-community/geolocation"
import { createTamagui, TamaguiProvider } from "@tamagui/core"
import { config as configBase } from "@tamagui/config"

const placeholderBar = {
  _id: "663d200b02443418ed33b9a8",
  yelpId: "ePqKbqXFBCbwBaWiN2Jo9w",
  barName: "Ampersand",
  address: "294 3rd Ave, New York, NY 10010",
  googleMapsLink: "https://maps.app.goo.gl/ZyVGQxdk6o7suAuP7",
  happyHourDays: "N/A",
  happyHourHours: "N/A",
  indoor: "x",
  outdoor: "x",
  happyHourMenu: "N/A",
  latitude: 40.7386178790617,
  longitude: -73.9834206895483,
}

const tamaguiConfig = createTamagui({ ...configBase })

export default function App() {
  const [selectedBar, setSelectedBar] = React.useState<BarMetadata | undefined>(
    placeholderBar
  )

  const [currentLocation, setCurrentLocation] = React.useState<{
    latitude: number
    longitude: number
  }>({ latitude: 0, longitude: 0 })

  React.useEffect(() => {
    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition((location) => {
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
      })
    }

    getCurrentLocation()
  }, [])

  const response = useAllBars()

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
