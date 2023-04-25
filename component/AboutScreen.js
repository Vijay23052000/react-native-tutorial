import { View, Text, StyleSheet } from 'react-native';


function AboutScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"About Screen"</Text> screen!
      </Text>
    </View>
  );
}

export default AboutScreen;

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