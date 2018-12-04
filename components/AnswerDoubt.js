import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';

export default class AnswerDoubt extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return (
      <ScrollView>
      <Text style={{fontSize:20}}>Why work done is maximum in case of isobaric process</Text>
      <Text style={{fontSize:16}}>DOUBT LIST</Text>
      <Text style={{fontSize:15}}>Subject                     Physics</Text>
      <Text style={{fontSize:15}}>Chapter                     Work,Energy,Power</Text>
      <Text style={{fontSize:15}}>Topic                       Conservation of Momentum</Text>
      <Text style={{fontSize:15}}>Type of doubt               None</Text>
      <Text style={{fontSize:15}}>Level of difficulty         None</Text>
      </ScrollView>

    );
  }
}
