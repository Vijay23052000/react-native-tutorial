import { View, Text, StyleSheet, Button } from 'react-native';


function AboutScreen({ navigation }) {
  // const {name} = route.params;
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>
        This is the <Text style={styles.highlight}>"About"</Text> screen!
      </Text>
      <Button title="Go to Contact" onPress={ ()=>  navigation.navigate('Contact')} />
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
    color: 'black',
  },
  text: {
    fontSize: 18,
    color: 'black',
  }
});