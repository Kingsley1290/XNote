import { Alert, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { Theme } from "../Global/Themes";
import { AppBotton } from "../Components/AppButton";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Service/firebase";
import { Avatar, Card, IconButton } from "react-native-paper";


export function Settings(navigation) {

    function nav( navigation ) {
        console.log(() => navigation.navigate("Profile"));
    }

    return (
        <SafeAreaView style={[styles.container,]}>
            <View><Image source={require("../../assets/pp.jpg")} style={styles.st} /></View>
            <View>
                <View>
                    <Card.Title
                        style={{color:"red"}}
                        title="Profile"
                        left={(props) => <Avatar.Icon {...props} icon="account" />}
                        right={(props) => <IconButton {...props} icon="forward" onPress={() =>  {nav}} />}
                    />
                    <Card.Title
                        title="Preferences"
                        left={(props) => <Avatar.Icon {...props} icon="cog" />}
                        right={(props) => <IconButton {...props} icon="forward" onPress={() => { }} />}
                    />
                    <Card.Title
                        title="Security"
                        left={(props) => <Avatar.Icon {...props} icon="security" />}
                        right={(props) => <IconButton {...props} icon="forward" onPress={() => { }} />}
                    />
                    <Card.Title
                        title="About"
                        left={(props) => <Avatar.Icon {...props} icon="information" />}
                        right={(props) => <IconButton {...props} icon="forward" onPress={() => { }} />}
                    />
                    <Card.Title
                        title="Support"
                        left={(props) => <Avatar.Icon {...props} icon="help" />}
                        right={(props) => <IconButton {...props} icon="forward" onPress={() => { }} />}
                    />
                    <Card.Title
                        title="Logout"
                        left={(props) => <Avatar.Icon {...props} icon="logout" />}
                        right={(props) => <IconButton {...props} icon="forward" onPress={() => { }} />}
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding:5,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
    },
    st: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 30,
        marginBottom: 40,
        marginHorizontal: 110,
    }
})