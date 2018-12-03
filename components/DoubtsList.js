import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Button} from 'react-native';

export default class DoubtsList extends Component {

  constructor(){
    super();
    this.state = {
      questions: ['Sir how to solve Q.58', 'Why work done is maximum in case of isobaric process?']
    }
  }

handleAnswerPress = () => {
  console.log("Answer Pessed!!");
}

  render() {
    const {questions} = this.state;
    return (
        <View>
          <Text style={{fontSize: 50,textAlign: 'center'}}>List of doubts</Text>
            <View>
            {questions.map((prop, key) => {
                return (
                  <View>
                  <Text  style={{margin:50}} key={key}>question: {key+1} {prop}</Text>
                  <Button onPress={this.handleAnswerPress} title="Answer" ></Button>
                  </View>
                );
             })}

            </View>
        </View>
    );
  }
}
