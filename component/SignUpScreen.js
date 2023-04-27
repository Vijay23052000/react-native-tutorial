import React, {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';

function SignUpScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Id"
        onChangeText={setEmailId}
        value={EmailId}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Text>Already registered? Login</Text>
      <Button
        title="Login"
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 11,
    backgroundColor: 'white',
    margin: 8,
    width: '75%',
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    marginVertical: 10,
    fontSize: 18,
  },
});
