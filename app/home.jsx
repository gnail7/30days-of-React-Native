import React from 'react'
import { View, Text } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'


export default function home(props) {
  const localParams = useLocalSearchParams()
  const { query } = useRouter()


  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
