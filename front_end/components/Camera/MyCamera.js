import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, Text, View, Image, TouchableOpacity } from 'react-native';

const MyCamera = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri);
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View className="flex-1 items-center">
      <View className="flex-1 flex-row">
        <Camera
          ref={ref => setCamera(ref)}
          className="flex-1 rounded-xl"
          type={CameraType.back}
          ratio={'1:2'} />
      </View>

      {/* <TouchableOpacity title="Take Picture" onPress={() => takePicture()} /> */}

      <TouchableOpacity className="bg-gray-300 my-2 border border-sky-500 rounded-xl" onPress={() => takePicture()}>
        <Text className="p-1" >Take Picture</Text>
      </TouchableOpacity>
      {image && <Image className="flex-1" source={{ uri: image }} />}
    </View>
  )
}


export default MyCamera