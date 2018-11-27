import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class LoginScreen extends React.Component {
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
        <Image
        style ={{width: 170, height: 50}}
        source={{uri: 'https://www.neetprep.com/assets/img/logo.png'}}
        />
        <TextInput
        style={{height: 40, width: 170, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(id) => this.setState({id})}
        value={this.state.id}
      />
      <TextInput
      style={{height: 40, width: 170, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(password) => this.setState({password})}
      value={this.state.password}
    />
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
