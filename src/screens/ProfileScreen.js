import { ScrollView } from 'react-native'
import StudentProfile from '../components/profilescreen/StudentProfile'

export default function ProfileScreen() {
  return (
    <ScrollView style={{backgroundColor:'white',paddingHorizontal:20,flex:1}}>
      <StudentProfile />
    </ScrollView>
  )
}