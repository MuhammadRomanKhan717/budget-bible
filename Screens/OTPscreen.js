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
          Enter the Verification Code we Just Send
        </Text>
        <Text style={styles.Text}> You To Your Email Address</Text>
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
        <Text>Didn’t get any code ?</Text>
        <TouchableOpacity>
          <Text style={{ paddingLeft: 10 }}>Resend</Text>
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
  },
  AllertText: {
    height: 44,
    width: 333,
    paddingHorizontal: 21,
    alignSelf: "center",
  },
  Text: {
    lineHeight: 21.72,
    fontSize: 14.48,
    fontWeight: "400",
    paddingLeft: 12,
  },
  button: {
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 47,
    borderRadius: 41,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    alignItems: "center",
  },
});
