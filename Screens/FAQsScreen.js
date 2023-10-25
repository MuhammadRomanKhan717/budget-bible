import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

const FAQsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.headerImage}
            source={require("../assets/bytesize_menu.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>FAQ’S</Text>
      </View>
      <View>
        <Text style={styles.CoreText}>Core Concepts</Text>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={styles.lineView} />
      </View>
      <View style={styles.TipsDetail}>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Benifits of opening multiple accounts
          </Text>
        </View>

        <View>
          <Image source={require("../assets/ri_arrow-drop-down-line.png")} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={styles.TipslineView} />
      </View>
      <View style={styles.TipsDetail}>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            What are expenses
          </Text>
        </View>

        <View>
          <Image source={require("../assets/ri_arrow-drop-down-line.png")} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={styles.TipslineView} />
      </View>
      <View style={styles.TipsDetail}>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            How to build your net worth using The Budget Bible
          </Text>
        </View>

        <View>
          <Image source={require("../assets/ri_arrow-drop-down-line.png")} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={styles.TipslineView} />
      </View>
      <View style={styles.TipsDetail}>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            What is a Personal Allowance?
          </Text>
        </View>

        <View>
          <Image source={require("../assets/ri_arrow-drop-down-line.png")} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={styles.TipslineView} />
      </View>
      <View style={styles.TipsDetail}>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            What will i get in a 1 x 1 Session?
          </Text>
        </View>

        <View>
          <Image source={require("../assets/ri_arrow-drop-down-line.png")} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={styles.TipslineView} />
      </View>
      <View style={styles.TipsDetail}>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            What is The Budget Bible about?
          </Text>
        </View>

        <View>
          <Image source={require("../assets/ri_arrow-drop-down-line.png")} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={styles.TipslineView} />
      </View>
      <View style={styles.TipsDetail}>
        <View style={{ marginTop: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            What is the difference between this Budgeting app and other
            Budgeting apps?
          </Text>
        </View>

        <View>
          <Image source={require("../assets/ri_arrow-drop-down-line.png")} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
        <View style={styles.TipslineView} />
      </View>
    </SafeAreaView>
  );
};

export default FAQsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
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
    paddingLeft: 130,
  },
  CoreText: {
    paddingTop: 35,
    paddingLeft: 20,
    color: "#FFD700",
  },
  lineView: {
    backgroundColor: "#FFD700",
    height: 2,
    width: 335,
  },
  TipsDetail: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  TipslineView: {
    backgroundColor: "#E5E5E5",
    height: 2,
    width: 335,
  },
});
