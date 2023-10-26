import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const PasswordResetScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate("setting")}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.ImageView}>
          <View>
            <Image source={require("../assets/textmbreAsset2trssss1.png")} />
          </View>
          <Text style={styles.ResetText}>Password Reset</Text>
          <View>
            <Text style={styles.SubResetText}>
              Your Password has been reset sucessfully
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PasswordResetScreen;

const styles = StyleSheet.create({
  ImageView: {
    height: 410,
    width: 380,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  ResetText: {
    fontSize: 27.3,
    fontWeight: "400",
    lineHeight: 40.96,
  },
  SubResetText: {
    fontSize: 13.65,
    fontWeight: "400",
    lineHeight: 20.48,
  },
});
