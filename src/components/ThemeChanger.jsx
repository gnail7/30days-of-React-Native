import {useEffect, useMemo, useState} from 'react'
import { IconButton } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setThemeFlag } from '../store/slices/user'
import { Dark_Mode, Light_Mode } from '../config/constant'
const Sun_Btn_Color = '#FFDF00'
const Moon_Btn_Color = '#000000'

const Sun_Icon = 'white-balance-sunny'
const Moon_Icon = 'moon-waning-crescent'

export default function ThemeChanger() {
  const {themeFlag} = useSelector(state => state.user)

  const [iconName, setIconName] = useState(themeFlag === Dark_Mode ? Sun_Icon : Moon_Icon)
  const dispatch = useDispatch()
  const themeBtnColor = useMemo(() => iconName === Sun_Icon ?  Sun_Btn_Color : Moon_Btn_Color, [iconName])
  
  const toggleIcon = () => {
    const targetTheme = iconName === Sun_Icon ? Light_Mode : Dark_Mode
    setIconName(prevIcon => 
      prevIcon === Sun_Icon ? Moon_Icon : Sun_Icon
    )

    dispatch(setThemeFlag(targetTheme))
  }

  return (
    <IconButton
      icon={iconName}
      iconColor={themeBtnColor}
      size={20}
      onPress={() => toggleIcon() }
    />  
  )
}
