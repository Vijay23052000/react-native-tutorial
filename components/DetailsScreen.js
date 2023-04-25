import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go User" onPress={() => navigation.navigate('User')} />
        <Button title="Go Welcome" onPress={() => navigation.navigate('Welcome')} />

        <Button title="Go Details" onPress={() => navigation.navigate('Details')} />

        
      </View>
    );
  }

  export default DetailsScreen;