import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Navigation from './Navigation'

const PasswordChangedScreen = ({navigation}) => {
  return (
    <SafeAreaView>
        <View style={{alignItems:"center",marginTop:"2%"}}>
   <Text style={{fontSize:18,fontWeight:"600",lineHeight:27}}>Password Changed</Text>
    </View>
    <View style={{alignItems:"center",marginTop:"50%"}}>
        <Image source={require("../assets/checked1.png")}/>
        
    </View>
    <View style={{alignItems:"center",marginTop:"7%"}}><Text> Verified!</Text></View>
    <View style={{ paddingTop: "40%" }}>
        <TouchableOpacity
           onPress={() => navigation.navigate("login")}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Go to login page</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PasswordChangedScreen

const styles = StyleSheet.create({
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