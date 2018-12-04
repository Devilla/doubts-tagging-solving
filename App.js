import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import LoginScreen from './components/LoginScreen';
import ChooseOption from './components/ChooseOption';
import VoiceInput from './components/VoiceInput';
import DoubtsList from './components/DoubtsList';
import AnswerDoubt from './components/AnswerDoubt';
import AnswerMode from './components/AnswerMode';



import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
  ChooseOption: {screen : ChooseOption},
  VoiceInput: {screen : VoiceInput},
  DoubtsList: {screen : DoubtsList},
  AnswerDoubt: {screen : AnswerDoubt},
  AnswerMode: {screen : AnswerMode}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
