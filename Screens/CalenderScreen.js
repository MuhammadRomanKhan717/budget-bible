import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";

const CalenderScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const renderCustomDay = (date, item) => {
    return (
      <View style={styles.customDay}>
        <Text style={styles.customDayText}>{date.day}</Text>
      </View>
    );
  };

  const renderCustomHeader = (date) => {
    const month = date.toString("MMMM ");
    const year = date.toString("yyyy");

    const Month = () => {
      console.log("Month pressed");
    };

    const Year = () => {
      console.log("Year pressed");
    };

    return (
      <View style={styles.customHeader}>
        <TouchableOpacity onPress={Month} style={styles.monthButton}>
          <View style={styles.monthView}>
            <Text style={styles.monthText}>{month}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={Year} style={styles.yearButton}>
          <View style={styles.yearView}>
            <Text style={styles.yearText}>{year}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCustomYear = (date) => {
    const year = date.toString("yyyy"); // Customize the format as needed
    return (
      <TouchableOpacity>
        <View style={styles.yearView}>
          <Text style={styles.yearText}>{year}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <Image
            style={styles.headerImage}
            source={require("../assets/eva_arrow-ios-back-fill.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Calender</Text>
      </View>
      <View style={styles.container}>
        <Calendar
          style={styles.Calender}
          theme={styles.calendarTheme}
          renderHeader={renderCustomHeader}
          renderDay={renderCustomDay}
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "#FFD700" },
          }}
        />
        <View style={styles.bottomDateView}>
          <Text style={styles.bottomDateText}>September-10-2022</Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.bottomBack}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNext}>
            <Text>Select Date</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalenderScreen;

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
    paddingLeft: 110,
    fontSize: 20,
    fontWeight: "600",
  },
  Calender: {},
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 17,
    marginTop: 90,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "70%",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  bottomDateView: {
    marginTop: 32,
    paddingRight: 100,
  },
  bottomDateText: {
    fontWeight: "700",
    fontSize: 18,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 35,
    paddingRight: 12,
    marginHorizontal: 17,
  },
  bottomBack: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 90,
    borderRadius: 31,
    borderWidth: 1,
    borderColor: "#FFD700",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  bottomNext: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    width: 180,
    backgroundColor: "#FFD700",
    borderRadius: 31,
    borderWidth: 1,
    marginLeft: 80,
    borderColor: "#FFD700",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  customDay: {
    justifyContent: "center",
    alignItems: "center",
  },
  customDayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  customHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  monthButton: {
    marginLeft: 20,
  },
  monthView: {
    borderWidth: 0.3,
    borderRadius: 6,
    height: 35.32,
    width: 120.16,
    justifyContent: "center",
    alignItems: "center",
  },
  monthText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  yearButton: {
    marginLeft: 15,
    marginRight: 20,
  },
  yearView: {
    borderWidth: 0.3,
    borderRadius: 6,
    height: 35.32,
    width: 72.3,
    justifyContent: "center",
    alignItems: "center",
  },
  yearText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  calendarTheme: {
    monthTextColor: "black",
    textMonthFontSize: 24,
    textMonthFontWeight: "700",
    arrowColor: "black",
    arrowWidth: "40%",
  },
});
