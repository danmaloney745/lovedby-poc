import React, { Component } from 'react';
import { View, ScrollView, Text, Picker } from 'react-native';
import Card from './cards/Card';
import CardSection from './cards/CardSection';
import CardTitle from './cards/CardTitle';
import CardSubtitle from './cards/CardSubtitle';
import DropdownPicker from './DropdownPicker';

class InsulinCalculator extends Component {
  
  state = { language: 'uk' };

  render () {
    return (
      <ScrollView scrollEnabled={true}>
        <View>
          <Card>
            <CardSection>
              <CardTitle cardTitle={'Blood Sugar'}></CardTitle>
              <CardSubtitle cardTitle={'Target: '} cardValue={'6'}></CardSubtitle>
              <CardSubtitle cardTitle={'Base Level: '} cardValue={'12'}></CardSubtitle>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <CardTitle cardTitle={'Food'}></CardTitle>
              <CardTitle cardTitle={'Total carbs: 156'} titleValue={' grams'}></CardTitle>
              <CardSubtitle cardTitle={'Protein: '} cardValue={'75g'}></CardSubtitle>
              <CardSubtitle cardTitle={'Fibre: '} cardValue={'14g'}></CardSubtitle>
              <CardSubtitle cardTitle={'GI Index: '} cardValue={'Med'}></CardSubtitle>
            </CardSection>
          </Card>

    
          <Card>
            <CardSection>
              <CardSubtitle cardTitle={'Exercise'}></CardSubtitle>
              <DropdownPicker />
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <CardSubtitle cardTitle={'Heart Rate'}></CardSubtitle>
              <View>
                <Text style={styles.titleStyle}>
                  159g CARBS
                </Text>
              </View>
            </CardSection>
          </Card>

          <Card>
            <CardSection>
              <CardSubtitle cardTitle={'Ratio'}></CardSubtitle>
              <View>
                <Text style={styles.titleStyle}>
                  10 : 1
                </Text>
              </View>
            </CardSection>
          </Card>
        </View>
      </ScrollView>
    );
  }
};

const styles = {
  titleStyle: {
    padding: 5,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    color: '#ddd',
    position: 'relative'
  },
  carbStyle: {
    padding: 20
  }
};

export default InsulinCalculator;