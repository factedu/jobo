import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {theme} from './src/theme';



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <WelcomeScreen/>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
