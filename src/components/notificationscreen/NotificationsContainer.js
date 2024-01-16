import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Notification from './Notification';
import Loader from './../Loader'

export default function NotificationsContainer() {
  const [notificationsArray, setNotificationsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllNotifications = async () => {
    const notificationRef = collection(db, 'notifications');
    const notificationsData = await getDocs(
      query(notificationRef, orderBy('dateOfUpload', 'desc'))
    );
    let temp = [];
    notificationsData.forEach((notification) => {
      temp.push(notification.data());
    });
    setNotificationsArray(temp);
    setLoading(false);
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      {loading ? (
        <Loader />
      ) : (
        <View>
          {notificationsArray.map((notificationObject, index) => {
            return (
              <Notification
                key={index}
                notificationContent={notificationObject.notificationContent}
                notificationDate={notificationObject.notificationDate}
                notificationPending={true}
              />
            );
          })}
        </View>
      )}
    </View>
  );
}
