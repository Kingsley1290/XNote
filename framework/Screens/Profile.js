import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { Theme } from "../Global/Themes";
import { AppBotton } from "../Components/AppButton";


export function Profile (){
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../../assets/pp.jpg")} style={styles.st} />
            <View>
                <Text>Full Name</Text>
                <TextInput style={styles.input} />
                <Text>Email</Text>
                <TextInput style={styles.input} />
                <Text>Phone Number</Text>
                <TextInput style={styles.input} />
                <Text>Address</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.btn1}>
            <AppBotton style={styles.btn}>Edit Profile</AppBotton>
            <AppBotton style={styles.btn}>Reset Password</AppBotton>
            </View>
            <AppBotton style={{backgroundColor:'red', width:200, marginHorizontal:100, marginBottom:20,}}>Delete Account</AppBotton>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 15,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
    },
    st:{
        width:150,
        height:150,
        borderRadius:100,
        marginTop:60,
        marginBottom:20,
        marginHorizontal:115,
    },
    input: {
        borderWidth: 1,
        borderColor: '#86469C',
        padding: 10,
        borderRadius: 10,
        marginBottom: 25
    },
    btn1:{
        // backgroundColor:Theme.color.purple500,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap",
        marginBottom:10
    }
})