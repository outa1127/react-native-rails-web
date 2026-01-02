import { Button, createTamagui,Input,TamaguiProvider, View } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'
import { Link } from "expo-router"
import { Text } from "react-native"

const config = createTamagui(defaultConfig)

const Index = () => {
  return (
    <TamaguiProvider config={config}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>ブログアプリ</Text>
      <View>
        <Link href="/blog">ブログ一覧へ</Link>
        <Link href="/blog/create">ブログ作成へ</Link>
      </View>
      <Button size="$3" color="$blue10">ボタン</Button>
    </TamaguiProvider>
  )
}

export default Index
