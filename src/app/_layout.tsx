import { Slot } from "expo-router"
import { StyleSheet, View } from "react-native"

const Layout = () => {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
})

export default Layout
