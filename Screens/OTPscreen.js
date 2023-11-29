import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const OTPscreen = ({ navigation }) => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();

  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState("");
  const [count, setCount] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  const otpValidate = () => {
    let otp = "12345";
    let enteredOtp = f1 + f2 + f3 + f4 + f5;
    if (enteredOtp == otp) {
      navigation.navigate("Confirm");
    } else {
      Alert.alert("Wrrong OTP ");
    }
  };
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
      <View
        style={{
          alignSelf: "center",
          paddingTop: 30,
          paddingBottom: 10,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={[
            styles.OTPblacks,
            { borderColor: f1.length >= 1 ? "#FFD700" : "#000" },
          ]}
        >
          <TextInput
            ref={et1}
            style={styles.InputContainer}
            keyboardType="numeric"
            maxLength={1}
            value={f1}
            onChangeText={(txt) => {
              setF1(txt);
              if (txt.length >= 1) {
                et2.current.focus();
              }
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.OTPblacks,
            { borderColor: f2.length >= 1 ? "#FFD700" : "#000" },
          ]}
        >
          <TextInput
            ref={et2}
            style={styles.InputContainer}
            keyboardType="numeric"
            maxLength={1}
            value={f2}
            onChangeText={(txt) => {
              setF2(txt);
              if (txt.length >= 1) {
                et3.current.focus();
              } else if (txt.length < 1) {
                et1.current.focus();
              }
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.OTPblacks,
            { borderColor: f3.length >= 1 ? "#FFD700" : "#000" },
          ]}
        >
          <TextInput
            ref={et3}
            style={styles.InputContainer}
            keyboardType="numeric"
            maxLength={1}
            value={f3}
            onChangeText={(txt) => {
              setF3(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et2.current.focus();
              }
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.OTPblacks,
            { borderColor: f4.length >= 1 ? "#FFD700" : "#000" },
          ]}
        >
          <TextInput
            ref={et4}
            style={styles.InputContainer}
            keyboardType="numeric"
            maxLength={1}
            value={f4}
            onChangeText={(txt) => {
              setF4(txt);
              if (txt.length >= 1) {
                et5.current.focus();
              } else if (txt.length < 1) {
                et3.current.focus();
              }
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.OTPblacks,
            { borderColor: f5.length >= 1 ? "#FFD700" : "#000" },
          ]}
        >
          <TextInput
            ref={et5}
            style={styles.InputContainer}
            keyboardType="numeric"
            maxLength={1}
            value={f5}
            onChangeText={(txt) => {
              setF5(txt);
              if (txt.length >= 1) {
                et5.current.focus();
              } else if (txt.length < 1) {
                et4.current.focus();
              }
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 30, paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => otpValidate()} style={[styles.button]}>
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
          <Text
            style={[
              styles.resendButton,
              { color: count == 0 ? "#000" : "grey" },
            ]}
            onPress={() => {
              setCount(10);
            }}
          >
            Resend
          </Text>
        </TouchableOpacity>
        {count !== 0 && (
          <Text
            style={{
              paddingTop: 2,
              paddingLeft: 7,
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            {count}
          </Text>
        )}
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
    textAlign: "center",
  },
  InputContainer: {
    fontSize: 22,
    fontWeight: "600",
    paddingLeft: 15,
  },
  OTPblacks: {
    justifyContent: "center",
    borderWidth: 0.91,
    borderRadius: 7.3,
    height: 49.28,
    width: 49.28,
    margin: 10,
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
