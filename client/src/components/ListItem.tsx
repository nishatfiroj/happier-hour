import React from "react"
import { View, Button, StyleSheet } from "react-native"

type ListItemProps = {
  key: string
  barName: string
  onPress: () => void
}
export function ListItem({ key, barName, onPress }: ListItemProps) {
  return (
    <View>
      <Button
        key={key}
        onPress={onPress}
        title={barName}
        accessibilityLabel={barName}
        color="#0054CD"
      />
    </View>
  )
}
