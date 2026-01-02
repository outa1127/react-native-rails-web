import { Link } from "expo-router"
import { Text, View } from "react-native"

const Index = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>ブログ一覧ページです</Text>
      <Link href="/blog/show">詳細ページ</Link>
      <Link href="/">TOPへ戻る</Link>
    </View>
  )
}

export default Index
