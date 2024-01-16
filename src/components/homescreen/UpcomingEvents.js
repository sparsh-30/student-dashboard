import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function UpcomingEvents() {
  const eventsData = [
    {
      eventName: 'Science Fair Showcase',
      dateOfEvent: '18',
      monthOfEvent: 'JAN',
      eventIconComponent: <MaterialIcons name='note' size={24} color='black' />,
    },
    {
      eventName: 'Math Olympiad',
      dateOfEvent: '24',
      monthOfEvent: 'JAN',
      eventIconComponent: (
        <MaterialIcons name='emoji-events' size={24} color='black' />
      ),
    },
    {
      eventName: 'Sports Day Extravaganza',
      dateOfEvent: '31',
      monthOfEvent: 'JAN',
      eventIconComponent: (
        <MaterialIcons name='calculate' size={24} color='black' />
      ),
    },
    {
      eventName: 'Art Exhibition',
      dateOfEvent: '03',
      monthOfEvent: 'FEB',
      eventIconComponent: (
        <MaterialIcons name='landscape' size={24} color='black' />
      ),
    },
  ];

  return (
    <View>
      {/* Title of the section */}
      <Text className='text-[16px] font-medium font-poppins'>
        Upcoming Events
      </Text>
      {/* Main Content of the section */}
      {eventsData.map((event, index) => {
        return (
          <EventComponent
            key={index}
            eventName={event.eventName}
            eventIconComponent={event.eventIconComponent}
            monthOfEvent={event.monthOfEvent}
            dateOfEvent={event.dateOfEvent}
          />
        );
      })}
    </View>
  );
}

const EventComponent = ({
  eventIconComponent,
  eventName,
  monthOfEvent,
  dateOfEvent,
}) => {
  return (
    <View className='p-[10] my-[5] bg-secondary w-full flex-row justify-between items-center rounded-[12px]'>
      {/* Name and icon of the event */}
      <View className='flex-row justify-center items-center'>
        {/* <MaterialIcons name="note" size={24} color='black' /> */}
        {eventIconComponent}
        <Text className='font-poppins text-[14px] font-medium ml-1'>
          {eventName}
        </Text>
      </View>
      {/* Date of the event */}
      <View className='flex justify-center items-center'>
        <Text className='font-poppins text-[14px]'>{monthOfEvent}</Text>
        <Text className='font-poppins text-2xl'>{dateOfEvent}</Text>
      </View>
    </View>
  );
};
export { EventComponent };
