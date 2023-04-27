import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';


function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'Vijay' && password === '1234') {
      navigation.navigate('Dashboard');
    } else {
      setErrorMessage('Wrong username or password');
    }
  }

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
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title='Login' style={styles.button} onPress={handleLogin}/>
      <Text>New User? Sign Up</Text>
      <Button title="Sign Up" style={styles.button} onPress={ ()=>  navigation.navigate('Sign Up')} />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
}

export default LoginScreen;

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
      borderRadius: 10,
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