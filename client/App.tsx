import React from "react"
import { StyleSheet, View, ScrollView } from "react-native"
import { useAllBars } from "./services/endpoints"
import { Map, Drawer, ListItem } from "./src/components"
import { BarMetadata } from "./src/types"

export default function App() {
  const [selectedBar, setSelectedBar] = React.useState<BarMetadata>({
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
  })

  const response = useAllBars()

  return (
    <View style={styles.container}>
      <Map latitude={selectedBar.latitude} longitude={selectedBar.longitude} />
      <Drawer>
        <ScrollView>
          {response.map((bar: BarMetadata) => {
            return (
              <ListItem
                key={bar._id}
                barName={bar.barName}
                onPress={() => setSelectedBar(bar)}
              />
            )
          })}
        </ScrollView>
      </Drawer>
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
