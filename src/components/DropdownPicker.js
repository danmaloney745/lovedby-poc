import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import Button from './Button';

class DropdownPicker extends Component {
   constructor(props) {
    super(props);
    this.state = {
        activity: '',
        enabled: false // Enabled by default , you can change it
      };
   };
   
   _updateActivity = (activity) => {
    this.setState({ activity: activity })
   }

   _onActivityPress = () => {
     let enabled = this.state.enabled ? false : true;
    this.setState({ enabled: enabled })
   }

   _displayPicker() {
    if (this.state.enabled) {
      return <Picker selectedValue={this.state.activity} onValueChange={this._updateActivity}>
              <Picker.Item label="Swimming" value="Swimming" />
              <Picker.Item label="Football" value="Football" />
              <Picker.Item label="Tennis" value="Tennis" />
            </Picker>
    }
  }

   render() {
    return (
      <View>
        <Button onPress={this._onActivityPress.bind(this)} buttonText='Choose an activity'/>
        {this._displayPicker()}
      </View>
    )
   }
}
export default DropdownPicker

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#FFF',
    padding: 5
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#00AD97'
  }
})