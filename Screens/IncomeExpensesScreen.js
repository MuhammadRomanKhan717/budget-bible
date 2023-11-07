import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import ExpensesComponent from "../Components/ExpensesComponent";

const IncomeExpensesScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={[
          styles.bottomView,
          {
            position: "absolute",
            bottom: 0,
            right: 5,
            top: 235,
            zIndex: 99,
          },
        ]}
      >
        <TouchableOpacity
          style={[styles.bottomNext]}
          onPress={() => navigation.navigate("payPeriod")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu-sharp" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Income & Expenses</Text>
        <TouchableOpacity>
          <Octicons name="plus-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.ModifyView}>
        <Text style={{ fontWeight: "400", color: "white" }}>Modify</Text>
      </View>
      <View style={{ paddingBottom: 10, paddingTop: 22 }}>
        <ExpensesComponent />
      </View>
    </SafeAreaView>
  );
};

export default IncomeExpensesScreen;

const styles = StyleSheet.create({
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
    borderRadius: 31,
    marginLeft: 110,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
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
  ModifyView: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "black",
    width: 335,
    height: 69,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
