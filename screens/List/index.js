import React, { Component } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

class ListScreen extends Component {

  render() {
    const { header, list } = this.props;

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>{header}</Text>
        </View>
        <ScrollView style={styles.listView} contantContainerStyle={styles.listContainer}>
        {list.sort((a, b) => {
          if (a > b) { return 1 }
          else { return -1 } 
        }).map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{index+1}. {item.name} - {item.date}</Text>
            <TouchableOpacity style={styles.button} onPress={() => this.props.handleDelete(index)}>
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