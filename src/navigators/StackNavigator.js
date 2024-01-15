import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs'
import ReportsScreen from './../screens/ReportsScreen'
import NotificationsScreen from './../screens/NotificationsScreen'

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="dashboard" component={BottomTabs} />
      <Stack.Screen name="reports" component={ReportsScreen} />
      <Stack.Screen name="notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  )
}