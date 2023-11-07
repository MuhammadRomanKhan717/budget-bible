import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  shadow,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import AccountDetail from "../Components/AccountDetail";

const AccountsScreen = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView>
        <View style={[styles.headerView]}>
          <View style={{ paddingTop: 12 }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ paddingTop: 14 }}>
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
        <View style={[styles.bottomDetail]}>
          <View style={styles.bottomSavingsDetail}>
            <View>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 12,
                  lineHeight: 18,
                  fontWeight: "500",
                }}
              >
                Total Savings
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: "700",
                }}
              >
                $ 2000
              </Text>
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "grey", // Shadow color
    shadowOffset: {
      width: 0, // Horizontal offset
      height: 5, // Vertical offset
    },
    shadowOpacity: 0.25, // Opacity (0.0 - 1.0)
    shadowRadius: 6, // Radius
    elevation: 5,
  },

  AccountText: {
    fontSize: 14,
    color: "white",
    alignSelf: "center",
    fontWeight: "500",
    lineHeight: 21,
  },
  AccountAmmountText: {
    fontSize: 28,
    color: "white",
    alignSelf: "center",
    fontWeight: "600",
    lineHeight: 42,
  },
  totalAmmountText: {
    fontSize: 12,
    color: "white",
    alignSelf: "center",
    fontWeight: "500",
    lineHeight: 18,
  },
  savingDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 12,
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
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "grey",
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 5,
  },
  bottomSavingsDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  BottomImage: {
    backgroundColor: "#FFD700",
    height: 38,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "grey",
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 5,
  },
});
