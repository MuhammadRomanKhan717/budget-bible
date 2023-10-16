import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  shadow,
} from "react-native";
import React from "react";
import AccountDetail from "../Components/AccountDetail";

const AccountsScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={[styles.headerView]}>
          <View style={{ paddingTop: 12 }}>
            <Image
              style={{ height: 28, width: 28 }}
              source={require("../assets/eva_arrow-back-outlineWhiteColor.png")}
            />
          </View>
          <View>
            <Text style={styles.AccountText}>ACCOUNTS</Text>
          </View>
          <View style={{ paddingTop: 12 }}>
            <Text style={styles.AccountAmmountText}>$ 27,555</Text>
          </View>
          <View style={{ paddingTop: 14 }}>
            <Text style={styles.totalAmmountText}>TOTAL NET WORTH</Text>
          </View>
        </View>
        <View style={{ paddingBottom: 42 }}>
          <AccountDetail />
        </View>
        <View style={[styles.bottomDetail, shadow]}>
          <View style={styles.bottomSavingsDetail}>
            <View>
              <Text style={{ fontSize: 12, paddingBottom: 7 }}>
                Total Savings
              </Text>
              <Text style={{ fontWeight: "700", fontSize: 16 }}>$ 2000</Text>
            </View>
            <TouchableOpacity style={styles.shadow}>
              <View style={styles.BottomImage}>
                <Image source={require("../assets/clarity_wallet-line.png")} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: "black",
    width: 375,
    height: 266,
    borderWidth: 1,
    borderRadius: 10,
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
  AccountText: {
    fontSize: 16,
    color: "white",
    alignSelf: "center",
    fontWeight: "600",
  },
  AccountAmmountText: {
    fontSize: 28,
    color: "white",
    alignSelf: "center",
    fontWeight: "600",
  },
  totalAmmountText: {
    fontSize: 14,
    color: "white",
    alignSelf: "center",
    fontWeight: "500",
  },
  savingDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 12,
  },
  AmountsavingDetail: {
    borderWidth: 0.7,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    height: 45,
  },
  innerAmountText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
    paddingRight: 1,
  },
  bottomDetail: {
    height: 86,
    justifyContent: "center",
    borderWidth: 0.7,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  bottomSavingsDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,

    // alignContent: "center",
  },
  BottomImage: {
    backgroundColor: "#FFD700",
    height: 38,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
