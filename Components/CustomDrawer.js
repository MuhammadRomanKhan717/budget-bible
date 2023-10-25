import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "20%" }}>
        <View style={{ justifyContent: "center", paddingTop: 77 }}>
          <Image
            source={require("../assets/Group6881.png")}
            style={styles.headerImage}
          />
        </View>
      </View>

      <DrawerContentScrollView {...props} style={{ paddingTop: -35 }}>
        {/* 
      
     
     
        <View style={{ paddingLeft: 12, paddingTop: 20 }}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ paddingLeft: 12, paddingTop: 3 }}>Goals</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        {/* <View style={{ backgroundColor: "#D2D2D2", height: 1, width: 276 }} /> */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  headerImage: {
    alignSelf: "center",
  },
  ProfileDrawer1: {
    paddingTop: 42,
    paddingHorizontal: 10,
  },
  ProfileDrawer: {
    justifyContent: "space-between",
    flexDirection: "row",
    height: 60,
    width: 256,
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
