// import aws from '../AWS';
import CameraExample from './Camera';
let AWS = require('aws-sdk/dist/aws-sdk-react-native');
AWS.config.loadFromPath('./config.json');
const rekognition = new AWS.Rekognition();

let params = {
  Input: { /* required */
    KinesisVideoStream: {
      Arn: 'STRING_VALUE'
    }
  },
  Name: 'STRING_VALUE', /* required */
  Output: { /* required */
    KinesisDataStream: {
      Arn: 'STRING_VALUE'
    }
  },
  RoleArn: 'STRING_VALUE', /* required */
  Settings: { /* required */
    FaceSearch: {
      CollectionId: 'STRING_VALUE',
      FaceMatchThreshold: 0.0
    }
  }
};
rekognition.createStreamProcessor(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log('data???', data);           // successful response
});
