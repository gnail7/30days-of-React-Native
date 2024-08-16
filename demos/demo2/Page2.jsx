import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function Page2() {
  const DefaultImage = 'https://docs.expo.dev/static/images/tutorial/background-image.png'
  const [slectedImage, setSlectedImage] = useState(DefaultImage)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setSlectedImage(result.assets[0].uri)
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{uri: slectedImage}}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" cb={() => pickImage()}/>
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


function Button({ label, theme, cb }) {
  const btnAction = () => {
    if (typeof cb === 'function') {
      cb()
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
    paddingTop: '58px',
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
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  }
}); 
