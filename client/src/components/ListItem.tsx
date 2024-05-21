import React from "react"
import { View, Button, Text, StyleSheet, Image } from "react-native"
import { BarMetadata } from "../types"

type ListItemProps = {
  bar: BarMetadata
  onPress: () => void
}
export function ListItem({ bar, onPress }: ListItemProps) {
  // some of the fields in the database just have 'n/a' filled in - let's filter those out
  const fieldExists = (field: string) => (field === "N/A" ? null : field)
  return (
    <View>
      <Button
        onPress={onPress}
        title={bar.barName}
        accessibilityLabel={bar.barName}
        color="#0054CD"
      />
      <Image source={require("../../assets/location-pin.png")} />
      <Text>{bar.address}</Text>
      <Text>{fieldExists(bar.happyHourDays)}</Text>
      <Text>{fieldExists(bar.happyHourHours)}</Text>
      <View
        style={{
          borderBottomColor: "#595957",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginHorizontal: 24,
          paddingVertical: 8,
        }}
      />
    </View>
  )
}
