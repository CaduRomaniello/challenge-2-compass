import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Colors} from './constants/styles'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen/index';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    // <View><Text>OLÁ</Text></View>
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.container}>
        <SignupScreen/>
      </SafeAreaView>
      <StatusBar style="light"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    backgroundColor: Colors.background
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    backgroundColor: Colors.background
  },
});
