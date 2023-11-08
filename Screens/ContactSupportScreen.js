import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const ContactSupportScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Contact Support</Text>
      </View>
      <View style={{ paddingTop: 30, paddingBottom: 10 }}>
        <Text style={styles.ContactDetail}>Full Name</Text>
        <View style={{ paddingHorizontal: 21 }}>
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
        <View style={{ paddingHorizontal: 21 }}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            keyboardType="email-address"
          />
        </View>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text style={styles.ContactDetail}>Massage</Text>
        <View style={{ paddingHorizontal: 21 }}>
          <TextInput
            style={styles.Massageinput}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            keyboardType="default"
          />
        </View>
        <View style={[styles.bottomView]}>
          <TouchableOpacity
            style={[styles.bottomNext]}
            onPress={() => navigation.navigate("Terrance")}
          >
            <Text style={{ color: "white" }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactSupportScreen;

const styles = StyleSheet.create({
  bottomView: {
    paddingLeft: 120,
  },
  bottomNext: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    height: 45,
    width: 130,
    marginTop: 45,
    backgroundColor: "#FFD700",
    borderRadius: 31,
    borderWidth: 1,
    borderColor: "#FFD700",
    marginLeft: 110,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "grey",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
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
    fontWeight: "600",
    lineHeight: 30,
    textAlign: "center",
  },
  ContactDetail: {
    fontSize: 14,
    paddingLeft: 20,
    fontWeight: "500",
    paddingBottom: 7,
    lineHeight: 21,
  },
  input: {
    paddingLeft: 10,
    fontSize: 20,
    height: 46,
    backgroundColor: "white",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "grey",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  Massageinput: {
    paddingLeft: 10,
    fontSize: 20,
    height: 140,

    borderRadius: 5,
    backgroundColor: "white",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "grey",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
});
