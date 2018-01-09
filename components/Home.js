import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <Button onPress={() => Actions.CameraExample()} title='Touch Me' />
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