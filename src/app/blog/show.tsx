import { Link } from "expo-router"
import { Text, View } from "react-native"

const Show = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>ブログ詳細ページです</Text>
      <Link href="/">TOPへ戻る</Link>
    </View>
  )
}

export default Show
