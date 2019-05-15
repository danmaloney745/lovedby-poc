import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  )
};

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    color: '#ddd',
    position: 'relative'
  }
};

export default CardSection;