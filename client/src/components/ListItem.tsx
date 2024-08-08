import React from "react"
import { View, StyleSheet, Image, Pressable } from "react-native"
import { Text, Stack } from "@tamagui/core"
import { BarMetadata } from "../types"

const styles = StyleSheet.create({
  header: {
    color: "#0054CD",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    paddingBottom: 8,
  },
  body: {
    color: "black",
    fontWeight: "500",
    fontFamily: "Montserrat",
  },
})

type ListItemProps = {
  bar: BarMetadata
  onPress: () => void
}
export function ListItem({ bar, onPress }: ListItemProps) {
  // some of the fields in the database just have 'n/a' filled in - let's filter those out
  const fieldExists = (field: string) => (field === "N/A" ? null : field)

  return (
    <View style={{ paddingBottom: 16 }}>
      <Pressable onPress={onPress}>
        <Stack justifyContent="flex-start" style={{ paddingLeft: 24 }}>
          <Text style={styles.header} fontSize={24}>
            {bar.barName}
          </Text>

          <Stack flexDirection="row" alignItems="flex-start">
            <Image source={require("../../assets/location-pin.png")} />
            <Stack style={{ paddingLeft: 4 }}>
              <Text style={styles.body}>{bar.address}</Text>
              <Text style={styles.body}>{fieldExists(bar.happyHourDays)}</Text>
              <Text style={styles.body}>{fieldExists(bar.happyHourHours)}</Text>
            </Stack>
          </Stack>
        </Stack>
      </Pressable>
      <View
        style={{
          borderBottomColor: "#595957",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginHorizontal: 24,
          paddingTop: 8,
        }}
      />
    </View>
  )
}
