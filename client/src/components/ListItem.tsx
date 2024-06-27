import React from "react"
import { View, StyleSheet, Image, Button } from "react-native"
import { Text, Stack } from "@tamagui/core"
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
      <Stack justifyContent="flex-start">
        <Stack justifyContent="flex-start" flexDirection="row">
          <Button
            onPress={onPress}
            title={bar.barName}
            accessibilityLabel={bar.barName}
            color="#0054CD"
          />
        </Stack>
        <Stack flexDirection="row" alignItems="flex-start">
          <Stack>
            <Image source={require("../../assets/location-pin.png")} />
          </Stack>
          <Stack>
            <Text>{bar.address}</Text>
            <Text>{fieldExists(bar.happyHourDays)}</Text>
            <Text>{fieldExists(bar.happyHourHours)}</Text>
          </Stack>
        </Stack>
      </Stack>
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
