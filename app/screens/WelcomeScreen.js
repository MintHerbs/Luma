import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>LUMA</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        
        <AppButton title="Register" color="secondary" />
      </View>


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    bottom: 60,
  },
  logo: {
    width: 130,
    height: 130,
  },
  logoContainer: {
    position: "absolute",
    top: 120,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.white,
  },
});

export default WelcomeScreen;
