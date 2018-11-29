import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class DoubtsList extends Component {

  constructor(){
    super();
    this.state = {
      questions: ['Sir how to solve Q.58', 'Why work done is maximum in case of isobaric process?']
    }
  }
  render() {
    const {questions} = this.state;
    return (
        <View>
          <Text style={{fontSize: 50,textAlign: 'center'}}>List of doubts</Text>
            <View>
            <Text>q1 : {questions}</Text>
            <TouchableHighlight onPress={()=>{}}>
            <Text style={{backgroundColor:'blue', color: '#fff', margin: 180}}>Answer</Text>
            </TouchableHighlight>
            </View>
        </View>
    );
  }
}
