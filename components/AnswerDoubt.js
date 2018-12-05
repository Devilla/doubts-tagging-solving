import React, {Component} from 'react';
import {ScrollView, View, Text, Button} from 'react-native';

export default class AnswerDoubt extends Component{
  constructor(props){
    super(props);
    this.state = {
          question,
          subject,
          chapter,
          topic,
          type,
          difficulty,
          answers,
          text
          } = this.props.navigation.state.params;
  }


handleDoubtPress  = () => {
  this.props.navigation.navigate('AnswerMode');
}

handleShowAnswerPress = () => {
  this.setState({text:this.props.navigation.state.params.text});
   this.state.answers.push(this.state.text);
}


  render(){
    const {question, subject, chapter, topic, type, difficulty, answers, text} = this.state;
    return (
      <ScrollView>
      <Text style={{fontSize:20}}>{question} ?</Text>
      <Text style={{fontSize:16}}>DOUBT LIST</Text>
      <Text style={{fontSize:15}}>Subject                     {subject}</Text>
      <Text style={{fontSize:15}}>Chapter                     {chapter}</Text>
      <Text style={{fontSize:15}}>Topic                       {topic}</Text>
      <Text style={{fontSize:15}}>Type of doubt               {type}</Text>
      <Text style={{fontSize:15}}>Level of difficulty         {difficulty}</Text>
      <Button onPress={this.handleDoubtPress} title='Answer'></Button>
      <Button onPress={this.handleShowAnswerPress} title='Show Answers'></Button>

            <View>
            {
            answers.map((prop, key) => {
            return (<Text  style={{margin:50}} key={key}>Answer: {key+1} {prop} </Text>);
          })}
            </View>


      </ScrollView>

    );
  }
}
