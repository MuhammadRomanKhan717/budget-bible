import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CircularProgressBase } from "react-native-circular-progress-indicator";
const DashboardSCreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-sharp" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Dashboard</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="calendar-blank-outline"
            size={28}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.mainProgressBarView, styles.shadow]}>
        <View style={styles.curcularBarView}>
          <View style={styles.barUpperPercentage}>
            <Ionicons name="ellipsis-horizontal" size={26} color="black" />
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
                <Text style={styles.weeklyDeysText}>S</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys}>
                <Text style={styles.weeklyDeysText}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys}>
                <Text style={styles.weeklyDeysText}>T</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys2}>
                <Text style={styles.weeklyDeysText}>W</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys2}>
                <Text style={styles.weeklyDeysText}>T</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys2}>
                <Text style={styles.weeklyDeysText}>F</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.weeklyDeys2}>
                <Text style={styles.weeklyDeysText}>S</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.Transaction}>
        <Text style={styles.TransactionText}>Transactions</Text>
        <Octicons name="plus-circle" size={24} color="black" />
      </View>
      <View style={{ alignSelf: "center", paddingTop: 30 }}>
        <Text style={styles.getTransactionText}>
          Get Transactions Automatically
        </Text>
      </View>
      <View style={{ paddingTop: 70, paddingLeft: 15 }}>
        <Text style={styles.listText}>List of accounts</Text>
        <Text style={{ fontSize: 12, color: "#A9A9A9", paddingTop: 7 }}>
          No accounts yet
        </Text>
      </View>
      <View style={{ paddingTop: 90 }}>
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
    paddingBottom: 10,
    lineHeight: 30,
    textAlign: "center",
  },
  mainProgressBarView: {
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "grey",
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 5,
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
    height: 18,
    width: 18,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "grey",
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 5,
  },
  weeklyDeysText: {
    alignSelf: "center",
    fontSize: 8,
    textAlign: "center",
    lineHeight: 12,
    fontWeight: "400",
  },
  weeklyDeys2: {
    marginLeft: 10,
    backgroundColor: "#FFD700",
    height: 18,
    width: 18,
    borderRadius: 4,
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "grey",
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
  },
  Transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  TransactionText: {
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 21,
  },
  getTransactionText: {
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
  },
  listText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 21,
  },
  button: {
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 67,
    borderRadius: 41,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "grey",
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    alignItems: "center",
  },
});
