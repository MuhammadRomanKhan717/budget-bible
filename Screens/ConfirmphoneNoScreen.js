import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,Image,TextInput,Alert} from 'react-native'
import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
const ConfirmphoneNoScreen = ({navigation}) => {
    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    const et5 = useRef();
  
    const [f1, setF1] = useState("");
    const [f2, setF2] = useState("");
    const [f3, setF3] = useState("");
    const [f4, setF4] = useState("");
    
    const [count, setCount] = useState("");
    useEffect(() => {
      const interval = setInterval(() => {
        if (count == 0) {
          clearInterval(interval);
        } else {
          setCount(count - 1);
        }
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [count]);
    const otpValidate = () => {
        let otp = "1234";
        let enteredOtp = f1 + f2 + f3 + f4;
        if (enteredOtp == otp) {
           navigation.navigate("ChangePasswor2")
        } else {
          Alert.alert("Wrrong OTP ");
        }
      };
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
        Please enter the 4-digit code sent to
        </Text>
        <Text style={styles.subNumberText}> +454441234633</Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          paddingTop: "5%",
          paddingBottom: "3%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={[
            styles.OTPblacks,
            { borderColor: f1.length >= 1 ? "#12121D" : "#12121D1A" },
          ]}
        >
          <TextInput
            ref={et1}
            style={styles.InputContainer}
            keyboardType="numeric"
            maxLength={1}
            value={f1}
            onChangeText={(txt) => {
              setF1(txt);
              if (txt.length >= 1) {
                et2.current.focus();
              }
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.OTPblacks,
            { borderColor: f2.length >= 1 ? "#12121D" : "#12121D1A" },
          ]}
        >
          <TextInput
            ref={et2}
            style={styles.InputContainer}
            keyboardType="numeric"
            maxLength={1}
            value={f2}
            onChangeText={(txt) => {
              setF2(txt);
              if (txt.length >= 1) {
                et3.current.focus();
              } else if (txt.length < 1) {
                et1.current.focus();
              }
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.OTPblacks,
            { borderColor: f3.length >= 1 ? "#12121D" : "#12121D1A" },
          ]}
        >
          <TextInput
            ref={et3}
            style={styles.InputContainer}
            keyboardType="numeric"
            maxLength={1}
            value={f3}
            onChangeText={(txt) => {
              setF3(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et2.current.focus();
              }
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.OTPblacks,
            { borderColor: f4.length >= 1 ? "#12121D" : "#12121D1A" },
          ]}
        >
          <TextInput
            ref={et4}
            style={styles.InputContainer}
            keyboardType="numeric"
            maxLength={1}
            value={f4}
            onChangeText={(txt) => {
              setF4(txt);
              if (txt.length >= 1) {
              
              } else if (txt.length < 1) {
                et3.current.focus();
              }
            }}
          />
        </TouchableOpacity>
     
      </View>
      <View style={{ paddingTop: "10%" }}>
        <TouchableOpacity
          onPress={() => otpValidate()} 
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ConfirmphoneNoScreen

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
        paddingBottom:5
      },
      subNumberText:{
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        paddingBottom:15
      },
      AllertText: {
        height: 44,
        width: 333,
        margingHorizontal: 21,
        textAlign: "center",
        marginLeft: 20,
      },
      Text: {
        lineHeight: 21.72,
        fontSize: 14.48,
        fontWeight: "400",
        textAlign: "center",
      },
      InputContainer: {
        fontSize: 22,
        fontWeight: "600",
        paddingLeft: "35%",
      },
      OTPblacks: {
        justifyContent: "center",
        borderWidth: 0.91,
        borderRadius: 25,
        height: 49.28,
        width: 49.28,
        margin: 10,
      },
      button: {
        backgroundColor: "#12121D",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginHorizontal: 66,
        borderRadius: 41,
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowColor: "grey",
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 5,
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
})