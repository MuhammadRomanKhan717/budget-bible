import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const TalkToTerrance = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("../assets/bytesize_menu.png")} />
        </TouchableOpacity>
        <View style={{ paddingLeft: 50 }}>
          <TouchableOpacity style={styles.HeaderImage2}>
            <Image source={require("../assets/Group6905.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottonsView}>
        <View style={{ paddingBottom: 14 }}>
          <TouchableOpacity style={styles.bottons}>
            <Text style={{ color: "white" }}>Schedule 1 X 1 Session</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 14 }}>
          <TouchableOpacity style={styles.bottons}>
            <Text style={{ color: "white" }}>Join a team Session</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 14 }}>
          <TouchableOpacity style={styles.bottons}>
            <Text style={{ color: "white" }}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TalkToTerrance;

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  HeaderImage2: {
    paddingLeft: 50,
  },
  bottonsView: {
    paddingTop: 40,
  },
  bottons: {
    borderWidth: 1,
    borderRadius: 10,
    height: 80,
    width: "90%",
    marginHorizontal: 10,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
