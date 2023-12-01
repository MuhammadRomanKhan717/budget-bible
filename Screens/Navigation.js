import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
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
import CustomDrawer from "../Components/CustomDrawer";
import TalkToTerrance from "./TalkToTerrance";
import ContactSupportScreen from "./ContactSupportScreen";
import FAQsScreen from "./FAQsScreen";
import ChangePasswordScreen from "./ChangePasswordScreen";
import OTPscreen from "./OTPscreen";
import ConfirmCodeScreen from "./ConfirmCodeScreen";
import PasswordResetScreen from "./PasswordResetScreen";
import ShareScreen from "./ShareScreen";
import CalenderScreen from "./CalenderScreen";
import ConfirmphoneNoScreen from "./ConfirmphoneNoScreen";
import ChangeYouPassword2 from "./ChangeYouPassword2";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        header: () => null,
        drawerLabelStyle: { marginLeft: -20 },
      }}
    >
      <Drawer.Screen name=" " component={AllocateYourFriend} />
      <Drawer.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <View>
              <View style={styles.ProfileDrawer1}>
                <View style={styles.ProfileDrawer}>
                  <View
                    style={{
                      paddingLeft: 10,
                      paddingTop: 3,
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      source={require("../assets/unsplash_a19OVaa2rzA.png")}
                    />
                    <Text style={{ paddingTop: 5, paddingLeft: 7 }}>
                      Profile
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        paddingRight: 15,
                        paddingTop: 3,
                        paddingLeft: 7,
                        fontSize: 9,
                      }}
                    >
                      Active
                    </Text>
                    <Image
                      source={require("../assets/eva_arrow-ios-back.png")}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginTop: 12,
                  marginRight: 10,
                  backgroundColor: "#D2D2D2",
                  height: 1,
                  width: 276,
                }}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={DashboardSCreen}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="dashboard" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Income And Expense"
        component={IncomeExpensesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Image source={require("../assets/Group6877.png")} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Planned Expenses"
        component={AccountsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="wallet-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Forcast"
        component={AccountsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Image
              source={require("../assets/clarity_bank-line.png")}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Goals"
        component={AccountsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Image source={require("../assets/Vector2.png")} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
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
      <Stack.Screen name="mainScreen" component={MyDrawer} />
      <Stack.Screen name="incomeExpanses" component={IncomeExpensesScreen} />
      <Stack.Screen name="accounts" component={AccountsScreen} />
      <Stack.Screen name="StackDashboard" component={DashboardSCreen} />
      <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
      <Stack.Screen name="ConfirmPhoneNumber" component={ConfirmphoneNoScreen} />
      <Stack.Screen name="ChangePasswor2" component={ChangeYouPassword2} />
      {/* <Stack.Screen name="profile" component={ProfileScreen} /> */}
      <Stack.Screen name="setting" component={SettingsScreen} />
      <Stack.Screen name="Editprofile" component={EditProfileScreen} />
      <Stack.Screen name="allocateTourFunds" component={AllocateYourFriend} />
      <Stack.Screen name="Terrance" component={TalkToTerrance} />
      <Stack.Screen name="contact" component={ContactSupportScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="OTP" component={OTPscreen} />
      <Stack.Screen name="Confirm" component={ConfirmCodeScreen} />
      <Stack.Screen name="ResetPswd" component={PasswordResetScreen} />
      <Stack.Screen name="FAQ" component={FAQsScreen} />
      <Stack.Screen name="share" component={ShareScreen} />
      <Stack.Screen name="Calender" component={CalenderScreen} />
      
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  ProfileDrawer1: {
    // marginRight: 10,
    // paddingHorizontal: 10,
  },
  ProfileDrawer: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 60,
    width: 240,
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
