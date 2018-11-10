import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  
  handleSetting = () => {
    this.props.handleHeader(this.state.text);
    this.setState({ text: 'Change name' });
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>SETTINGS</Text>
        </View>
        <View style={styles.texth}>
          <Text>Change name</Text>
        </View>
        <View style={styles.listView} contantContainerStyle={styles.listContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableOpacity style={styles.createButton} onPress={this.handleSetting}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SettingScreen;