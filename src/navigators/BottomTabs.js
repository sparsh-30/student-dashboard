import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/HomeScreen';
import EventsScreen from './../screens/EventsScreen';
import ProfileScreen from './../screens/ProfileScreen';
import CustomHeader from './../components/CustomHeader';
import BottomTabIcon from './BottomTabIcon';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <View className='flex-1'>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            paddingBottom: 0,
            backgroundColor: 'white',
            borderRadius: 16,
            height: 70,
            zIndex: 300,
          },
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <BottomTabIcon focused={focused} iconName='home' />
            ),
          }}
        />
        <Tab.Screen
          name='EventsScreen'
          component={EventsScreen}
          options={{
            header: () => <CustomHeader headerTitle='Events' />,
            tabBarIcon: ({ focused }) => (
              <BottomTabIcon focused={focused} iconName='calendar-today' />
            ),
          }}
        />
        <Tab.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            header: () => <CustomHeader headerTitle='Profile' />,
            tabBarIcon: ({ focused }) => (
              <BottomTabIcon focused={focused} iconName='account-box' />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
