import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function QuickLinks() {
  // The array consisting of the name of the link and icon 
  const quickLinksData = [
    { linkTitle: 'Report', linkIconName: 'article' },
    { linkTitle: 'Syllabus', linkIconName: 'note' },
    { linkTitle: 'Unit Test', linkIconName: 'square-foot' },
    { linkTitle: 'Payment', linkIconName: 'credit-card' },
  ];

  return (
    <View className='my-8'>
      {/* Title of the section */}
      <Text className='text-[16px] font-medium font-poppins'>Quick Links</Text>
      {/* Main content of the section */}
      <View className='py-5 flex-row justify-evenly bg-secondary rounded-[20px]'>
        {/* Mapping the links array with the component */}
        {quickLinksData.map((quickLink,index) => {
          return (
            <LinkComponent
              key={index}
              linkTitle={quickLink.linkTitle}
              linkIconName={quickLink.linkIconName}
            />
          );
        })}
      </View>
    </View>
  );
}

// The component for a single quick link card
const LinkComponent = ({ linkTitle, linkIconName }) => {
  return (
    <TouchableWithoutFeedback>
      <View className='h-[75] flex justify-between items-center w-fit'>
        <View className='w-10 h-10 flex flex-row justify-center items-center rounded-full bg-primary border-[1px] border-[#5140B1]'>
          <MaterialIcons name={linkIconName} size={24} color='white' />
        </View>
        <Text className='text-[13px] font-poppins text-textSecondary'>
          {linkTitle}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
