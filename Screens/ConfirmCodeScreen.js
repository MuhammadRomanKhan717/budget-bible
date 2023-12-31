import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const ConfirmCodeScreen = ({ navigation }) => {
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const PasswordValidate = () => {
    let password = f1;
    let conformPassword = f2;
    if (conformPassword == password) {
      navigation.navigate("ResetPswd");
    } else {
      Alert.alert("Password not maching ");
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Verification Code</Text>
      </View>
      <View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="New Password"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholderTextColor="#000000"
            secureTextEntry={true}
            maxLength={12}
            onChangeText={(txt) => {
              setF1(txt);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Confirm New Password"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            placeholderTextColor="#000000"
            secureTextEntry={true}
            maxLength={12}
            onChangeText={(txt) => {
              setF2(txt);
            }}
          />
        </View>
      </View>

      <View style={{ paddingTop: 125 }}>
        <TouchableOpacity
          onPress={() => PasswordValidate()}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmCodeScreen;

const styles = StyleSheet.create({
  headerView: {
    marginTop: 60,
    paddingBottom: 10,
    marginLeft: 19.92,
    flexDirection: "row",
  },

  headerText: {
    fontSize: 28.52,
    fontWeight: "400",
    paddingTop: 35,
    lineHeight: 42.78,
  },
  inputView: {
    flexDirection: "row",
    marginHorizontal: 19,
    borderRadius: 7.35,
    borderWidth: 0.92,
    paddingLeft: 10,
    height: 49.6,
    marginTop: 20,
    fontSize: 18,
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10.0,
    elevation: 16,
  },
  input: {
    paddingLeft: 10,
    fontSize: 14.7,
    width: "98%",
    height: "90%",
    fontWeight: "400",
    lineHeight: 22.04,
  },
  button: {
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 67,
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
    fontWeight: "600",
    color: "white",
    alignItems: "center",
    lineHeight: 18,
    letterSpacing: -1,
  },
});
