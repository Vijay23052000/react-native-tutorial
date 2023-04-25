
import {
  StyleSheet,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactScreen from './ContactScreen';
import AboutScreen from './AboutScreen';
import LogoutScreen from './LogoutScreen';

const Drawer = createDrawerNavigator();


function DashboardScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });