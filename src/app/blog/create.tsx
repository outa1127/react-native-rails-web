import { Link, router } from "expo-router"
import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { axiosInstance } from "../../utils/axios"

const Create = () => {
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const onPress = async () => {
    await axiosInstance.post("/blogs", { title, contents }).then(() => {
      router.push("/blog")
    }).catch((error) => {
      console.error(error)
    })
  }
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>ブログ作成ページです</Text>
      <Link href="/">TOPへ戻る</Link>
      <Text>{process.env.BLOG_APP_API_DOMAIN}hogehoge</Text>

      <Text>タイトルを入力してください</Text>
      <View style={{ paddingHorizontal: 10}}>
        <TextInput value={title} onChangeText={setTitle} placeholder="タイトル" style={{ height: 40, borderColor: "gray", borderWidth: 1, textAlignVertical: "top", fontSize: 16, lineHeight: 16 }} />
      </View>

      <Text>本文を入力してください</Text>
      <View style={{ paddingHorizontal: 10}}>
        <TextInput value={contents} onChangeText={setContents} placeholder="本文" style={{ height: 40, borderColor: "gray", borderWidth: 1, textAlignVertical: "top", fontSize: 16, lineHeight: 16 }} />
      </View>

      <View>
        <TouchableOpacity style={styles.submitButton} onPress={onPress}>
          <Text>作成</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    borderRadius: 5,
    width: 100
  }
})

export default Create
