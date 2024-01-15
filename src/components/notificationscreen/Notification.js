import { View, Text } from 'react-native';
import React from 'react';

export default function Notification({
  notifContent,
  notifDate,
  notifPending,
}) {
  return (
    <View className='py-3 px-5 bg-secondary rounded-2xl my-[3]'>
      {/* Contents of the notification */}
      <Text
        style={{ color: notifPending ? '#000' : '#666666' }}
        className='font-poppins text-sm'
      >
        {notifContent}
      </Text>
      <Text
        style={{ color: notifPending ? '#000' : '#666666' }}
        className='text-right font-poppins text-xs'
      >
        {notifDate}
      </Text>

      {/* Marker whether the notification has been read or not */}
      {notifPending && (
        <View className='w-[6] h-[6] bg-tertiary absolute top-[10] right-[10] rounded-full'></View>
      )}
    </View>
  );
}
