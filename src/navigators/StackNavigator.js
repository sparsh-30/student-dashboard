import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import ReportsScreen from './../screens/ReportsScreen';
import NotificationsScreen from './../screens/NotificationsScreen';
import CustomHeader from '../components/CustomHeader';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='dashboard'
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name='Dashboard'
        options={{ headerShown: false }}
        component={BottomTabs}
      />
      <Stack.Screen
        name='Reports'
        options={{ header: () => <CustomHeader headerTitle="Report" /> }}
        component={ReportsScreen}
      />
      <Stack.Screen
        name='Notifications'
        options={{ header: () => <CustomHeader headerTitle="Notifications" /> }}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
}
