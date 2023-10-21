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
import ProfileScreen from "./Screens/ProfileScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";
import DashboardSCreen from "./Screens/DashboardSCreen";
import AddTransactionsScreen from "./Screens/AddTransactionsScreen";
import IncomeExpensesScreen from "./Screens/IncomeExpensesScreen";
import AccountsScreen from "./Screens/AccountsScreen";
import TalkToTerrance from "./Screens/TalkToTerrance";
import ContactSupportScreen from "./Screens/ContactSupportScreen";
import FAQsScreen from "./Screens/FAQsScreen";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <SettingsScreen /> */}
      {/* <EditProfileScreen /> */}
      {/* <DashboardSCreen /> */}
      {/* <AddTransactionsScreen /> */}
      {/* <IncomeExpensesScreen /> */}
      {/* <AccountsScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <AllocateYourFriend /> */}
      {/* <TalkToTerrance /> */}
      {/* <ContactSupportScreen /> */}
      <FAQsScreen />
      {/* <NavigationContainer>
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
