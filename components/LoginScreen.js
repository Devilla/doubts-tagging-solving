import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Alert } from 'react-native';
import ActionButton from 'react-native-action-button';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password:''
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
      style={{height: 40, width: 170, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(id) => this.setState({id})}
      value={this.state.id}
      placeholder="Login"
      />
      <TextInput
      style={{height: 40, width: 170, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(password) => this.setState({password})}
      value={this.state.password}
      placeholder="Password"
      />
    <TouchableHighlight on onPress={this.handleLoginPress}>
    <Text style={{backgroundColor:'#097fff', color: '#fff', margin: 10}}>Sign in</Text>

    </TouchableHighlight>
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
