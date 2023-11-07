import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
// import OtpInputs from "react-native-otp-inputs";

const OTPscreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Verification Code</Text>
      </View>
      <View style={styles.AllertText}>
        <Text style={styles.Text}>
          Enter the Verification Code we Just Send You To Your Email Address
        </Text>
      </View>
      <View>
        {/* <OtpInputs
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
        /> */}
      </View>
      <View style={{ paddingTop: 125 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Confirm")}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Verify Code</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 12,
        }}
      >
        <Text style={styles.didnotSendText}>Didn’t get any code ?</Text>
        <TouchableOpacity>
          <Text style={styles.resendButton}>Resend</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTPscreen;

const styles = StyleSheet.create({
  headerView: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  headerText: {
    fontSize: 28.52,
    fontWeight: "400",
    paddingTop: 35,
    paddingBottom: 10,
  },
  AllertText: {
    height: 44,
    width: 333,
    margingHorizontal: 21,
    textAlign: "center",
    marginLeft: 20,
  },
  Text: {
    lineHeight: 21.72,
    fontSize: 14.48,
    fontWeight: "400",
    // paddingLeft: 12,
    textAlign: "center",
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
    fontSize: 18,
    lineHeight: 18,
    fontWeight: "600",
    color: "white",
    alignItems: "center",
    letterSpacing: -1,
  },
  didnotSendText: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    alignItems: "center",
  },
  resendButton: {
    paddingLeft: 5,
    fontWeight: "600",
    paddingTop: 3,
  },
});
