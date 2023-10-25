import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const ContactSupportScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={[
          styles.bottomView,
          { position: "absolute", bottom: 50, right: 0, right: 0, zIndex: 99 },
        ]}
      >
        <TouchableOpacity
          style={[styles.bottomNext]}
          onPress={() => navigation.navigate("Terrance")}
        >
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <Image
            style={styles.headerImage}
            source={require("../assets/eva_arrow-ios-back-fill.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Contact Support</Text>
      </View>
      <View style={{ paddingTop: 50, paddingBottom: 15 }}>
        <Text style={styles.ContactDetail}>Full Name</Text>
        <View style={{ paddingHorizontal: 14 }}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            keyboardType="default"
          />
        </View>
      </View>
      <View style={{}}>
        <Text style={styles.ContactDetail}>Email</Text>
        <View style={{ paddingHorizontal: 14 }}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            keyboardType="email-address"
          />
        </View>
      </View>
      <View style={{ paddingTop: 15 }}>
        <Text style={styles.ContactDetail}>Massage</Text>
        <View style={{ paddingHorizontal: 14 }}>
          <TextInput
            style={styles.Massageinput}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            keyboardType="default"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactSupportScreen;

const styles = StyleSheet.create({
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 150,
    paddingRight: 15,
  },
  bottomNext: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 130,
    marginTop: 45,
    backgroundColor: "#FFD700",
    borderRadius: 31,
    borderWidth: 1,
    borderColor: "#FFD700",
    marginLeft: 110,
  },
  headerView: {
    paddingLeft: 8,
    flexDirection: "row",
    paddingTop: 22,
  },
  headerImage: {
    height: 32,
    width: 29,
  },

  headerText: {
    paddingLeft: 85,
    fontSize: 20,
    fontWeight: "500",
  },
  ContactDetail: {
    fontSize: 16,
    paddingLeft: 15,
    fontWeight: "600",
    paddingBottom: 7,
  },
  input: {
    paddingLeft: 10,
    fontSize: 20,
    height: 46,
    borderWidth: 0.21,
    borderRadius: 5,
  },
  Massageinput: {
    paddingLeft: 10,
    fontSize: 20,
    height: "60%",
    borderWidth: 0.21,
    borderRadius: 5,
  },
});
