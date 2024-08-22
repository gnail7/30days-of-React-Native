import { Stack } from 'expo-router'
export default function StackScreenHeader({option}) {
  const defaultOption = {
    headerShown: true,
    headerShadowVisible: false,
    title: '',
    hidden: false
  }
  const mergeOption = Object.assign({}, defaultOption, option)
  return (
    <Stack.Screen option={mergeOption} />
  )
}
