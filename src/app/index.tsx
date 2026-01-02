import { Link } from "expo-router"
import { Text, View } from "react-native"

const Index = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>ブログアプリ</Text>
      <View>
        <Link href="/blog">ブログ一覧へ</Link>
        <Link href="/blog/create">ブログ作成へ</Link>
      </View>
    </View>
  )
}

export default Index
