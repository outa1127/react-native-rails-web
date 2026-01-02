import { Link } from "expo-router"
import { Text, View } from "react-native"

const Index = () => {
  return (
    <View>
      <Text>ブログ一覧ページです</Text>
      <Link href="/">TOPへ戻る</Link>
    </View>
  )
}

export default Index
