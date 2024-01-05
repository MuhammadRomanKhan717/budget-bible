import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Sharing from "expo-sharing";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
const onSharePress = async () => {
  try {
    await Sharing.shareAsync("");
  } catch (error) {
    console.error("Sharing failed with error: ", error);
  }
};
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
              <FontAwesome5 name="question-circle" size={24} color="black" />
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
              <FontAwesome name="support" size={24} color="black" />
              <Text style={{ paddingLeft: 12, paddingTop: 3 }}>
                Talk to Terrance
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 12, paddingTop: 20 }}>
          <TouchableOpacity onPress={onSharePress}>
            <View style={{ flexDirection: "row" }}>
              <Feather name="share-2" size={24} color="black" />
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
              <Ionicons name="md-settings-outline" size={24} color="black" />
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
