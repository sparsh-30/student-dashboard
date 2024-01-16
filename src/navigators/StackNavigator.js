import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import ReportsScreen from './../screens/ReportsScreen';
import NotificationsScreen from './../screens/NotificationsScreen';
import CustomHeader from '../components/CustomHeader';
import {getDoc,doc} from 'firebase/firestore';
import {db} from './../../firebase'
import { useDispatch } from 'react-redux';
import { setStudentDetails } from '../store/studentDetailsSlice';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const dispatch=useDispatch();

  const handleData = async () => {
    const d=await getDoc(doc(db,"studentDetails","0aB3eiU3dafwCmulszK6"));
    dispatch(setStudentDetails(d.data()));
  }

  useEffect(()=>{
    handleData();
  },[])

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
