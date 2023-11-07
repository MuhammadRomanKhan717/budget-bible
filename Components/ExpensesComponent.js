import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const ExpensesComponent = () => {
  return (
    <SafeAreaView>
      <View style={styles.cardView}>
        <View style={styles.imageView}>
          <TouchableOpacity style={{}}>
            <Image source={require("../assets/noto_money-bag.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.cardDetial}>
          <View>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>Paycheck</Text>
            <Text style={{ fontSize: 12 }}>Income</Text>
          </View>
          <View style={{ paddingLeft: 25 }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{ color: "#FFD700", fontSize: 14, fontWeight: "700" }}
              >
                ${" "}
              </Text>
              <Text style={{}}>1000</Text>
            </View>
            <Text style={{ fontSize: 12 }}>Every month</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExpensesComponent;

const styles = StyleSheet.create({
  cardView: {
    borderRadius: 10,
    width: 335,
    height: 93,
    paddingTop: 12,
    justifyContent: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingLeft: 12,
    flexDirection: "row",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  imageView: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  cardDetial: {
    // backgroundColor: "grey",
    height: 70,
    width: 250,
    flexDirection: "row",
    justifyContent: "space-around",

    // paddingLeft: 15,
    paddingRight: 19,
    paddingTop: 12,
  },
});
