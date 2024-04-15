import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import { AppBotton } from "../Components/AppButton"
import { Theme } from "../Global/Themes"


export function PostNote (){
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold", color:Theme.color.purple500 }}>Create Note</Text>
                <Text>Title</Text>
                <TextInput
                    style={styles.input}
                />
                <Text>Content</Text>
                <TextInput
                    style={styles.input2}
                />
                <AppBotton style={styles.btn}>Create</AppBotton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
        padding: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: '#86469C',
        padding: 10,
        borderRadius: 10,
        marginBottom: 25
    },
    input2:{
        borderWidth: 1,
        borderColor: '#86469C',
        padding: 10,
        borderRadius: 10,
        marginBottom: 25,
        height:500,
    },
    btn:{
        backgroundColor:Theme.color.purple500,
        width:120,
        // marginLeft:85,
        marginHorizontal: 85,
    }
})