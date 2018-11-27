import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default class ChooseOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   };
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor:'#eee'}}>Choose Option</Text>
        <Text>Select an option</Text>
        <Button
  onPress={()=>{}}
  title="Answer Doubts"
  color="#841584"
  accessibilityLabel="Click to Answer"
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
