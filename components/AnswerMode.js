import React, { Component } from 'react';
import {ScrollView, Text, TextInput, Button} from 'react-native';

export default class AnswerMode extends Component {

  constructor(){
    super();
    this.state = {
      text:''
    }

    console.log(this.state.text);
  }

handleSubmitPress = (text) => {
  console.log(text);
  this.props.navigation.navigate('AnswerDoubt',{text});

}

  render(){
    return (
      <ScrollView>
      <Text> Why work done is amaximum in case of isobaric process? </Text>
      <TextInput
        style={{height: 340, borderColor: 'black', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button onPress={()=>{this.handleSubmitPress(this.state.text)}} title='Submit'></Button>
      </ScrollView>
    );
  }
}
