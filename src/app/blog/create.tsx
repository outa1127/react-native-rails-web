import { Link } from "expo-router"
import { Text, View } from "react-native"

const Create = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>ブログ作成ページです</Text>
      <Link href="/">TOPへ戻る</Link>
    </View>
  )
}

export default Create
