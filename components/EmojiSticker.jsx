import { View, Image } from 'react-native'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated'

export default function EmojiSticker({ imageSize, stickerSource }) {
  const scaleImage = useSharedValue(imageSize)
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const imageStyle = useAnimatedStyle(() => ({
    width: scaleImage.value,
    height: scaleImage.value,
  }))

  const doubleTapGesture = Gesture.Tap().numberOfTaps(2).onEnd(() => {
    scaleImage.value = withSpring(scaleImage.value === imageSize * 2 ? imageSize : imageSize * 2)
  })

  const dragGesture = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX
    translateY.value += event.changeY
  })

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }))

  return (
    <GestureDetector gesture={dragGesture}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTapGesture}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  )
}
