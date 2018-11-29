import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import LoginScreen from './components/LoginScreen';
import ChooseOption from './components/ChooseOption';
import VoiceInput from './components/VoiceInput';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
  ChooseOption: {screen: ChooseOption},
  VoiceInput: {screen: VoiceInput}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
