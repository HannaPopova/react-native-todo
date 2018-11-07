import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'Tomato',
        'Cheese',
        'Onion',
        'Garlic',
        'Cucumber',
        'Potato',
        'Fish',
        'Meat',
        'Eggs',
        'Bread',
      ]
    }
  }
  handleDelete = (num) => {
    this.setState({
      list: this.state.list.filter((item, index) => index !== num)
    })
  }

  render() {
    const { list } = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>LIST OF GOODS</Text>
        </View>
        <ScrollView style={styles.listView} contantContainerStyle={styles.listContainer}>
        {list.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{index+1}. {item}</Text>
            <TouchableOpacity style={styles.button} onPress={() => this.handleDelete(index)}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>
          </View>)
        )}
        </ScrollView>
      </View>
    );
  }
}

export default ListScreen;