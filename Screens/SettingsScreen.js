import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";

import React from "react";

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View>
        <Text style={styles.AccountsTitleText}>Accounts Settings</Text>
      </View>
      <View style={styles.chngePasswdView}>
        <TouchableOpacity
          style={styles.chngePasswd}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Ionicons name="md-key-outline" size={24} color="black" />
          <Text style={styles.chanPasswodText}>Change Password</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.chngePasswdView}>
        <TouchableOpacity
          style={styles.chngePasswd}
          onPress={() => navigation.navigate("Editprofile")}
        >
          <FontAwesome5 name="user-circle" size={24} color="black" />
          <Text style={styles.EditProfileText}>Edit Profile</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.PrefrencesView}>
        <Text style={styles.Prefrencestext}>Prefrences</Text>
      </View>

      <View style={styles.chngePasswdView}>
        <TouchableOpacity
          style={styles.chngePasswd}
          onPress={() => navigation.navigate("login")}
        >
          <AntDesign name="logout" size={22} color="black" />
          <Text style={styles.LogoutText}>Logout</Text>
          <Ionicons name="chevron-forward" size={20} color="black" />
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

  headerText: {
    paddingLeft: 110,
    fontSize: 20,
    fontWeight: "400",
    paddingBottom: 55,
    lineHeight: 30,
    textAlign: "center",
  },

  AccountsTitleText: {
    paddingLeft: 21,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 16,
  },

  chngePasswdView: {
    justifyContent: "center",
    marginHorizontal: 35,
    borderRadius: 15,
    paddingLeft: 10,
    height: 50,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "grey",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  chngePasswd: {
    paddingLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  chanPasswodText: {
    fontSize: 12,
    paddingRight: 120,
    paddingLeft: 12,
    lineHeight: 12,
    fontWeight: "400",
    letterSpacing: -1,
  },
  EditProfileText: {
    fontSize: 12,
    paddingRight: 160,
    paddingLeft: 12,
    lineHeight: 12,
    fontWeight: "400",
    letterSpacing: -1,
  },
  PrefrencesView: {
    paddingTop: 105,
  },
  Prefrencestext: {
    paddingLeft: 21,
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "400",
    letterSpacing: -1,
    paddingBottom: 15,
  },
  LogoutText: {
    fontSize: 12,
    paddingRight: 185,
    paddingLeft: 12,
    lineHeight: 12,
    fontWeight: "400",
    letterSpacing: -1,
  },
});
