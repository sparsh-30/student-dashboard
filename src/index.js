import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from './../firebase';
import { useDispatch } from 'react-redux';
import { setStudentDetails } from './store/studentDetailsSlice';
import StackNavigator from './navigators/StackNavigator';
import Loader from './components/Loader';

export default function Index() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  // This is the ID that is used to fetch a particular document from firebase which will be assigned when a user logs in
  const documentID = '0aB3eiU3dafwCmulszK6';

  const fetchStudentData = async () => {
    const documentRef=doc(db, 'studentDetails', documentID)
    const studentData = await getDoc(documentRef);
    dispatch(setStudentDetails(studentData.data()));
    setLoading(false);
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <View className='flex-1'>{loading ? <Loader /> : <StackNavigator />}</View>
  );
}