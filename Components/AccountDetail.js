import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AccountDetail = () => {
  return (
    <View>
      <View style={styles.savingDetail}>
        <Text style={{ fontSize: 10, paddingLeft: 25 }}>Pay Day</Text>
        <Text style={{ fontSize: 10, paddingLeft: 15 }}>Income</Text>
        <Text style={{ fontSize: 10, paddingLeft: 10 }}>Expenses</Text>
        <Text style={{ fontSize: 10, paddingLeft: 15 }}>This Week</Text>
        <Text style={{ fontSize: 10, paddingLeft: 15 }}>Total Savings</Text>
      </View>
      <View style={styles.AmountsavingDetail}>
        <View style={styles.innerAmountText}>
          <View>
            <Text style={{ fontSize: 10 }}>12-12-22</Text>
          </View>
          <View style={{ width: 2, height: 30, backgroundColor: "black" }} />
          <View>
            <Text style={{ fontSize: 10 }}>$1000</Text>
          </View>
          <View style={{ width: 2, height: 30, backgroundColor: "black" }} />
          <View>
            <Text style={{ fontSize: 10 }}>$500</Text>
          </View>
          <View style={{ width: 2, height: 30, backgroundColor: "black" }} />
          <View>
            <Text style={{ fontSize: 10 }}>$200</Text>
          </View>
          <View style={{ width: 2, height: 30, backgroundColor: "black" }} />
          <View>
            <Text style={{ fontSize: 10 }}>$500</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountDetail;

const styles = StyleSheet.create({
  savingDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,

    paddingTop: 22,
    paddingBottom: 12,
    paddingLeft: 5,
  },
  AmountsavingDetail: {
    borderWidth: 0.7,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    height: 45,
    paddingRight: 16,
  },
  innerAmountText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
    paddingRight: 1,
  },
});
