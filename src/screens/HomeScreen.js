import { View, Text } from 'react-native'
import Header from '../components/homescreen/Header'
import Introduction from '../components/homescreen/Introduction'

export default function HomeScreen() {
  return (
    <View className='px-6'>
      <Header />
      <Introduction />
    </View>
  )
}