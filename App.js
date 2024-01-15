import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import StackNavigator from './src/navigators/StackNavigator';

export default function App() {
  
  // Adding font 'Poppins' 
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white' />
        <SafeAreaView style={{flex:1}}>
          <StackNavigator />
        </SafeAreaView>
    </NavigationContainer>
  );
}
