import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NotificationsIcon } from './homescreen/Header';
import { useNavigation } from '@react-navigation/native';

export default function CustomHeader({ headerTitle }) {
  const navigation = useNavigation();
  return (
    <View className='pt-4 pb-7 bg-background'>
      <View className='px-5 flex-row justify-between items-center'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View className='flex-row justify-center items-center'>
            <MaterialIcons name='arrow-back-ios' size={28} color='black' />
            <Text className='font-poppins text-xl font-medium'>
              {headerTitle}
            </Text>
          </View>
        </TouchableOpacity>
        <NotificationsIcon />
      </View>
    </View>
  );
}
