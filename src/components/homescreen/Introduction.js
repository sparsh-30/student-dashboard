import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ProgressCircle } from 'react-native-svg-charts';
import { useSelector } from 'react-redux';

export default function Introduction() {
  const studentName = useSelector((state) => state.studentDetails.name);

  return (
    <View>
      {/* Displaying username */}
      <View>
        <Text className='font-poppins text-sm font-normal'>Welcome back,</Text>
        <Text className='font-poppins text-2xl font-medium'>{studentName}</Text>
      </View>

      {/* Displaying the total attendence  */}
      <View className='bg-primary w-full flex flex-row justify-center rounded-[20px] mt-5'>
        <View className='w-1/2 flex justify-center items-center'>
          <View>
            <Text className='font-poppins text-sm font-normal text-white'>
              Attendance
            </Text>
            <Text className='font-poppins text-2xl font-medium text-white'>
              Jan 2024
              <Entypo name='chevron-small-down' size={24} color='white' />
            </Text>
          </View>
        </View>
        <View className='w-1/2 my-3'>
          <ProgressCircle
            style={{ height: 120 }}
            strokeWidth={12}
            progress={0.93}
            backgroundColor={'rgba(255,255,255,0.1)'}
            progressColor={'#dcd9ef'}
          />
          <View className='w-full h-full absolute top-0 flex flex-row justify-center items-center'>
            <Text className='font-poppins text-lg font-bold text-white'>
              93%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
