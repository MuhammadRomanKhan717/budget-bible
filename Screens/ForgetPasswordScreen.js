import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  phoneInput
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { Entypo } from "@expo/vector-icons";
import { useState,useRef } from "react";
import PhoneInput from "react-native-phone-number-input";

const ForgetPasswordScreen = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
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
      <>
    
      <View style={styles.container}>
        <SafeAreaView style={styles.wrapper}>
          {showMessage && (
            <View style={styles.message}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )}
          <PhoneInput 
          style={styles.phoneInput}
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
         
        </SafeAreaView>
      </View>
    </>
      </View>
      <View style={{ paddingTop: "25%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ConfirmPhoneNumber")}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Confirm</Text>
        </TouchableOpacity>
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
    paddingLeft: "15%",
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
    paddingBottom:15
  },
  pickerView: {
    alignItems: "center",
  },
  container:{

  },
  wrapper:{
   
  },
   button: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 56.43,
    marginHorizontal: 55,
    borderRadius: 41,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "white",
    alignItems: "center",
    lineHeight: 18,
    
  },
});
