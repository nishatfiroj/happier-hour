import { createContext, useContext, useState } from "react"
import { Region } from "react-native-maps"
import { useCurrentLocation } from "../hooks"

interface MapContext {
  currentRegion: Region
  setCurrentRegion: (region: Region) => void
}

const Context = createContext<MapContext>({
  currentRegion: undefined,
  setCurrentRegion: () => {},
})

export const MapProvider = ({ children }: React.PropsWithChildren) => {
  const { currentLocation } = useCurrentLocation()

  const [currentRegion, setCurrentRegion] = useState<Region>({
    ...currentLocation,
    longitudeDelta: 0.003,
    latitudeDelta: 0.002,
  })

  return (
    <Context.Provider value={{ currentRegion, setCurrentRegion }}>
      {children}
    </Context.Provider>
  )
}

export const useMap = () => {
  return useContext(Context)
}
