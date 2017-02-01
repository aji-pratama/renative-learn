import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, Text, View } from 'react-native';

class relearn extends Component {
  render() {
    return (
      <View style={{padding: 10}}>
        {/* <TextInput style={{height: 40}} placeholder="This is Text Input" /> */}
        <Text>
          Ini Text
        </Text>
    </View>
    );
  }
}


AppRegistry.registerComponent('relearn', ()=> relearn)
