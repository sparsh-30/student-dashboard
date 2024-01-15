import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  return (
    <View className='flex flex-row justify-between mt-4 mb-7'>
      {/* Menu Icon */}
      <View className='w-[42] h-[42] bg-[#ededf1] rounded-full flex justify-center items-center'>
        <Ionicons name='menu' size={28} color='black' />
      </View>
      {/* Notifications Icon */}
      <NotificationsIcon />
    </View>
  );
}

const NotificationsIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
      <View className='w-[42] h-[42] bg-[#ededf1] rounded-full flex justify-center items-center relative'>
        <Ionicons name='notifications-outline' size={28} color='black' />
        <View className='absolute w-3 h-3 bg-[#ededf1] top-[6] right-[8] rounded-full flex justify-center items-center'>
          <View className='bg-tertiary w-2 h-2 rounded-full'></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { NotificationsIcon };
