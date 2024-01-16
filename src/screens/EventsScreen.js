import { ScrollView, StyleSheet } from 'react-native';
import UpcomingEvents from '../components/homescreen/UpcomingEvents';

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <UpcomingEvents />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
});
