import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

export default function StudentProfile() {
  // Fetching details from the redux slice
  const studentDetails = useSelector((state) => state.studentDetails);

  return (
    <View>
      {/* Displaying student name and profile image */}
      <View className='px-2 mb-8 flex-row justify-between items-center'>
        <Text className='text-2xl font-poppins font-medium'>
          {studentDetails.name}
        </Text>
        <View>
          <Image
            source={{ uri: studentDetails.profileImage }}
            className='w-[56] h-[56] rounded-full'
          />
        </View>
      </View>

      {/* Displaying other details of the student */}
      <View className='p-5 bg-secondary rounded-[20px]'>
        <View className='flex-row justify-between items-center'>
          <Text className='font-poppins text-sm text-textSecondary'>
            Student ID Number:
          </Text>
          <Text className='font-poppins text-sm text-textSecondary'>
            {studentDetails.studentID}
          </Text>
        </View>
        <View className='flex-row justify-between items-center my-3'>
          <Text className='font-poppins text-sm text-textSecondary'>
            Class/Grade:
          </Text>
          <Text className='font-poppins text-sm text-textSecondary'>
            {studentDetails.grade}
          </Text>
        </View>
        <View className='flex-row justify-between items-center my-3'>
          <Text className='font-poppins text-sm text-textSecondary'>
            Contact Number:
          </Text>
          <Text className='font-poppins text-sm text-textSecondary'>
            {studentDetails.contactNumber}
          </Text>
        </View>
        <View className='flex-row justify-between items-center my-3'>
          <Text className='font-poppins text-sm text-textSecondary'>
            Email Address:
          </Text>
          <Text className='font-poppins text-sm text-textSecondary'>
            {studentDetails.emailAddress}
          </Text>
        </View>
        <View className='flex-row justify-between items-center my-3'>
          <Text className='font-poppins text-sm text-textSecondary'>
            Parent/Guardian:
          </Text>
          <Text className='font-poppins text-sm text-textSecondary'>
            {studentDetails.parent}
          </Text>
        </View>
        <View className='flex-row justify-between items-center my-3'>
          <Text className='font-poppins text-sm text-textSecondary'>
            Parent Contact:
          </Text>
          <Text className='font-poppins text-sm text-textSecondary'>
            {studentDetails.parentContact}
          </Text>
        </View>
        <View className='flex-row justify-between items-center'>
          <Text className='font-poppins text-sm text-textSecondary'>
            Address:
          </Text>
          <Text className='font-poppins text-sm text-textSecondary'>
            {studentDetails.address}
          </Text>
        </View>
      </View>
    </View>
  );
}
