import { Pressable, View } from "react-native"
import { Text } from 'react-native-paper';

import { Link } from 'expo-router'
import { useSelector } from "react-redux"
import { IconButton, MD3Colors, Appbar } from 'react-native-paper';
import { useGlobalStyle } from "../src/context/styleContext.js";
import ThemeChanger from "../src/components/ThemeChanger.jsx"
import StackScreenHeader from "../src/components/StackScreenHeader"
import { useEffect } from "react";

export default function Page() {
  const user = useSelector((state) => state.user)
  const globalStyles = useGlobalStyle()
  const stackOption = {
    title: 'Gnail',
    backgroundColor: '#000'
  }
  useEffect(() => {
    console.log('show')
  })
  return (
    <View style={globalStyles.container}>
      <Appbar.Header>
        <Appbar.Content title="Message" />
        <ThemeChanger />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <StackScreenHeader option={stackOption}/>
      <View>
        <Text style={globalStyles.test}>this is default Page {user.themeFlag}</Text>
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={20}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <Link href={{
        pathname: '/artical/[id]',
        params: { id: 1 }
      }} asChild>
        <Pressable>
          <Text>go to home  {user.name}</Text>
        </Pressable>
      </Link>
    </View>
  )
}