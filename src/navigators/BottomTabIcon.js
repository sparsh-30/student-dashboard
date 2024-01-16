import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BottomTabIcon({ focused, iconName }) {
  return (
    <View
      style={{
        width: 38,
        height: 38,
        backgroundColor: focused ? '#978CD0' : 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      }}
    >
      <MaterialIcons
        name={iconName}
        size={focused ? 24 : 32}
        color={focused ? 'white' : 'black'}
      />
    </View>
  );
}
