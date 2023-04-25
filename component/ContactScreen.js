import { View, Text, StyleSheet } from 'react-native';

function ContactScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Contact Deatils"</Text> screen!
      </Text>
    </View>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});