import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.headerImage}
            source={require("../assets/bytesize_menu.png")}
          />
        </TouchableOpacity>
        <View style={styles.profilText}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
      </View>
      <View style={styles.ProfileImageView}>
        <Image
          style={styles.ProfileImage}
          source={require("../assets/profileImage.png")}
        />
      </View>
      <View style={styles.personalInfoView}>
        <Text style={styles.personalInfoText}>Personal Info</Text>
      </View>
      <View style={styles.persnolInfoView}>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text>Postal Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text>Gmail</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.PerefrencesText}>Perefrences</Text>
      </View>
      <View>
        <View style={styles.perefrencesView}>
          <TouchableOpacity
            style={styles.perefrencesText}
            onPress={() => Navigation.navigate("allocatYourFriend")}
          >
            <Text>My Balance</Text>
            <Image
              style={styles.arrow}
              source={require("../assets/eva_arrow-ios.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.perefrencesView}>
          <TouchableOpacity style={styles.perefrencesText}>
            <Text>Settings</Text>
            <Image
              style={styles.arrow}
              source={require("../assets/eva_arrow-ios.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.perefrencesView}>
          <TouchableOpacity style={styles.perefrencesText}>
            <Text>Log out</Text>
            <Image
              style={styles.arrow}
              source={require("../assets/eva_arrow-ios.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    // justifyContent: "space-around",
    marginHorizontal: 10,
    paddingTop: 10,
  },
  headerImage: {
    height: 26,
    width: 26,
  },
  profilText: {
    paddingLeft: 120,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  ProfileImageView: {
    paddingTop: 52,
  },
  ProfileImage: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  personalInfoView: {},
  personalInfoText: {
    fontSize: 16,
    color: "#B8B8B8",
    paddingBottom: 10,
    paddingLeft: 26,
  },
  persnolInfoView: {
    paddingHorizontal: 15,
  },
  persnolInfo: {
    height: 57,
    paddingLeft: 12,
    justifyContent: "center",
    // backgroundColor: "#B8B8B8",
    marginBottom: 3,
    // borderWidth: 1,

    borderRadius: 15,
  },
  PerefrencesText: {
    fontSize: 16,
    color: "#B8B8B8",
    paddingBottom: 12,
    paddingLeft: 26,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  perefrencesView: {
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 91,
  },
  perefrencesText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#B8B8B8",
    paddingBottom: 10,
    paddingLeft: 26,
    marginBottom: 5,
    borderRadius: 15,
    height: 57,
    width: "99%",
  },

  arrow: {
    height: 32,
    width: 28,
  },
});
