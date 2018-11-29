import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default class ChooseOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   };
  }

handleAnswerPress = () => {
  this.props.navigation.navigate('DoubtsList');

}

  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor:'#eee', fontSize: 20, marginTop: -600}}>Choose Option</Text>
        <Text style={{marginTop: 50}}>Select an option</Text>
        <Button
          onPress={this.handleAnswerPress}
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
