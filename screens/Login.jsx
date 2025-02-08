import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';

export default function Login({navigation}) {

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
        <Animated.View
          // entering={FadeInDown.delay(200).springify()}
          style={styles.containertext}
        >
          <Text style={styles.text}>
            Best <Text style={{ color: "red" }}>WorkOuts</Text>
          </Text>
          <Text style={styles.text}>For You</Text>
        </Animated.View>
        <Animated.View 
        // entering={FadeInDown.delay(300).springify()}
        >
          <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor: "red",
              borderRadius: 8,
              marginHorizontal: 20,
              padding: 10,
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={styles.buttom}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
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
  buttom: {
    color: "white",
    fontSize: hp(2.5),
    fontWeight: "bold",
  },
});
