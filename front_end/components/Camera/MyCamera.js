import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, Text, View, Image, TouchableOpacity } from 'react-native';

const MyCamera = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(true);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync()
      setImage(data.uri);
      setShowCamera(false);
    }
  }
  const retakePicture = () => {
    setImage(null);
    setShowCamera(true);
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (showCamera) {
    return (
      <View className="flex-1 items-center gap-y-2">
        <View className="flex-1 flex-row border rounded-xl p-1 bg-black">
          <Camera
            ref={ref => setCamera(ref)}
            className="flex-1"
            type={CameraType.back}
            ratio={'1:2'} />
        </View>

        <TouchableOpacity className="bg-gray-300 border border-sky-500 rounded-xl" onPress={() => takePicture()}>
          <Text className="p-1" >Take Picture</Text>
        </TouchableOpacity>

      </View>
    )
  } else {
    return (
      <View className="flex-1 items-center gap-y-2">
        <View className="flex-1 w-full p-1 border rounded-xl bg-black">
          {image ? <Image className="flex-1" source={{ uri: `${image}` }} /> : <Text>None</Text>}
        </View>

        {/* <TouchableOpacity title="Take Picture" onPress={() => takePicture()} /> */}
        <View className="flex-row gap-x-4">
          <TouchableOpacity className="bg-gray-300 border border-sky-500 rounded-xl w-14 items-center" onPress={() => retakePicture()}>
            <Text className="p-1" >Retake</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-300 border border-sky-500 rounded-xl w-14 items-center">
            <Text className="p-1" >Done</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}


export default MyCamera