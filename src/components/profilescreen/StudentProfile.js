import { View, Text, Image } from 'react-native'
import Avatar from './../../../assets/avatar.png'

export default function StudentProfile() {
    const studentDetails={
        name: "Amit Patel",
        profileImage: "",
        studentID: "S987654",
        grade: "11th Grade",
        contactNumber: "9875555678",
        emailAddress: "amit.patel@example.com",
        parent: "Nita Patel",
        parentContact: "8865551234",
        address: "789 Tulsi Street, Jaipur"
    }
  return (
    <View>
      {/* Displaying student name and profile image */}
      <View className="px-2 mb-8 flex-row justify-between items-center">
        <Text className="text-2xl font-poppins font-medium">{studentDetails.name}</Text>
        <View>
            <Image source={Avatar} className="w-[56] h-[56] rounded-full" />
        </View>
      </View>

      {/* Displaying other details of the student */}
      <View className="p-5 bg-secondary rounded-[20px]">
        <View className="flex-row justify-between items-center">
            <Text className="font-poppins text-sm text-textSecondary">Student ID Number:</Text>
            <Text className="font-poppins text-sm text-textSecondary">{studentDetails.studentID}</Text>
        </View>
        <View className="flex-row justify-between items-center my-3">
            <Text className="font-poppins text-sm text-textSecondary">Class/Grade:</Text>
            <Text className="font-poppins text-sm text-textSecondary">{studentDetails.grade}</Text>
        </View>
        <View className="flex-row justify-between items-center my-3">
            <Text className="font-poppins text-sm text-textSecondary">Contact Number:</Text>
            <Text className="font-poppins text-sm text-textSecondary">{studentDetails.contactNumber}</Text>
        </View>
        <View className="flex-row justify-between items-center my-3">
            <Text className="font-poppins text-sm text-textSecondary">Email Address:</Text>
            <Text className="font-poppins text-sm text-textSecondary">{studentDetails.emailAddress}</Text>
        </View>
        <View className="flex-row justify-between items-center my-3">
            <Text className="font-poppins text-sm text-textSecondary">Parent/Guardian:</Text>
            <Text className="font-poppins text-sm text-textSecondary">{studentDetails.parent}</Text>
        </View>
        <View className="flex-row justify-between items-center my-3">
            <Text className="font-poppins text-sm text-textSecondary">Parent Contact:</Text>
            <Text className="font-poppins text-sm text-textSecondary">{studentDetails.parentContact}</Text>
        </View>
        <View className="flex-row justify-between items-center">
            <Text className="font-poppins text-sm text-textSecondary">Address:</Text>
            <Text className="font-poppins text-sm text-textSecondary">{studentDetails.address}</Text>
        </View>
      </View>
    </View>
  )
}