import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

const SignUpScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.mainView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <View>
          <Image
            style={styles.Image}
            source={require("../assets/Group6881.png")}
          />
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.createText}>Create a new account</Text>

          <View style={styles.inputView}>
            <Image source={require("../assets/ant-design_user-outlined.png")} />
            <TextInput
              placeholder="Username"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputView}>
            <Feather name="lock" size={24} color="black" />
            <TextInput
              placeholder="Password"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              keyboardType="numbers-and-punctuation"
            />
          </View>
          <View style={styles.inputView}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={[styles.buttonText]}>Sign up</Text>
          </TouchableOpacity>

          <View style={[styles.orYouSign]}>
            <View
              style={{ height: 1, width: 120, backgroundColor: "#4B4B4B" }}
            />
            <Text style={[styles.signinwith]}>Or Sign In with</Text>
            <View
              style={{ height: 1, width: 120, backgroundColor: "#4B4B4B" }}
            />
          </View>

          <View style={[styles.signwith]}>
            <TouchableOpacity style={[styles.bottomlink]}>
              <Image
                source={require("../assets/flat-color-icons_google.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bottomlink]}>
              <Image source={require("../assets/bi_apple.png")} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.bottomlink]}>
              <Image source={require("../assets/ci_facebook.png")} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.Warn}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              style={[styles.Warn]}
            >
              <Text style={[styles.signin]}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 0.9,
    // backgroundColor: "red",
  },
  Image: {
    height: 123,
    width: 124,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 10,
    lineHeight: 36,
  },
  createText: {
    fontSize: 14,
    fontWeight: "400",
    alignSelf: "center",
    marginBottom: 10,
    lineHeight: 21,
  },
  inputView: {
    flexDirection: "row",
    marginHorizontal: 15,
    borderRadius: 15,
    paddingLeft: 10,
    height: 50,
    marginTop: 20,
    borderColor: "lightgrey",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
  },
  input: {
    paddingLeft: 10,
    fontSize: 20,
    width: "92%",
    height: "90%",
  },

  button: {
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 140,
    marginBottom: 15,
    marginTop: 20,
    marginHorizontal: 123,
    borderRadius: 30,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    lineHeight: 21,
    alignItems: "center",
  },
  orYouSign: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 22,
  },
  signinwith: {
    color: "grey",
    fontSize: 12,
    justifyContent: "center",

    alignItems: "center",
    lineHeight: 18,
    paddingLeft: 5,
    paddingRight: 5,
  },
  dotdot: {
    color: "grey",
    fontSize: 18,
    fontWeight: "900",
    // alignSelf: "center",
  },
  signwith: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 22,
  },
  bottomlink: {
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 70,
    marginBottom: 15,
    borderRadius: 31,
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
  },
  Warn: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 8,
    color: "grey",
  },
  signin: {
    fontSize: 12,
    color: "#000000",
    fontWeight: "600",
    lineHeight: 18,
  },
});
