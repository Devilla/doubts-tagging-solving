import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableHighlight, Button} from 'react-native';

export default class DoubtsList extends Component {

  constructor(){
    super();
    this.state = {
      questions: ['Sir how to solve Q.58', 'Why work done is maximum in case of isobaric process?']
    }
  }

handleAnswerPress = () => {
  console.log("Answer Pressed!!");
}

  render() {
    const {questions} = this.state;
    return (
        <View>
        <ScrollView>
          <Text style={{fontSize: 50,textAlign: 'center'}}>Answer Doubts</Text>
          <Text style={{fontSize: 15, margin:15, textAlign: 'center'}}>High Priority</Text>
            <View>
            {questions.reverse().map((prop, key) => {
                return (
                  <View key={key}>
                  <Text  style={{margin:50}} key={key}>Question: {key+1} {prop}</Text>
                  <Button onPress={this.handleAnswerPress} title="Answer" ></Button>
                  </View>
                );
             })}
            </View>
            <Text style={{fontSize: 15, margin:15, textAlign: 'center'}}>All Questions</Text>
              <View>
              {questions.reverse().map((prop, key) => {
                  return (
                    <View key={key}>
                    <Text  style={{margin:50}} key={key}>Question: {key+1} {prop}</Text>
                    <Button onPress={this.handleAnswerPress} title="Answer" ></Button>
                    </View>
                  );
               })}
              </View>
          </ScrollView>
        </View>
    );
  }
}
