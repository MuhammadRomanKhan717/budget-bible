import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AccountDetail = () => {
  return (
    <View>
      <View style={styles.savingDetail}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 10,
            textAlign: "center",
            lineHeight: 15,
            fontWeight: "500",
          }}
        >
          Pay Day
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 10,
            textAlign: "center",
            lineHeight: 15,
            fontWeight: "500",
            marginLeft: 28,
          }}
        >
          Income
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 10,
            textAlign: "center",
            lineHeight: 15,
            fontWeight: "500",
            marginLeft: 29,
          }}
        >
          Expenses
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 10,
            textAlign: "center",
            lineHeight: 15,
            fontWeight: "500",
            marginLeft: 18,
          }}
        >
          This Week
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 10,
            textAlign: "center",
            lineHeight: 15,
            fontWeight: "500",
            marginLeft: 12,
          }}
        >
          Total Savings
        </Text>
      </View>
      <View style={styles.AmountsavingDetail}>
        <View style={styles.innerAmountText}>
          <View>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 10,
                textAlign: "center",
                lineHeight: 15,
                fontWeight: "500",
              }}
            >
              12-12-22
            </Text>
          </View>
          <View style={{ width: 1, height: 18, backgroundColor: "black" }} />
          <View>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 10,
                textAlign: "center",
                lineHeight: 15,
                fontWeight: "500",
              }}
            >
              $1000
            </Text>
          </View>
          <View style={{ width: 1, height: 18, backgroundColor: "black" }} />
          <View>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 10,
                textAlign: "center",
                lineHeight: 15,
                fontWeight: "500",
              }}
            >
              $500
            </Text>
          </View>
          <View style={{ width: 1, height: 18, backgroundColor: "black" }} />
          <View>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 10,
                textAlign: "center",
                lineHeight: 15,
                fontWeight: "500",
              }}
            >
              $200
            </Text>
          </View>
          <View style={{ width: 1, height: 18, backgroundColor: "black" }} />
          <View>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 10,
                lineHeight: 15,
                fontWeight: "500",
              }}
            >
              $500
            </Text>
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
    // justifyContent: "",
    marginLeft: 25,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5,
  },
  AmountsavingDetail: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    height: 45,
    paddingRight: 16,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "grey",
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 5,
  },
  innerAmountText: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    // paddingRight: 11,
  },
});
