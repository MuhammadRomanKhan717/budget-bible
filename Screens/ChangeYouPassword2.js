import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,Image,TextInput,Alert} from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
const ChangeYouPassword2 = () => {
    const [f1, setF1] = useState("");
        const [f2, setF2] = useState("");
    const PasswordValidate = () => {
        
        let password = f1;
        let conformPassword = f2;
        if (conformPassword == password) {
            navigation.navigate("changedpassword")
        } else {
          Alert.alert("Password not maching ");
        }
      };
      const navigation = useNavigation();
      const goBack = () => {
        navigation.goBack();
      };
  return (
    <SafeAreaView>
            <View style={styles.headerView}>
        <TouchableOpacity
             onPress={goBack} 
        >
          <Entypo name="chevron-left" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Confirm phone number</Text>
      </View>
      <View style={styles.imageView}>
        <Image source={require("../assets/cuate.png")} />
      </View>
      <View style={styles.inputView}>
            <Feather name="lock" size={24} color="black" />
            <TextInput
              placeholder="Current Password"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={false}
              keyboardType="numbers-and-punctuation"
            />
          </View>
          <View style={styles.inputView}>
            <Feather name="lock" size={24} color="black" />
            <TextInput
              placeholder="New Password"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={false}
              keyboardType="numbers-and-punctuation"
              maxLength={12}
              onChangeText={(txt) => {
                setF1(txt);
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Feather name="lock" size={24} color="black" />
            <TextInput
              placeholder="Re-enter the new password"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={false}
              keyboardType="numbers-and-punctuation"
              maxLength={12}
              onChangeText={(txt) => {
                setF2(txt);
              }}
            />
          </View>
          <View style={{ paddingTop: "10%" }}>
        <TouchableOpacity
          onPress={() => PasswordValidate()}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ChangeYouPassword2

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
      inputView: {
        flexDirection: "row",
        marginHorizontal: 15,
        borderRadius: 15,
        paddingLeft: 10,
        height: 50,
        marginTop: 20,
        borderColor: "lightgrey",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
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