import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const AddTransactionsScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("expenses")}>
          <Image
            style={styles.headerImage}
            source={require("../assets/eva_arrow-back-outline.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Transactions</Text>
      </View>

      <View style={[styles.buttonView]}>
        <TouchableOpacity
          onPress={() => navigation.navigate("setting")}
          style={[styles.buttonExpense]}
        >
          <Text style={[styles.buttonExpenseText]}>Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("setting")}
          style={[styles.buttonIncome]}
        >
          <Text style={[styles.buttonIncomeText]}>Income</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.InputView]}>
        <TouchableOpacity style={styles.$View}>
          <Text style={{ fontSize: 20, color: "#FFD700" }}>$</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AmountView}>
          <TextInput
            placeholder=" Amount"
            keyboardType="decimal-pad"
            style={styles.AmountInput}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.InputView]}>
        <TouchableOpacity style={styles.$View}>
          <Image source={require("../assets/Vector.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.AmountView}>
          <TextInput
            placeholder=" Description"
            keyboardType="default"
            style={styles.AmountInput}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.DatedView}>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>Feb 9,2020</Text>
      </View>
      <View style={[styles.AddButtonView]}>
        <TouchableOpacity style={styles.buttonADD}>
          <Text style={[styles.buttonExpenseText]}>ADD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddTransactionsScreen;

const styles = StyleSheet.create({
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
  buttonView: {
    flexDirection: "row",
    paddingTop: 25,
    paddingBottom: 25,
  },
  buttonExpense: {
    paddingLeft: 12,
    paddingRight: 12,
    marginHorizontal: 47,
    borderRadius: 41,
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "30%",
  },
  buttonExpenseText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  buttonIncome: {
    paddingLeft: 12,
    paddingRight: 12,
    borderWidth: 1,
    width: "30%",
    borderRadius: 41,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  buttonIncomeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  InputView: {
    // paddingRight: 30,
    flexDirection: "row",
    paddingTop: 15,
    justifyContent: "space-evenly",
  },
  $View: {
    borderWidth: 0.2,
    width: "20%",
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  AmountView: {
    paddingLeft: 12,
    borderWidth: 0.2,
    width: "65%",
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    height: 50,
  },
  AmountInput: {
    height: 40,
    width: 225,
  },
  DatedView: {
    paddingTop: 30,
    alignSelf: "center",
  },
  AddButtonView: {
    paddingTop: 25,
  },
  buttonADD: {
    marginHorizontal: 117,
    borderRadius: 41,
    backgroundColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "35%",
  },
});
