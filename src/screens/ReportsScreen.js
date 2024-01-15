import { ScrollView } from 'react-native'
import ReportsContainer from '../components/ReportsScreen/ReportsContainer'

export default function ReportsScreen() {
  return (
    <ScrollView style={{backgroundColor:'white',paddingHorizontal:20}}>
      <ReportsContainer />
    </ScrollView>
  )
}