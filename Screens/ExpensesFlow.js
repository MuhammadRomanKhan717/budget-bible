import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Swiper from "react-native-swiper";

const ExpensesFlow = ({ navigation }) => {
  const [screen, setScreen] = useState(0);
  // console.log("screen", screen);
  let txt = "GYM Membership";
  const nextButtons = () => {
    if (screen >= 0 && screen < 7) {
      setScreen(() => screen + 1);
    } else {
      navigation.navigate("payPeriod");
    }
  };
  const prevButtons = () => {
    if (screen > 0 && screen <= 7) {
      setScreen(() => screen - 1);
    }
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View
        style={[
          styles.bottomView,
          { position: "absolute", bottom: 50, left: 0, right: 0, zIndex: 99 },
        ]}
      >
        <TouchableOpacity onPress={prevButtons} style={[styles.bottomBack]}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextButtons} style={[styles.bottomNext]}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        style={styles.wrapper}
        index={screen}
        // onResponderRelease={nextButtons}
        onIndexChanged={(i) => setScreen(i)}
      >
        <View>
          <Text style={styles.Header}>Education</Text>
          <View ImageView>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_educatio.jpg")}
              resizeMode={"cover"}
            />
            <Text style={[styles.title]}>
              Tap an item to add any regular education
            </Text>
            <Text style={[styles.title]}>expenses</Text>
          </View>
          <View style={[styles.expensesView]}>
            <View>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Tuition</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.kidsExpensesView]}>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Kid’s School</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity style={[styles.PlusImageView]}>
              <Image
                style={[styles.PlusImage]}
                source={require("../assets/charm_plus.png")}
                resizeMode={"cover"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* next 2*/}
        <View>
          <Text style={styles.Header}>Transportation</Text>
          <View ImageView>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_order_a_car_-3-tww.png")}
              resizeMode={"cover"}
            />
            <Text style={[styles.title]}>
              Tap an item to add any regular Transportation
            </Text>
            <Text style={[styles.title]}>expenses</Text>
          </View>
          <View style={[styles.expensesView]}>
            <View>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Car Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Registration</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.kidsExpensesView]}>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Gas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Auto Insurance</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity style={[styles.PlusImageView]}>
              <Image
                style={[styles.PlusImage]}
                source={require("../assets/charm_plus.png")}
                resizeMode={"cover"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* next 3*/}

        <View>
          <Text style={styles.Header}>Kids</Text>
          <View ImageView>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_children_re_c37f.png")}
              resizeMode={"cover"}
            />
            <Text style={[styles.title]}>
              Tap an item to add any regular kids
            </Text>
            <Text style={[styles.title]}>expenses</Text>
          </View>
          <View style={[styles.expensesView]}>
            <View>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Day Care</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>School Lunch</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Child Support</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.kidsExpensesView]}>
              <TouchableOpacity></TouchableOpacity>
              <TouchableOpacity></TouchableOpacity>
              <TouchableOpacity style={[styles.PlusImageView]}>
                <Image
                  style={[styles.PlusImage]}
                  source={require("../assets/charm_plus.png")}
                  resizeMode={"cover"}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View></View>
        </View>
        {/* next 4 */}
        <View>
          <Text style={styles.Header}>Health-Beauty-Fitness</Text>
          <View ImageView>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_personal_training_0dqn.png")}
              resizeMode={"cover"}
            />
            <Text style={[styles.title]}>
              Tap an item to add any health related
            </Text>
            <Text style={[styles.title]}>subscriptions</Text>
          </View>
          <View style={[styles.expensesView]}>
            <View>
              <TouchableOpacity style={[styles.expenses]}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={[styles.expensesText]}
                >
                  {`${txt.substring(0, 8)}...`}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Ipsy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Barber Shop</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.kidsExpensesView]}></View>
          </View>
          <View>
            <TouchableOpacity style={[styles.PlusImageView]}>
              <Image
                style={[styles.PlusImage]}
                source={require("../assets/charm_plus.png")}
                resizeMode={"cover"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* next 5*/}
        <View>
          <Text style={styles.Header}>Bills & Utilities</Text>
          <View ImageView>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_election_day_w842.png")}
              resizeMode={"cover"}
            />
            <Text style={[styles.title]}>
              Tap an item to add any regular bills &
            </Text>
            <Text style={[styles.title]}>utilities</Text>
          </View>
          <View style={[styles.expensesView]}>
            <View>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Cell Phone</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Cable</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Electricity</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.kidsExpensesView]}>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Internet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Natural Gas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Water Bill</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity style={[styles.PlusImageView]}>
              <Image
                style={[styles.PlusImage]}
                source={require("../assets/charm_plus.png")}
                resizeMode={"cover"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* next 6*/}
        <View>
          <Text style={styles.Header}>Subscriptions</Text>
          <View ImageView>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_subscriptions_re_k7jj1.png")}
              resizeMode={"cover"}
            />
            <Text style={[styles.title]}>Tap an item to add any regular</Text>
            <Text style={[styles.title]}>subscriptions</Text>
          </View>
          <View style={[styles.expensesView]}>
            <View>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Disney+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Hulu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Apple Music</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.kidsExpensesView]}>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Netflix</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Spotify</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Pandora</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity style={[styles.PlusImageView]}>
              <Image
                style={[styles.PlusImage]}
                source={require("../assets/charm_plus.png")}
                resizeMode={"cover"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* next 7*/}
        <View>
          <Text style={styles.Header}>Housing</Text>
          <View ImageView>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_credit_card_payment_re_o911.png")}
              resizeMode={"cover"}
            />
            <Text style={[styles.title]}>
              Tap an item to add any regular housing{" "}
            </Text>
            <Text style={[styles.title]}>expenses</Text>
          </View>
          <View style={[styles.expensesView]}>
            <View>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Mortgage</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>HOA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Yard Care Service</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.kidsExpensesView]}>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Rent</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity style={[styles.PlusImageView]}>
              <Image
                style={[styles.PlusImage]}
                source={require("../assets/charm_plus.png")}
                resizeMode={"cover"}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* next 8*/}
        <View>
          <Text style={styles.Header}>Planned Expenses or Goals</Text>

          <View ImageView>
            <Image
              style={styles.Image}
              source={require("../assets/undraw_online_organizer_re_156n.png")}
              resizeMode={"cover"}
            />
            <Text style={[styles.title]}>
              Want new shoes? Planning a vacation?
            </Text>
            <Text style={[styles.title]}>
              {" "}
              Birthday or Holiday Season around the corner? Plan your expenses
              ahead of time so when you’re ready to purchase, it’s a
              frictionless transaction
            </Text>
          </View>
          <View style={[styles.expensesView]}>
            <View>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Fashion</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Holiday</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.kidsExpensesView]}>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Birthday</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.expenses]}>
                <Text style={[styles.expensesText]}>Vacation</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity style={[styles.PlusImageView]}>
              <Image
                style={[styles.PlusImage]}
                source={require("../assets/charm_plus.png")}
                resizeMode={"cover"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

export default ExpensesFlow;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  Header: {
    fontSize: 23,
    fontWeight: "600",
    paddingLeft: 12,
    marginTop: 12,
    marginBottom: 22,
  },
  ImageView: {
    // flex: 0.8,
  },
  Image: {
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 55,
  },
  title: {
    fontSize: 17,
    alignSelf: "center",
  },

  expensesView: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 40,
    paddingLeft: 15,
  },
  kidsExpensesView: {
    paddingLeft: 13,
  },
  expenses: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 131,
    backgroundColor: "black",
    borderRadius: 31,
    borderWidth: 1,
    marginTop: 5,
  },
  expensesText: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
    // paddingHorizontal: 10,
  },
  PlusImageView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 90,
    backgroundColor: "#FFD700",
    borderRadius: 31,
    borderWidth: 1,
    marginLeft: 17,
  },
  PlusImage: {
    height: 34,
    width: 34,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 35,
  },
  bottomBack: {
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 90,
    marginTop: 45,
    borderRadius: 31,
    // borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
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
    // borderWidth: 1,

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
});
