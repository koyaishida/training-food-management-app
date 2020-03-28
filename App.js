import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from "firebase"
import ENV from "./env.json"
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WeightManagementScreen from './src/screens/WeightManagementScreen';

require("firebase/firestore")


  const firebaseConfig = {
  apiKey:             ENV.FIREBASE_API_KEY,
  authDomain:         ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:        ENV.FIREBASE_DATABASE_URL,
  projectId:          ENV.FIREBASE_PROJECT_ID,
  storageBucket:      ENV.FIREBASE,
  messagingSenderId:  ENV.FIREBASE_STORAGE_BUCKET,
  appId:              ENV.FIREBASE_MESSAGING_SENDER_ID,
  measurementId:      ENV.FIREBASE_MEASUREMENT_ID
};
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const Stack = createStackNavigator();

  
 const App = ()=>{
   return(
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} /> 
         <Stack.Screen name="Signup" component={SignupScreen} />
         <Stack.Screen name="Home" component={HomeScreen} />   
         <Stack.Screen name="WeightManagement" component={WeightManagementScreen} />   
       </Stack.Navigator>
     </NavigationContainer>
   )
 }


export default App