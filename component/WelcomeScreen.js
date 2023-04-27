import { View, Text, StyleSheet, Button } from 'react-native';


function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>
        This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
      </Text>
      <Button title="Go to About" onPress={ ()=>  navigation.navigate('About')} />
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 18,
    color: 'black',
  }
});