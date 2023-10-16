import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { CircularProgressBase } from "react-native-circular-progress-indicator";
const DashboardSCreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.headerImage}
            source={require("../assets/bytesize_menu.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Dashboard</Text>
        <TouchableOpacity>
          <Image
            style={styles.headerImage}
            source={require("../assets/uil_schedule.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.mainProgressBarView, styles.shadow]}>
        <View style={styles.curcularBarView}>
          <View style={styles.barUpperPercentage}>
            <Image
              source={require("../assets/carbon_overflow-menu-horizontal.png")}
            />
          </View>
          <CircularProgressBase
            value={120}
            radius={100}
            duration={2000}
            activeStrokeColor={"#000000"}
            inActiveStrokeColor={"#FFD7004A"}
            progressValueColor={""}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={15}
            activeStrokeWidth={20}
            maxValue={200}
          >
            <Image source={require("../assets/noto_money-bag.png")} />
            <View style={{ flexDirection: "row", paddingBottom: 5 }}>
              <Text style={{ color: "#FFD700" }}>$ </Text>
              <Text>1000</Text>
            </View>
            <Text style={{ fontWeight: "600", fontSize: 12 }}>
              Personal Allowance
            </Text>
          </CircularProgressBase>
          <View style={styles.barLowerPercentage}>
            <Text style={{ alignSelf: "center", paddingBottom: 12 }}>
              Feb 6-12
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.weeklyDeys}>
                <Text style={{ alignSelf: "center" }}>S</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys}>
                <Text style={{ alignSelf: "center" }}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys}>
                <Text style={{ alignSelf: "center" }}>T</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys2}>
                <Text style={{ alignSelf: "center" }}>W</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys2}>
                <Text style={{ alignSelf: "center" }}>T</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys2}>
                <Text style={{ alignSelf: "center" }}>F</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys2}>
                <Text style={{ alignSelf: "center" }}>S</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Transaction}>
        <Text>Transactions</Text>
        <Image source={require("../assets/carbon_add-alt.png")} />
      </View>
      <View style={{ alignSelf: "center", paddingTop: 20 }}>
        <Text>Get Transactions Automatically</Text>
      </View>
      <View style={{ paddingTop: 70, paddingLeft: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          List of accounts
        </Text>
        <Text style={{ fontSize: 12, color: "#A9A9A9", paddingTop: 7 }}>
          No accounts yet
        </Text>
      </View>
      <View style={{ paddingTop: 60 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("setting")}
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Link Accounts</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DashboardSCreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingTop: 10,
  },
  headerImage: {
    height: 26,
    width: 26,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    paddingBottom: 30,
  },
  mainProgressBarView: {
    borderWidth: 0.19,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingBottom: 10,
  },
  shadow: {
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 5, // Horizontal offset
      height: 8, // Vertical offset
    },
    shadowOpacity: 0.5, // Opacity (0.0 - 1.0)
    shadowRadius: 6, // Radius
    elevation: 4, // Android elevation (for shadow)
  },
  curcularBarView: {
    alignItems: "center",
  },
  barUpperPercentage: {
    paddingLeft: 290,
    top: 22,
    paddingRight: 10,
  },

  barLowerPercentage: {
    paddingTop: 12,
    paddingBottom: 16,
  },
  weeklyDeys: {
    marginLeft: 10,
    // paddingRight: 10,
    height: 18,
    width: 18,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
  },
  weeklyDeys2: {
    marginLeft: 10,
    backgroundColor: "#FFD700",
    height: 18,
    width: 18,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
  },
  Transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 67,
    borderRadius: 41,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    alignItems: "center",
  },
});
