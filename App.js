import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import SignIn from './src/screens/Signin';
import SignUp from './src/screens/SignUp';
import Edit from './src/screens/Edit';
import Create from './src/screens/Create';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ypiuyx657CY-c3QcY697iasT_hy4bGo",
  authDomain: "note-app-rn.firebaseapp.com",
  projectId: "note-app-rn",
  storageBucket: "note-app-rn.appspot.com",
  messagingSenderId: "742838577158",
  appId: "1:742838577158:web:88ccae83d47e4639667b87"
};

const app = initializeApp(firebaseConfig);

// customizing defult RN theme
const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  }
};

const Stack = createNativeStackNavigator();

export default function App() {

  const user = false;

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Create" component={Create} />

          </>
        ) : (
          <>
            <Stack.Screen name="Signin" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignUp} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
