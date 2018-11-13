import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import img from './img/3.jpg';


class ImageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Image</Text>
        </View>
        <ImageBackground style={styles.img} source={img}>
          <Text style={styles.textimg}>It is a bird</Text>
        </ImageBackground>
       </View>
    )
  }
}
export default ImageScreen;