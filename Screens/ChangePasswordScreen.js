import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import React from "react";

const ChangePasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("setting")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
      </View>
      <View>
        <Text style={styles.checkEmailText}>Check Your Email</Text>
      </View>
      <View style={styles.AllertText}>
        <Text style={styles.Text}>
          Please Check your Mail. we have sent you an email that contains a
          verification code
        </Text>
      </View>
      <View style={styles.ImageView}>
        <Image source={require("../assets/Illustration.png")} />
      </View>
      <View style={{ paddingTop: 60 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("OTP")}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Verify Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  headerView: {
    paddingLeft: 8,
    // backgroundColor: "red",
    flexDirection: "row",
    paddingTop: 22,
    paddingLeft: 12,
  },
  headerImage: {
    height: 32,
    width: 29,
  },
  headerText: {
    paddingLeft: 65,
    fontSize: 22,
    fontWeight: "400",
    paddingBottom: 30,
    lineHeight: 22,
    letterSpacing: -1,
  },
  checkEmailText: {
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    lineHeight: 48,
    paddingBottom: 20,
  },
  AllertText: {
    paddingHorizontal: 21,
  },
  Text: {
    lineHeight: 21.72,
    fontSize: 14.48,
    fontWeight: "400",
    paddingLeft: 12,
    textAlign: "center",
  },
  ImageView: {
    height: 327.12,
    width: 327.12,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 66,
    borderRadius: 41,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "grey",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    alignItems: "center",
  },
});
