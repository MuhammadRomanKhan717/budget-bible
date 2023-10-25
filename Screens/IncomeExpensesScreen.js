import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
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
          <Image
            style={styles.headerImage}
            source={require("../assets/bytesize_menu.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Income & Expenses</Text>
        <TouchableOpacity>
          <Image
            style={styles.headerImage}
            source={require("../assets/carbon_add-alt.png")}
          />
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
    borderWidth: 1,
    marginLeft: 110,
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
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "black",
    width: 335,
    height: 69,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 18,
  },
});
