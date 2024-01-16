import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { useFonts } from 'expo-font';
import Index from './src';

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
      <Provider store={store}>
        <StatusBar
          backgroundColor='white'
          hidden={Platform.OS === 'ios' ? true : false}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <Index />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}
