import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import FontAwesome from "@expo/vector-icons/FontAwesome"
import CircleButton from '../../components/CircleButton'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import IconButton from '../../components/IconButton'
import EmojiPicker from '../../components/EmojiPicker'
import EmojiList from '../../components/EmojiList'

export default function Page3() {
  const DefaultImage = 'https://docs.expo.dev/static/images/tutorial/background-image.png'
  const [slectedImage, setSlectedImage] = useState(DefaultImage)
  const [showOptions, setShowOptions] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const pickImage = async (select = true) => {
    if (!select) {
      setShowOptions(true)
      return
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSlectedImage(result.assets[0].uri)
      setShowOptions(true)
    }
  }

  const onAddSticker = () => {
    console.log('onAddSticker')
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onReset= () => {
    
  }

  const onSaveImageAsync = async () => {
    
  }
  
  const onSelect = (emoji) => {
    
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{uri: slectedImage}}
        />
      </View> 
      { showOptions ? 
        (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : 
        <View style={styles.footerContainer}>
          <Button label="Choose a photo" theme="primary" onPress={() => pickImage()}/>
          <Button label="Use this photo"  onPress={() => pickImage(false)}/>
        </View>
      }
      <EmojiPicker isModalVisible={isModalVisible} onClose={() => onModalClose ()} >
        <EmojiList onSelect={onSelect} onModalClose={onModalClose}/>
      </EmojiPicker>
      <StatusBar style="auto" />
    </View>
  );
}


function Button({ label, theme, onPress }) {
  const btnAction = () => {
    if (typeof onPress === 'function') {
      onPress()
    }
  }
  return (
    <View
      style={[styles.btnContainer,  theme ? { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 , backgroundColor: "#fff" } : {}]}
    >
      <Pressable
        style={styles.btn}
        onPress={ btnAction }
      > 
        {theme ? <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          /> : null}
        <Text style={[styles.buttonLabel, theme ? { color: "#000" } : {}]}> {label} </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  btnContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  btn: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
}); 