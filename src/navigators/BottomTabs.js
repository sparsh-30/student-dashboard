import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/HomeScreen';
import EventsScreen from './../screens/EventsScreen';
import ProfileScreen from './../screens/ProfileScreen';
import CustomHeader from './../components/CustomHeader';
import { MaterialIcons } from '@expo/vector-icons';

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
            backgroundColor: 'white',
            borderRadius: 16,
            height: 70,
            zIndex: 300,
          },
          tabBarShowLabel: false,
          // headerShown: true,
        })}
      >
        <Tab.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false,
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
            header: ()=> <CustomHeader headerTitle="Events" />,
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
            header: ()=> <CustomHeader headerTitle="Profile" />,
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
