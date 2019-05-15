import React from 'react';
import { View, Text } from 'react-native';

const CardTitle = (props) => {
  const { headerStyle, titleStyle, titleValue } = styles;
  return (
    <View style={headerStyle}>
      {props.children}
      <Text style={titleStyle}>
      {props.cardTitle}
        <Text style={titleValue}>
          {props.titleValue}
        </Text>
      </Text>
      <Text style={titleStyle}>{props.cardValue}</Text>
    </View>
  )
};

const styles = {
  headerStyle: {
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    color: '#000',
    position: 'relative',
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  titleValue: {
    fontSize: 15,
    color: '#A9A9A9'
  }
};

export default CardTitle;