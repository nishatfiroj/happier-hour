import React from "react"
import {
  Modal,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native"

export function Drawer({ children }: { children: React.ReactNode }) {
  const windowHeight = Dimensions.get("window").height

  const [isBottomSheetOpen, setIsBottomSheetOpen] = React.useState(true)

  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false)
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBottomSheetOpen}
        onRequestClose={handleCloseBottomSheet}
      >
        <View style={[styles.bottomSheet, { height: windowHeight * 0.5 }]}>
          <View
            style={{
              flex: 0,
              width: "100%",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <Image source={require("../../assets/drawer-handle.png")} />
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 16 }}>{children}</View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // fontFamily: "Montserrat",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#EDEEE6",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    bottom: 0,
    paddingTop: 12,
  },
})
