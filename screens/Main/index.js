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
import CalendarScreen from '../Calendar';
import styles from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'List of Goods',
      tab: 'list',
      list: [
        { name: 'Tomato', date: new Date() },
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
    } else if (tab=== 'calendar') {
      return (<CalendarScreen />);
    }
  }

  handleDelete = (num) => {
    this.setState({
      list: this.state.list.filter((item, index) => index !== num)
    })
  }

  handleCreate = (name) => {
    this.setState({ list: [ ...this.state.list, name ]})
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
          <TouchableOpacity style={styles.bottomTab} onPress={() => this.navigate('calendar')}>
            <Text>Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Main;
