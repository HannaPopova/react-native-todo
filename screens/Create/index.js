import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

class CreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  
  handleCreate = () => {
    this.props.handleCreate(this.state.text, 6, 7);
    this.setState({ text: '' });
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>CREATE GOOD</Text>
        </View>
        <View style={styles.listView} contantContainerStyle={styles.listContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableOpacity style={styles.createButton} onPress={this.handleCreate}>
            <Text>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CreateScreen;