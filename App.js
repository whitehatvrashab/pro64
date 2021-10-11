import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  speak =() =>{
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  }
  render() {
    return (
      <View>
      <View style= {styles.textContainer}>
      <Text style={styles.text}>TEXT TO SPEECH</Text>
      </View>
      <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
        onPress={this.speak}
        >
        <Text style={styles.goButton}>
        Press to hear
        </Text>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 100,
    marginTop: 50,
  },
})