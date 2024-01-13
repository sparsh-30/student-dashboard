import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  
  // Adding font 'Poppins' 
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <HomeScreen />
      <StatusBar backgroundColor='white' />
    </SafeAreaView>
  );
}
