import { View, ActivityIndicator } from 'react-native';

export default function Loader() {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <ActivityIndicator size='large' color='#978CD0' />
    </View>
  );
}
