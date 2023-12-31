import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const PayPeriodScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View
        style={[
          styles.bottomView,
          { position: "absolute", bottom: 50, right: 0, right: 0, zIndex: 99 },
        ]}
      >
        <TouchableOpacity
          style={[styles.bottomNext]}
          onPress={() => navigation.navigate("mainScreen")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("allocateTourFunds")}
        >
          <Image
            style={styles.headerImage}
            source={require("../assets/eva_arrow-ios-back-fill.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pay Period</Text>
      </View>

      <View style={styles.topComponent}>
        <View style={styles.dateTextView}>
          <Text style={styles.DateText}>From: 12/12/2022</Text>
          <Text style={styles.DateText}>To: 19/12/2022</Text>
        </View>
        <View style={styles.IOView}>
          <View style={{ flexDirection: "colmn", paddingTop: 12 }}>
            <Text style={styles.IOText}>Income</Text>
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <Text style={{ color: "#FFD700", fontSize: 18 }}>$</Text>
              <Text style={{ fontSize: 18 }}>1000</Text>
            </View>
          </View>

          <View style={{ flexDirection: "colmn", paddingTop: 12 }}>
            <Text style={styles.IOText}>Expense</Text>
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <Text style={{ color: "#FFD700", fontSize: 18 }}>$</Text>
              <Text style={{ fontSize: 18 }}>525</Text>
            </View>
          </View>

          <View style={{ flexDirection: "colmn", paddingTop: 12 }}>
            <Text style={styles.IOText}>Balance</Text>
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <Text style={{ color: "#FFD700", fontSize: 18 }}>$</Text>
              <Text style={{ fontSize: 18 }}>475</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.BottomComponent}>
        <View style={styles.dateTextView}>
          <Text style={styles.DateText}>Expense</Text>
          <Text style={styles.DateText}>Due Date</Text>
          <Text style={styles.DateText}>Amount</Text>
        </View>
        <View style={styles.IOView2}>
          <View style={styles.Expense}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/Group6867.png")} />
              <Text>Grocery</Text>
            </View>
            <Text style={{ marginRight: 45 }}>12/12</Text>
            <Text>$50</Text>
          </View>
          <View style={styles.Expense}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/Group6868.png")} />
              <Text>Gas</Text>
            </View>
            <Text style={{ marginRight: 15 }}>12/12</Text>
            <Text>$50</Text>
          </View>
          <View style={styles.Expense}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/Group6869.png")} />
              <Text>Internet</Text>
            </View>
            <Text style={{ marginRight: 40 }}>12/12</Text>
            <Text>$50</Text>
          </View>
          <View style={styles.Expense}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/Group6870.png")} />
              <Text>Electricity</Text>
            </View>
            <Text style={{ marginRight: 50 }}>12/12</Text>
            <Text>$50</Text>
          </View>
          <View style={styles.Expense}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/Group6871.png")} />
              <Text>Car Insurance</Text>
            </View>

            <Text style={{ marginRight: 75 }}>12/12</Text>
            <Text>$50</Text>
          </View>
          <View style={styles.Expense}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("../assets/Group6872.png")} />
              <Text>Phone</Text>
            </View>
            <Text style={{ marginRight: 22 }}>12/12</Text>
            <Text>$50</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PayPeriodScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 35,
    paddingRight: 15,
  },
  bottomNext: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 90,
    marginTop: 45,
    backgroundColor: "#FFD700",
    borderRadius: 41,
    marginLeft: 110,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 5,
  },
  headerView: {
    paddingLeft: 8,
    flexDirection: "row",
    paddingTop: 22,
  },
  headerImage: {
    height: 32,
    width: 29,
  },

  headerText: {
    paddingLeft: 85,
    fontSize: 20,
    fontWeight: "500",
  },
  topComponent: {
    borderRadius: 10,
    backgroundColor: "white",
    height: 127,
    width: 335,
    alignSelf: "center",
    marginTop: 43,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 5,
  },
  dateTextView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: 335,
    height: 39,
    alignSelf: "center",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  BottomComponent: {
    borderRadius: 10,
    backgroundColor: "white",
    height: 348,
    width: 335,
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  DateText: {
    color: "white",
    fontSize: 14,
  },
  Expense: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  IOView: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,

    height: 88,
    marginHorizontal: 15,
    flexDirection: "row",

    justifyContent: "space-between",
  },

  IOText: {
    fontSize: 18,
  },
});
