// src/ThemeContext.js
import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper'
import globalStyles from '../assets/styles/globalStyle'
import { lightTheme, darkTheme } from '../theme/theme'
import { useSelector } from 'react-redux'
import { Light_Mode } from '../config/constant'


const StyleContext = createContext()

export const GlobalStylesProvider = ({ children }) => {
  const themeFlag = useSelector(state => state.user.themeFlag)
  const lightMode = {
    ...MD3LightTheme,
    dark: false,
    colors: {
      ...MD3LightTheme.colors,
      ...lightTheme.colors
    }
  }
  const darkMode = {
    ...MD3DarkTheme,
    dark: true,
    colors: {
      ...MD3DarkTheme.colors,
      ...darkTheme.colors
    }
  }
  useEffect(() => {
    console.log('themeFlag', themeFlag)
  }, [])
  const theme  =  themeFlag == Light_Mode ? lightMode : darkMode
  const style = useMemo(() => StyleSheet.create(globalStyles(theme)), [themeFlag])
  return (
    <StyleContext.Provider value={style}>
      <PaperProvider theme={theme}>
        {children}
      </PaperProvider>
    </StyleContext.Provider>
  )
};

export const useGlobalStyle = () => useContext(StyleContext);
