import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ChangePasswordScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("setting")}>
          <Image
            style={styles.TouchableOpacity}
            source={require("../assets/eva_arrow-back-outline.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Change Password</Text>
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
      <View style={{ paddingTop: 125 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("setting")}
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
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 55,
  },
  AllertText: {
    height: 44,
    width: 333,
    paddingHorizontal: 21,
  },
  Text: {
    lineHeight: 21.72,
    fontSize: 14.48,
    fontWeight: "400",
    paddingLeft: 12,
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
