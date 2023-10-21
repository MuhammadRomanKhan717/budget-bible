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
import AllocateYourFriend from "./AllocateYourFriend";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import EditProfileScreen from "./EditProfileScreen";
import AccountsScreen from "./AccountsScreen";
import IncomeExpensesScreen from "./IncomeExpensesScreen";
import DashboardSCreen from "./DashboardSCreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="profile" component={ProfileScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardSCreen} />

      <Drawer.Screen name="Income" component={IncomeExpensesScreen} />
      <Drawer.Screen name="Planned" component={AccountsScreen} />
      <Drawer.Screen name="Forcast" component={AccountsScreen} />
    </Drawer.Navigator>
  );
}
const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onbording"
    >
      <Stack.Screen name="Drawer" component={MyDrawer} />
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="Onbording" component={OnboardingScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="expenses" component={ExpensesFlow} />
      <Stack.Screen name="payPeriod" component={PayPeriodScreen} />
      <Stack.Screen name="allocatYourFriend" component={AllocateYourFriend} />
      <Stack.Screen name="incomeExpanses" component={IncomeExpensesScreen} />
      <Stack.Screen name="accounts" component={AccountsScreen} />
      <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="setting" component={SettingsScreen} />
      <Stack.Screen name="Editprofile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
