import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Report({ reportName }) {
  return (
    <View className='w-full my-[10] p-4 flex-row justify-between items-center border-[1px] border-primary rounded-lg'>
      <View className='flex-row justify-start items-center'>
        <View className='h-10 w-10 flex justify-center items-center bg-primary rounded-full border-[1px] border-[#5140B1]'>
          <MaterialIcons name='description' size={24} color='white' />
        </View>
        <Text className='ml-4 font-poppins text-[15px]'>{reportName}</Text>
      </View>
      <MaterialIcons name='cloud-download' size={24} color='black' />
    </View>
  );
}
