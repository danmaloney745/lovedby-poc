import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle} >
      {props.children}
    </View>
  )
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpcaity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 22,
    marginRight: 22,
    marginTop: 30,
    padding: 5,
  }
};

export default Card;