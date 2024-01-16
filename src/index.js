import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from './../firebase';
import { useDispatch } from 'react-redux';
import { setStudentDetails } from './store/studentDetailsSlice';
import StackNavigator from './navigators/StackNavigator';

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // This is the ID that is used to fetch a particular document from firebase which will be assigned when a user logs in
  const documentID = '0aB3eiU3dafwCmulszK6';

  const fetchStudentData = async () => {
    const d = await getDoc(doc(db, 'studentDetails', documentID));
    dispatch(setStudentDetails(d.data()));
  };

  useEffect(() => {
    fetchStudentData();
    setLoading(false);
  }, []);

  return (
    <View className='flex-1'>{loading ? <Loader /> : <StackNavigator />}</View>
  );
}

const Loader = () => {
  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <ActivityIndicator size='large' color='#978CD0' />
    </View>
  );
};
