import { StatusBar } from "expo-status-bar";
import react from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Screens/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./Screens/SplashScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import OnboardingScreen from "./Screens/OnboardingScreen";
import LoginScreen from "./Screens/LoginScreen";
import AllocateYourFriend from "./Screens/AllocateYourFriend";
import "react-native-gesture-handler";
export default function App() {
  return (
    <View style={styles.container}>
      <AllocateYourFriend />
      {/* 
      <NavigationContainer>
        <Navigation />

        <StatusBar style="auto" />
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
