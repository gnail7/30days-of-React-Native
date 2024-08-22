import { Slot } from "expo-router"
import { Provider } from "react-redux"
import { StatusBar } from "expo-status-bar"
import store from "../src/store"
import BottomBar from '../src/components/BottomBar'
import { GlobalStylesProvider } from "../src/context/styleContext.js"

export default function Layout() {
  return (
    <Provider store={store}>
      <GlobalStylesProvider>
          <Slot></Slot>
          <BottomBar />
          <StatusBar />
      </GlobalStylesProvider>
    </Provider>
  )
}