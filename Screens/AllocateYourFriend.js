import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
const AllocateYourFriend = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity>
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
      <View>
        <CircularProgress
          value={60}
          radius={120}
          duration={2000}
          progressValueColor={"#ecf0f1"}
          maxValue={200}
          title={"KM/H"}
          titleColor={"white"}
          titleStyle={{ fontWeight: "bold" }}
        />
      </View>
      <View>
        <View>
          <Text>$ 1000</Text>
          <Text>Personal Allowance</Text>
        </View>
        <View>
          <Text>$ 445</Text>
          <Text>Savings</Text>
        </View>
      </View>
      <View>
        <Text>A Look Ahead</Text>
      </View>
      <View>
        <Text>
          If you personal allowance stays at 40% and your remain the same, your
          yearly snapshot is shown below
        </Text>
      </View>
      <View>
        <Text>Personal Allowance: $6000</Text>
      </View>
      <View>
        <Text>Savings: $9000</Text>
        <TouchableOpacity>
          <Image source={require("../assets/iwwa_information.png")} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>
          Recap:You have a personal allowance that you can spend as freely as
          you’d like , your expenses are taken care of and your net worth is
          growing rapidly!
        </Text>
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
});
