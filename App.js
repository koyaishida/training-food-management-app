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
import FoodManagementScreen from './src/screens/FoodManagementScreen';
import FoodAddScreen from './src/screens/FoodAddScreen';
import WorkOutManagementScreen from './src/screens/WorkOutManagementScreen';
import TrainingMenuScreen from './src/screens/TrainingMenuScreen';
import TrainingAddScreen from './src/screens/TrainingAddScreen';

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

  

  const Stack = createStackNavigator();

  
 const App = ()=>{
   return(
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} /> 
         <Stack.Screen name="Signup" component={SignupScreen} />
         <Stack.Screen name="Home" component={HomeScreen} />   
         <Stack.Screen name="WeightManagement" component={WeightManagementScreen} />   
         <Stack.Screen name="FoodManagement" component={FoodManagementScreen} />   
         <Stack.Screen name="FoodAdd" component={FoodAddScreen} />   
         <Stack.Screen name="WorkOutManagement" component={WorkOutManagementScreen} />   
         <Stack.Screen name="TrainingMenu" component={TrainingMenuScreen} />   
         <Stack.Screen name="TrainingAdd" component={TrainingAddScreen} />   
       </Stack.Navigator>
     </NavigationContainer>
   )
 }


export default App