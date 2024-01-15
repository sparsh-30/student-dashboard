import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/HomeScreen';
import EventsScreen from './../screens/EventsScreen';
import ProfileScreen from './../screens/ProfileScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <View className='flex-1'>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: 'absolute',
            bottom: 20,
            left: 20,
            right: 20,
            elevation: 5,
            backgroundColor: 'white',
            borderRadius: 16,
            height: 70,
            zIndex: 300,
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 40,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <MaterialIcons name='home' size={32} color='black' />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name='EventsScreen'
          component={EventsScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 40,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <MaterialIcons name='calendar-today' size={32} color='black' />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 40,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <MaterialIcons name='account-box' size={32} color='black' />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
