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
// import { UserOutlined } from "@ant-design/icons";
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
            <Image source={require("../assets/password.jpg")} />
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
            <Image source={require("../assets/carbon_email.png")} />
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
            <Text style={[styles.dotdot]}>-------------</Text>
            <Text style={[styles.signinwith]}>Or Sign In with</Text>
            <Text style={[styles.dotdot]}>-------------</Text>
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
    height: 163,
    width: 164,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 10,
  },
  createText: {
    fontSize: 24,
    fontWeight: "400",
    alignSelf: "center",
    marginBottom: 10,
  },
  inputView: {
    flexDirection: "row",
    marginHorizontal: 12,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 10,
    height: 50,
    marginTop: 20,
    fontSize: 18,
    borderColor: "lightgrey",
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10.0,
    elevation: 16,
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
    height: 55,
    marginBottom: 15,
    marginTop: 12,
    marginHorizontal: 90,
    borderRadius: 30,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",

    alignItems: "center",
  },
  orYouSign: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signinwith: {
    color: "grey",
    fontSize: 18,
    alignItems: "center",
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
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 70,
    marginBottom: 15,
    borderColor: "white",
    borderRadius: 31,
    borderWidth: 1,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 16,
  },
  Warn: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 8,
    color: "grey",
  },
  signin: {
    fontSize: 20,
    color: "#000000",
  },
});
