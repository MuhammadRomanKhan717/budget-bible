import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { CircularProgressBase } from "react-native-circular-progress-indicator";
const AllocateYourFriend = ({ props }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ color: "#F9F9F9" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.headerImage}
            source={require("../assets/bytesize_menu.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Allocate your funds</Text>
        <TouchableOpacity>
          <Image
            style={styles.headerImage}
            source={require("../assets/uil_schedule.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.curcularBarView}>
        <View style={styles.barUpperPercentage}>
          <Text>60% </Text>
          <Text>Personal </Text>
          <Text>Allowance</Text>
        </View>
        <CircularProgressBase
          value={120}
          radius={100}
          duration={2000}
          activeStrokeColor={"#000000"}
          inActiveStrokeColor={"#FFD7004A"}
          progressValueColor={""}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={15}
          activeStrokeWidth={20}
          maxValue={200}
        >
          <Image source={require("../assets/noto_money-bag.png")} />
          <Text>1000</Text>
          <Text style={{ fontWeight: "600", fontSize: 12 }}>Remaining</Text>
        </CircularProgressBase>
        <View style={styles.barLowerPercentage}>
          <Text>40% </Text>
          <Text>Personal </Text>
          <Text>Allowance</Text>
        </View>
      </View>
      <View style={styles.barPercentageResultView}>
        <View style={styles.barPercentageResult}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#FFD700" }}>
              $
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#fff" }}>
              1000
            </Text>
          </View>
          <Text style={{ color: "#fff", fontSize: 8.31 }}>
            Personal Allowance
          </Text>
        </View>
        <View style={styles.barPercentageResult}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#FFD700" }}>
              $
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#fff" }}>
              1000
            </Text>
          </View>
          <Text style={{ color: "#fff", fontSize: 8.31 }}>Savings</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 27.67, alignSelf: "center" }}>
          A Look Ahead
        </Text>
      </View>
      <View
        style={{
          height: 80,
          width: 300,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 18, justifyContent: "center" }}>
          If you personal allowance stays at 40% and your remain the same, your
          yearly snapshot is shown below
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            paddingLeft: 10,
            paddingBottom: 5,
          }}
        >
          Personal Allowance: $6000
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            paddingLeft: 10,
            paddingBottom: 5,
          }}
        >
          Savings: $9000
        </Text>
        <TouchableOpacity>
          <Image source={require("../assets/iwwa_information.png")} />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            paddingLeft: 10,
            paddingBottom: 5,
          }}
        >
          Recap:
        </Text>

        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
            }}
          >
            You have a personal allowance that you
          </Text>
        </View>
      </View>
      <View
        style={{
          fontSize: 14,
          fontWeight: "600",
          paddingLeft: 10,
        }}
      >
        <Text>can spend as freely as you’d like , your expenses</Text>
        <Text> are taken care of and your net worth is growing</Text>
        <Text>rapidly!</Text>
      </View>
    </SafeAreaView>
  );
};

export default AllocateYourFriend;

const styles = StyleSheet.create({
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
  },
  curcularBarView: {
    alignItems: "center",
  },
  barUpperPercentage: {
    paddingLeft: 250,
    top: 42,
  },
  barLowerPercentage: {
    paddingRight: 250,
    bottom: 52,
  },
  barPercentageResultView: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 15,
  },
  barPercentageResult: {
    height: 71,
    width: 138,
    backgroundColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
