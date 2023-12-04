import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";

const ProfileScreen = ({ props }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={24} color="black" />
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
          <Text style={styles.inputText}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text style={styles.inputText}>Postal Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.persnolInfo}>
          <Text style={styles.inputText}>Gmail</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerPerefrences}>Perefrences</Text>
      </View>
      <View>
        <View style={styles.perefrencesView}>
          <TouchableOpacity
            style={styles.perefrencesText}
            onPress={() => navigation.navigate("allocateTourFunds")}
          >
            <Text style={styles.inputText}>My Balance</Text>
            <Ionicons name="chevron-forward" size={24} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.perefrencesView}>
          <TouchableOpacity
            style={styles.perefrencesText}
            onPress={() => navigation.navigate("setting")}
          >
            <Text style={styles.inputText}>Settings</Text>
            <Ionicons name="chevron-forward" size={24} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.perefrencesView}>
          <TouchableOpacity
            style={styles.perefrencesText}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.inputText}>Log out</Text>
            <Ionicons name="chevron-forward" size={24} color="grey" />
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
    paddingLeft: 44,
    lineHeight: 24,
    fontWeight: "400",
  },
  persnolInfoView: {
    paddingHorizontal: 24,
  },
  persnolInfo: {
    height: 57,
    paddingLeft: 12,
    justifyContent: "center",
    marginBottom: 5,

    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "grey",
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 5,
  },
  headerPerefrences: {
    fontSize: 16,
    color: "#B8B8B8",
    paddingBottom: 12,
    paddingLeft: 44,
    paddingTop: 30,
    lineHeight: 24,
    fontWeight: "400",
  },
  PerefrencesText: {},
  perefrencesView: {
    paddingHorizontal: 24,
  },
  perefrencesText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    paddingLeft: 26,
    marginBottom: 15,
    borderRadius: 15,
    height: 57,
    width: "99%",
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "grey",

    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
  },

  inputText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
});
