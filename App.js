import React from 'react';
import { Text, View } from 'react-native';
// import AWS from './AWS';
import Home from './components/Home';
import CameraExample from './components/Camera';
import {Router, Scene } from 'react-native-router-flux';
// import { Button } from '../Library/Caches/typescript/2.6/node_modules/@types/react-native';

// const rekognition = new AWS.Rekognition();

// let params = {
//   Input: { /* required */
//     KinesisVideoStream: {
//       Arn: 'STRING_VALUE'
//     }
//   },
//   Name: 'STRING_VALUE', /* required */
//   Output: { /* required */
//     KinesisDataStream: {
//       Arn: 'STRING_VALUE'
//     }
//   },
//   RoleArn: 'STRING_VALUE', /* required */
//   Settings: { /* required */
//     FaceSearch: {
//       CollectionId: 'STRING_VALUE',
//       FaceMatchThreshold: 0.0
//     }
//   }
// };
// rekognition.createStreamProcessor(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log('data???', data);           // successful response
// });

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


