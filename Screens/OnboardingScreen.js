import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
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
    <TouchableOpacity
      activeOpacity={1}
      style={styles.mainView}
      onPress={() => setNextScreen(nextScreen + 1)}
    >
      <Swiper
        index={nextScreen}
        onIndexChanged={(i) => setNextScreen(i)}
        style={styles.wrapper}
      >
        <View style={styles.ComponentView}>
          <View style={styles.ImageView}>
            <Image
              style={styles.Image}
              source={require("../assets/undraw.png")}
            />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>
              Manage Your Money between paychecks
            </Text>
          </View>
          <View style={styles.subtitleView}>
            <Text style={styles.subtitle}>
              Unlike traditional budgeting apps, The Budget Bible helps you
              manage money between paychecks
            </Text>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              style={[styles.button]}
            >
              <Text style={[styles.buttonText]}>Start Your Free Trial</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ComponentView}>
          <View style={styles.ImageView}>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_personal_finance_tqcd(1).png")}
            />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>Discover your personal allowance</Text>
          </View>
          <View style={styles.subtitleView}>
            <Text style={styles.subtitle}>
              Find out excatly how much you can spend ecah pay period
            </Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              style={[styles.button]}
            >
              <Text style={[styles.buttonText]}>Start Your Free Trial</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ComponentView}>
          <View style={styles.ImageView}>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_savings_re_eq4w.png")}
            />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>Grow your savings faster than ever</Text>
          </View>
          <View style={styles.subtitleView}>
            <Text style={styles.subtitle}>
              After your expenses are taken care of and you’ve paid yourself,
              pour the rest into your savings and watch it grow
            </Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              style={[styles.button]}
            >
              <Text style={[styles.buttonText]}>Start Your Free Trial</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ComponentView}>
          <View style={styles.ImageView}>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_online_messaging_re_qft3.png")}
            />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>Talk to Terrance</Text>
          </View>
          <View style={styles.subtitleView}>
            <Text style={styles.subtitle}>
              Schedule a 1x1 session to discuss your budget
            </Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              style={[styles.button]}
            >
              <Text style={[styles.buttonText]}>Start Your Free Trial</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </TouchableOpacity>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  ComponentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageView: {
    height: 242,
    width: 237,
    // backgroundColor: "red",
  },
  Image: {
    height: 210,
    width: 230,
    alignSelf: "center",
    // marginBottom: 20,
  },
  titleView: {
    marginTop: 1,
    marginHorizontal: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 36,
    marginBottom: 5,
    textAlign: "center",
  },
  subtitleView: {
    marginHorizontal: 56,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 50,
    lineHeight: 21,
    textAlign: "center",
  },
  buttonView: {
    height: "10%",
    width: "90%",
    alignContent: "center",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#000000",
    height: 50,
    marginHorizontal: 7,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#0000",
    marginTop: 60,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    alignSelf: "center",
  },
});
