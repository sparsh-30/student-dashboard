import { ScrollView } from 'react-native'
import NotificationsContainer from '../components/notificationscreen/NotificationsContainer'

export default function NotificationsScreen() {
  return (
    <ScrollView style={{backgroundColor:'white',paddingHorizontal:20}}>
      <NotificationsContainer />
    </ScrollView>
  )
}