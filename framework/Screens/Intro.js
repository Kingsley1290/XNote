import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBotton } from '../Components/AppButton'
import { LogIn } from './LogIn'
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico'
import { Theme } from '../Global/Themes'

export function Intro({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground source={require("../../assets/intro.jpg")} style={styles.bg}>
        <View style={styles.overlay}>
          <View></View>
          <Text style={{ textAlign: "center", color: "white", fontSize: 40, fontWeight: "bold", }}>X-Note</Text>
          <View style={{ gap: 10, marginBottom: 30 }}>
            <AppBotton onPress={() => navigation.navigate("SignUp")}>Get started</AppBotton>
            <AppBotton onPress={() => navigation.navigate("Login")} style={styles.btn}>Login</AppBotton>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    height: "100%",
    width: "100%"
  },
  overlay: {
    paddingTop: 50,
    backgroundColor: Theme.color.primary + 50,
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  btn: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1
  }
})