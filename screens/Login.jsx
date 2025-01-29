import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.image}
        source={require("../assets/images/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={styles.gradiente}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <View style={styles.containertext}>
          <Text style={styles.text}>
            Best <Text style={{ color: "red" }}>WorkOuts</Text>
          </Text>
          <Text style={styles.text}>For You</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  gradiente: {
    width: wp(100),
    height: hp(100),
    justifyContent: "flex-end",
    paddingBottom: 24,
  },
  containertext: {
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: hp(5),
    fontWeight: "bold",
  },
});
