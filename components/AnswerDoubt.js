import React, {Component} from 'react';
import {ScrollView, View, Text, Button} from 'react-native';

export default class AnswerDoubt extends Component{
  constructor(props){
    super(props);
    console.log(props.navigation.state.params);
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

  componentWillMount(){
       this.state.answers.push(this.state.text);
        console.log(this.props.navigation,'==========WILL=======');
  }
  componentDidMount(){
       // this.state.answers.push('Answer : Go to solution 58.');
        console.log(this.props.navigation,'====DID=============');
  }
  componentWillReceiveProps(){
    console.log(this.props.navigation,'====componentWillReceiveProps=============');

  }

handleDoubtPress  = () => {
  this.props.navigation.navigate('AnswerMode');
  this.state.answers.push(this.state.text);
  console.log(this.props.navigation,'=======FUNC==========');
}

handleShowAnswerPress = () => {
  this.setState({text:this.props.navigation.state.params.text});
   this.state.answers.push(this.state.text);
  console.log(this.props.navigation,'=======FUNC2==========');

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
      <Text style={{fontSize:20}}>{text} </Text>
      </ScrollView>

    );
  }
}
