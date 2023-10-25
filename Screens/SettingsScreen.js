import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Image
            style={styles.TouchableOpacity}
            source={require("../assets/eva_arrow-back-outline.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View>
        <Text style={styles.AccountsTitleText}>Accounts Settings</Text>
      </View>
      <View style={styles.chngePasswdView}>
        <TouchableOpacity style={styles.chngePasswd}>
          <Image source={require("../assets/carbon_password.png")} />
          <Text style={styles.chanPasswodText}>Change Password</Text>
          <Image source={require("../assets/eva_arrow-ios-back.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.chngePasswdView}>
        <TouchableOpacity
          style={styles.chngePasswd}
          onPress={() => navigation.navigate("Editprofile")}
        >
          <Image source={require("../assets/gg_profile.png")} />
          <Text style={styles.EditProfileText}>Edit Profile</Text>
          <Image source={require("../assets/eva_arrow-ios-back.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.PrefrencesView}>
        <Text style={{ paddingLeft: 15, fontSize: 26, fontWeight: "500" }}>
          Prefrences
        </Text>
      </View>
      <View style={styles.chngePasswdView}>
        <TouchableOpacity style={styles.chngePasswd}>
          <Image source={require("../assets/ant-design_logout-outlined.png")} />
          <Text style={styles.LogoutText}>Logout</Text>
          <Image
            source={require("../assets/eva_arrow-ios-back.png")}
            onPress={() => navigation.navigate("login")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  headerView: {
    paddingLeft: 8,
    // backgroundColor: "red",
    flexDirection: "row",
    paddingTop: 22,
  },
  headerImage: {
    height: 32,
    width: 29,
  },
  headerText: {
    paddingLeft: 100,
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 55,
  },

  AccountsTitleText: {
    paddingLeft: 15,
    fontSize: 26,
    fontWeight: "500",
  },

  chngePasswdView: {
    justifyContent: "center",
    marginHorizontal: 12,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 10,
    height: 50,
    marginTop: 20,
    fontSize: 18,
    borderColor: "lightgrey",
  },
  chngePasswd: {
    paddingLeft: 10,
    alignItems: "center",
    // justifyContent: "space-evenly",
    flexDirection: "row",
  },
  chanPasswodText: {
    fontSize: 12,
    paddingRight: 160,
    paddingLeft: 12,
  },
  EditProfileText: {
    fontSize: 12,
    paddingRight: 200,
    paddingLeft: 12,
  },
  PrefrencesView: {
    paddingTop: 105,
  },
  LogoutText: {
    fontSize: 12,
    paddingRight: 225,
    paddingLeft: 12,
  },
});
