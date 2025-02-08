import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home() {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight }}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: wp("5%"),
        }}
      >
        <View style={{ margin: wp("5%") }}>
          <Text style={{ color: "gray" }}>Ready to</Text>
          <Text style={{ color: "red" }}>WORKOUT</Text>
        </View>
        <View>
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: wp(12) }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
