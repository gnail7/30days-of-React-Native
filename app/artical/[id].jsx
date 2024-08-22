import React from 'react'
import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function Article() {
  const params = useLocalSearchParams()
  console.log(params)
  return (
    <View>
      <Text>Article</Text>
    </View>
  )
}
