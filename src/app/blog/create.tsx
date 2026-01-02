import { Link } from "expo-router"
import { Text, View } from "react-native"

const Create = () => {
  return (
    <View>
      <Text>ブログ作成ページです</Text>
      <Link href="/">TOPへ戻る</Link>
    </View>
  )
}

export default Create
