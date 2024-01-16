import { View, Text } from 'react-native';

export default function Notification({
  notificationContent,
  notificationDate,
  notificationPending,
}) {
  return (
    <View className='py-3 px-5 bg-secondary rounded-2xl my-[3]'>
      {/* Contents of the notification */}
      <Text
        style={{ color: notificationPending ? '#000' : '#666666' }}
        className='font-poppins text-sm'
      >
        {notificationContent}
      </Text>
      <Text
        style={{ color: notificationPending ? '#000' : '#666666' }}
        className='text-right font-poppins text-xs'
      >
        {notificationDate}
      </Text>

      {/* Marker whether the notification has been read or not */}
      {notificationPending && (
        <View className='w-[6] h-[6] bg-tertiary absolute top-[10] right-[10] rounded-full'></View>
      )}
    </View>
  );
}
