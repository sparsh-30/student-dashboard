import { View, Text } from 'react-native'
import Notification from './Notification'

export default function NotificationsContainer() {

  const allNotifications=[
    {
      notifContent: "Attention parents! The end-of-term exams are approaching. Ensure your child is prepared and review the exam schedule available on the app.",
      notifDate: "Jan 12, 2024",
      notifPending: true,
    },
    {
      notifContent: "As the seasons change, please ensure your child is dressed appropriately and carries necessary items like water bottles. Health is wealth!",
      notifDate: "Jan 10, 2024",
      notifPending: true,
    },
    {
      notifContent: "A friendly reminder about upcoming fee payments. Access the app for convenient online payment options and ensure a hassle-free transaction.",
      notifDate: "Dec 28, 2023",
      notifPending: false,
    },
    {
      notifContent: "We're planning a fun and educational class outing. Kindly check the app for the permission slip and details. We look forward to an enjoyable day!",
      notifDate: "Dec 28, 2023",
      notifPending: false,
    },
    {
      notifContent: "Your child's safety is our priority. We will be conducting emergency drills this 02/01/2024. Familiarize yourself with the safety procedures through the app.",
      notifDate: "Dec 27, 2023",
      notifPending: false,
    },
    {
      notifContent: "Dear parents, don't miss the chance to discuss your child's progress. The next Parent-Teacher Meeting is scheduled for Dec 28,2023 at 9:00 AM. Mark your calendars!",
      notifDate: "Dec 23, 2023",
      notifPending: false,
    },
  ]

  return (
    <View>
      {
        allNotifications.map((notificationObject,index)=> {
          return <Notification key={index} notifContent={notificationObject.notifContent} notifDate={notificationObject.notifDate} notifPending={notificationObject.notifPending} />
        })
      }
    </View>
  )
}