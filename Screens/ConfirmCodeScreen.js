import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ConfirmCodeScreen = ({ navigation }) => {
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
          />
        </View>
      </View>

      <View style={{ paddingTop: 125 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPswd")}
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
    marginTop: 50,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  headerText: {
    fontSize: 28.52,
    fontWeight: "400",
    paddingTop: 35,
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
    fontSize: 20,
    width: "98%",
    height: "90%",
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
