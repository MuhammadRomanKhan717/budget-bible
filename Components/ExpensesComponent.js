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
    borderWidth: 1,
    borderRadius: 10,
    width: 335,
    height: 93,
    paddingTop: 12,
    justifyContent: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    paddingLeft: 12,
    flexDirection: "row",
  },
  imageView: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
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
