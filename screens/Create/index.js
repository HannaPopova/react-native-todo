import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';

class CreateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  
  handleCreate = () => {
    this.props.handleCreate(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>CREATE GOOD</Text>
        </View>
        <DatePicker 
          style={styles.datePicker}
          date={this.state.date}
          mode="datetime"
          placeholder="select date"
          format="HH:mm  DD-MM-YYYY"
          minDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: styles.dateIcon,
            dateInput: styles.dateInput,
            placeholderText: styles.placeholderText,
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
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