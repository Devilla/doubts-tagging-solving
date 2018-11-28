import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import LoginScreen from './components/LoginScreen';
import ChooseOption from './components/ChooseOption';
import VoiceTest from './components/VoiceTest';


import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
  ChooseOption: {screen: ChooseOption},
  VoiceTest: {screen: VoiceTest}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
