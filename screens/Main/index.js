/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import ListScreen from '../List';
import CreateScreen from '../Create';
import SettingsScreen from '../Settings';
import ImageScreen from '../Image';
import styles from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'List of Goods',
      tab: 'list',
      list: [
        { name: 'Tomato', date: '20:00 12-12-2018' },
      ]
    }
  }

  navigate = (tab) => {
    this.setState({ tab })
  }

  renderScreen = () => {
    const { header, tab, list } = this.state;
    if (tab === 'list') {
      return (<ListScreen header={header} list={list} handleDelete={this.handleDelete} />);
    } else if (tab === 'create') {
      return (<CreateScreen handleCreate={this.handleCreate} />);
    } else if (tab === 'settings') {
      return (<SettingsScreen handleHeader={this.handleHeader} />);
    } else if (tab === 'image') {
      return (<ImageScreen />);
    }
  }

  handleDelete = (num) => {
    this.setState({
      list: this.state.list.filter((item, index) => index !== num)
    })
  }

  handleCreate = (elem) => {
    this.setState({ list: [ ...this.state.list, elem ]})
  }

  handleHeader = (header) => {
    this.setState({ header: header })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
        <View style={styles.bottomTabNavigator}>
          <TouchableOpacity style={styles.bottomTab} onPress={() => this.navigate('list')}>
            <Text>List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => this.navigate('create')}>
            <Text>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => this.navigate('settings')}>
            <Text>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => this.navigate('image')}>
            <Text>Image</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Main;
