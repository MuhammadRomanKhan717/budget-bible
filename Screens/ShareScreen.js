import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";
import * as Sharing from "expo-sharing";

const ShareScreen = () => {
  const onSharePress = async () => {
    try {
      await Sharing.shareAsync("");
    } catch (error) {
      console.error("Sharing failed with error: ", error);
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Button title="share" onPress={onSharePress} />
      </View>
    </SafeAreaView>
  );
};

export default ShareScreen;

const styles = StyleSheet.create({});
