import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import React from "react";
import React, { useState } from "react";
import Swiper from "react-native-swiper";
const OnboardingScreen = ({ navigation }) => {
  const [nextScreen, setNextScreen] = useState(0);
  // console.log("screen", nextScreen);
  const nextButtons = () => {
    if (nextScreen >= 0 && nextScreen < 3) {
      setNextScreen(() => nextScreen + 1);
    } else {
      navigation.navigate("login");
    }
  };
  return (
    <Swiper
      index={nextScreen}
      onIndexChanged={(i) => setNextScreen(i)}
      style={styles.wrapper}
    >
      <View style={styles.mainView}>
        <Image style={styles.Image} source={require("../assets/undraw.png")} />
        <Text style={styles.title}>Manage Your Money between paychecks</Text>
        <Text style={styles.subtitle}>
          Unlike traditional budgeting apps, The Budget Bible helps you manage
          money between paychecks
        </Text>

        <TouchableOpacity onPress={nextButtons} style={[styles.button]}>
          <Text style={[styles.buttonText]}>Start Your Free Trial</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Image
          style={styles.Image}
          source={require("../assets/undraw_personal_finance_tqcd(1).png")}
        />
        <Text style={styles.title}>Discover your personal allowance</Text>
        <Text style={styles.subtitle}>
          Find out excatly how much you can spend ecah pay period
        </Text>

        <TouchableOpacity onPress={nextButtons} style={[styles.button]}>
          <Text style={[styles.buttonText]}>Start Your Free Trial</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Image
          style={styles.Image}
          source={require("../assets/undraw_savings_re_eq4w.png")}
        />
        <Text style={styles.title}>Grow your savings faster than ever</Text>
        <Text style={styles.subtitle}>
          After your expenses are taken care of and you’ve paid yourself, pour
          the rest into your savings and watch it grow
        </Text>

        <TouchableOpacity onPress={nextButtons} style={[styles.button]}>
          <Text style={[styles.buttonText]}>Start Your Free Trial</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Image
          style={styles.Image}
          source={require("../assets/undraw_online_messaging_re_qft3.png")}
        />
        <Text style={styles.title}>Talk to Terrance</Text>
        <Text style={styles.subtitle}>
          Schedule a 1x1 session to discuss your budget
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("login")}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Start Your Free Trial</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  Image: {
    marginTop: 120,
    height: 242,
    width: 217,
    alignSelf: "center",
    marginBottom: 29,
  },

  title: {
    fontSize: 30,
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 39,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    alignItems: "center",
    marginBottom: 100,
  },
  button: {
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 7,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#0000",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    alignItems: "center",
  },
});
