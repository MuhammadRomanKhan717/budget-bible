import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import SplashScreen from "./SplashScreen";
import OnboardingScreen from "./OnboardingScreen";
import SignUpScreen from "./SignUpScreen";
import LoginScreen from "./LoginScreen";
import ForgetPasswordScreen from "./ForgetPasswordScreen";
import ExpensesFlow from "./ExpensesFlow";
import PayPeriodScreen from "./PayPeriodScreen";

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onbording"
    >
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="Onbording" component={OnboardingScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="expenses" component={ExpensesFlow} />
      <Stack.Screen name="payPeriod" component={PayPeriodScreen} />
      <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
