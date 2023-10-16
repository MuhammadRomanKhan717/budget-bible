import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const EditProfileScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <Image
            style={styles.TouchableOpacity}
            source={require("../assets/eva_arrow-back-outline.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View>
        <Text style={styles.AccountsTitleText}>Personal Information</Text>
      </View>
      <View style={styles.ProfileImageView}>
        <Image
          style={styles.ProfileImage}
          source={require("../assets/profileImage.png")}
        />
      </View>
      <View style={styles.persnolInfoView}>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text style={{ paddingLeft: 20 }}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text style={{ paddingLeft: 20 }}>Postal Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text style={{ paddingLeft: 20 }}>Gmail</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 125 }}>
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
    fontWeight: "500",
    paddingBottom: 55,
  },
  AccountsTitleText: {
    paddingLeft: 20,
    fontSize: 22,
    fontWeight: "500",
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
    paddingHorizontal: 15,
  },
  persnolInfo: {
    height: 57,
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
