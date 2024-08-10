import React from "react"
import { View, StyleSheet } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { useMap } from "../../providers/MapProvider"
import { useAllBars } from "../../api"
import { BarMetadata } from "../../types"
import { mapStyles } from "./mapStyles"

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

type MapProps = {
  selectedBar: BarMetadata | undefined
}

export function Map({ selectedBar }: MapProps) {
  const { currentRegion } = useMap()
  const map = React.useRef()
  const bars = useAllBars()

  const isSelected = (id: string) => id === selectedBar._id

  console.log(currentRegion)

  return (
    <View style={styles.container}>
      <MapView
        showsCompass={true}
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: selectedBar.latitude || currentRegion.latitude,
          longitude: selectedBar.longitude || currentRegion.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
        customMapStyle={mapStyles}
      >
        {bars.map((bar: BarMetadata, index: number) => (
          <Marker
            key={index}
            coordinate={{
              latitude: bar.latitude,
              longitude: bar.longitude,
            }}
            title={bar.barName}
            description={bar.happyHourHours}
            image={
              isSelected(bar._id)
                ? require("../../../assets/selected-pin.png")
                : require("../../../assets/pin.png")
            }
          />
        ))}
      </MapView>
    </View>
  )
}
