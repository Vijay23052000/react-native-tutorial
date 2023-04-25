import { View, Text, StyleSheet, Button } from 'react-native';


function LogoutScreen({ navigation }) {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Logout"</Text> screen!
      </Text>
       <Button title="Logout" onPress={ ()=>  navigation.navigate('Login')} />
    </View>
  );
}

export default LogoutScreen;

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