import { ScrollView } from 'react-native'
import Header from '../components/homescreen/Header'
import Introduction from '../components/homescreen/Introduction'
import QuickLinks from '../components/homescreen/QuickLinks'
import UpcomingEvents from '../components/homescreen/UpcomingEvents'

export default function HomeScreen() {
  return (
    <ScrollView style={{paddingHorizontal:20,backgroundColor:'white'}}>
      <Header />
      <Introduction />
      <QuickLinks />
      <UpcomingEvents />
    </ScrollView>
  )
}