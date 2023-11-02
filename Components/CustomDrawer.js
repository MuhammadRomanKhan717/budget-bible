import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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
        <View style={{ justifyContent: "center", paddingTop: 70 }}>
          <Image
            source={require("../assets/Group6881.png")}
            style={styles.headerImage}
          />
        </View>
      </View>

      <DrawerContentScrollView {...props} style={{ paddingTop: -35 }}>
        <DrawerItemList {...props} />
        <View style={{ backgroundColor: "#D2D2D2", height: 1, width: 276 }} />
        <View style={{ paddingLeft: 12, paddingTop: 20 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("FAQ")}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/radix-icons_question-mark-circled.png")}
              />
              <Text style={{ paddingLeft: 12, paddingTop: 3 }}>
                Frequently Asked Questions
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 12, paddingTop: 20 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Terrance")}
          >
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../assets/system-uicons_support.png")} />
              <Text style={{ paddingLeft: 12, paddingTop: 3 }}>
                Talk to Terrance
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 12, paddingTop: 20 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("share")}>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../assets/carbon_share.png")} />
              <Text style={{ paddingLeft: 12, paddingTop: 3 }}>Share</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 12, paddingTop: 20 }}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../assets/Maskgroup.png")} />
              <Text style={{ paddingLeft: 12, paddingTop: 3 }}>
                Order The Budget Bibble
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 12, paddingTop: 20 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("setting")}
          >
            <View style={{ flexDirection: "row" }}>
              <Image source={require("../assets/cil_settings.png")} />
              <Text style={{ paddingLeft: 12, paddingTop: 3 }}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
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
