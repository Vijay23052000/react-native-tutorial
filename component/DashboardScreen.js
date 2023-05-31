
// import {
//   StyleSheet,
// } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactScreen from './ContactScreen';
import AboutScreen from './AboutScreen';
import LogoutScreen from './LogoutScreen';
import WelcomeScreen from './WelcomeScreen';

const Drawer = createDrawerNavigator();


function DashboardScreen() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: 'pink',
      },
      headerTintColor: 'green',
      headerTitleStyle: {
        fontSize: 25,
      },
    }}>
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

export default DashboardScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
    
//   });