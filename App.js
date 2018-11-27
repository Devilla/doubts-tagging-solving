import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import LoginScreen from './components/LoginScreen';
import ChooseOption from './components/ChooseOption';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'Login',
      password:'Password'
   };
  }

  render() {
    return (
      <View style={styles.container}>
      {/* <LoginScreen/>*/}
      <ChooseOption/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
