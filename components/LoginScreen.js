import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Alert, Button } from 'react-native';
import ActionButton from 'react-native-action-button';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'Admin',
      password:'Admin'
   };
  }
handleLoginPress = () =>  {
  if(this.state.id === 'admin' && this.state.id === 'admin' || this.state.id === 'Admin' && this.state.id === 'Admin')
    this.props.navigation.navigate('ChooseOption');
  else {
    Alert.alert('Invalid Credentials.');
  }
}

  render() {
    return (
      <View style={styles.container}>
      <Image
      style ={{width: 170, height: 50}}
      source={{uri: 'https://www.neetprep.com/assets/img/logo.png'}}
      />
      <TextInput
      style={{height: 40, width: 170, borderColor: '#eee', borderWidth: 1}}
      onChangeText={(id) => this.setState({id})}
      value={this.state.id}
      placeholder="Login"
      />
      <TextInput
      style={{height: 40, width: 170, borderColor: '#eee', borderWidth: 1}}
      onChangeText={(password) => this.setState({password})}
      value={this.state.password}
      placeholder="Password"
      />
    <Button onPress={this.handleLoginPress} title="LOGIN screen"></Button>

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
