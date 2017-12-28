import React from 'react';
import { Text, View } from 'react-native';
import Home from './components/Home';
import CameraExample from './components/Camera';
import {Router, Scene } from 'react-native-router-flux';


export default class App extends React.Component {
  render() {
    return (
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="home" component={Home}/>
            <Scene key="CameraExample" component={CameraExample}/>
          </Scene>
        </Router>    
    );
  }
}


