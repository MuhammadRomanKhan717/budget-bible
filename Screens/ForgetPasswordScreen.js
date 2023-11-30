import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

const ForgetPasswordScreen = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("allocateTourFunds")}
        >
          <Entypo name="chevron-left" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Confirm phone number</Text>
      </View>
      <View style={styles.imageView}>
        <Image source={require("../assets/bro.png")} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.VerifyText}>Verify phone number</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.subVerifyText}>
          Enter your mobile phone number & we’ll send you a code
        </Text>
      </View>
      <View style={styles.pickerView}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
            width: "80%",
            height: 60,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowColor: "grey",
            shadowOpacity: 0.22,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 20,
            }}
          >
            {countryCode}
          </Text>
        </TouchableOpacity>

        <CountryPicker
          show={show}
          // when picker button press you will get the country object with dial code
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  headerView: {
    paddingLeft: 8,
    flexDirection: "row",
  },

  headerText: {
    paddingLeft: 50,
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 27,
    textAlign: "center",
  },
  imageView: {
    alignItems: "center",
    margin: 30,
  },
  VerifyText: {
    paddingTop: 20,
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 32,
  },
  subVerifyText: {
    paddingTop: 10,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    letterSpacing: -1,
  },
  pickerView: {
    alignItems: "center",
  },
});
