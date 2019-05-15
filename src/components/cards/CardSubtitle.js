import React from 'react';
import { View, Text } from 'react-native';

const CardSubtitle = (props) => {
  const { headerStyle, titleStyle, titleValue } = styles;
  return (
    <View style={headerStyle}>
      {props.children}
      <Text style={titleStyle}>{props.cardTitle}</Text>
      <Text style={titleValue}>{props.cardValue}</Text>
    </View>
  )
};

const styles = {
  headerStyle: {
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    color: '#000',
    position: 'relative',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 2.5
  },
  titleValue: {
    fontSize: 20,
    fontWeight: 'normal',
    padding: 2.5
  }
};

export default CardSubtitle;