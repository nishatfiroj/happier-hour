import React from "react"
import Geolocation from "@react-native-community/geolocation"

export const useCurrentLocation = () => {
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

  return { currentLocation }
}
