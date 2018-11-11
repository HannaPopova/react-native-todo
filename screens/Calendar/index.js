import React, { Component } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';



class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  handleCalendar = () => {
    console.log(this.state.date)
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>CALENDAR</Text>
        </View>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="datetime"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleCalendar}>
          <Text>OK</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
export default CalendarScreen;