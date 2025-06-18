import React from 'react';
import { Image, StyleSheet, View, ImageBackground, Text } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require("../assets/logo.png")}
        />
        <Text style={styles.brandText}>LUMA</Text>
      </View>
      
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#EFD57E",
  },
  logo: {
    width: 130,
    height: 130,
  },

  brandText: {
    marginTop: 10,
     fontFamily: 'DevilBreeze',
     fontSize: 42,
     color: '#EFD57E',
    letterSpacing: 2,
  },
  
  logoContainer: {
    position: "absolute",
    top: 130,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#7E98EF",
  },
});

export default WelcomeScreen;

