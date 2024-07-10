import { View, StyleSheet } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { BarMetadata } from "../../types"
import { mapStyles } from "./mapStyles"

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

type MapProps = {
  selectedBar: BarMetadata | undefined
  bars: BarMetadata[]
  currentLocation: { latitude: number; longitude: number }
}

export function Map({ selectedBar, bars, currentLocation }: MapProps) {
  const isSelected = (id: string) => id === selectedBar._id

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: selectedBar.latitude || currentLocation.latitude,
          longitude: selectedBar.longitude || currentLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
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
