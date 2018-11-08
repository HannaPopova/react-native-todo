import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

class SettingsScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>SETTINGS</Text>
        </View>
      </View>
    );
  }
}

export default SettingsScreen;