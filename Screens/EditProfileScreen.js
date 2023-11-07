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

const EditProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("setting")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View>
        <Text style={styles.AccountsTitleText}>Personal Information</Text>
      </View>
      <View style={styles.ProfileImageView}>
        <Image
          style={styles.ProfileImage}
          source={require("../assets/Ellipse236.png")}
        />
      </View>
      <View style={styles.persnolInfoView}>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text style={styles.inputText}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text style={styles.inputText}>Postal Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text style={styles.inputText}>Gmail</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 150 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("setting")}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

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
    fontWeight: "400",
    paddingBottom: 55,
    lineHeight: 30,
    textAlign: "center",
  },
  AccountsTitleText: {
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 16,
    letterSpacing: -1,
  },
  ProfileImageView: {
    paddingTop: 32,
    paddingBottom: 20,
  },
  ProfileImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  persnolInfoView: {
    paddingHorizontal: 35,
  },
  inputText: {
    paddingLeft: 20,
    color: "#ACACAC",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -1,
  },

  persnolInfo: {
    height: 39,
    paddingLeft: 12,
    justifyContent: "center",
    backgroundColor: "#EBEBEB",
    marginBottom: 10,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 66,
    borderRadius: 41,
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
