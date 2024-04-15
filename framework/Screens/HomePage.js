import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppTheme, Theme } from '../Global/Themes'
import { Profile } from './Profile'
import { PostNote } from './PostNote'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel'
import { Button, Card } from 'react-native-paper'
import { SendNote } from './SendNote'

const carouselLinks = [
    require("../../assets/c2.jpg"),
    require("../../assets/c1.jpg"),
]

function HomeScreen() {
    const screenWidth = Dimensions.get("screen").width
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>X-Note</Text>
            <Ionicons name="person-circle-sharp" size={24} color="black" />
            <View style={{ marginVertical: 10, }}>
                <Carousel
                    loop
                    width={screenWidth - 20}
                    height={200}
                    autoPlay={true}
                    data={carouselLinks}
                    style={{ borderRadius: 10 }}
                    scrollAnimationDuration={2000}
                    renderItem={({ index }) => (
                        // <Image style={{ width: '100%', height: 200, borderRadius: 10, }} source={{ uri: carouselLinks[index] }} />
                        <>
                            <Image style={{ width: '100%', height: 200, borderRadius: 10, }} source={carouselLinks[index]} />
                        </>
                    )}
                />
            </View>
            <View>
                <Text style={{ marginTop: 20, marginBottom:10, marginLeft: 20, fontSize: 20, fontStyle: 'italic' }}>Recent Notes</Text>
            </View>
            <View style={styles.notes}>
            <View style={{backgroundColor:Theme.color.purple500, borderRadius:15, marginBottom:10, marginEnd:10, width:170, height:100}}><Text style={styles.tnotes}>Recent Note 01</Text></View>
            <View style={{backgroundColor:Theme.color.purple500, borderRadius:15, marginBottom:10, marginEnd:10, width:170, height:100}}><Text style={styles.tnotes}>Recent Note 02</Text></View>
            <View style={{backgroundColor:Theme.color.purple500, borderRadius:15, marginBottom:10, marginEnd:10, width:170, height:200}}><Text style={styles.tnotes}>Recent Note 03</Text></View>
            <View style={{backgroundColor:Theme.color.purple500, borderRadius:15, marginBottom:10, marginEnd:10, width:170, height:200}}><Text style={styles.tnotes}>Recent Note 04</Text></View>
            <View style={{backgroundColor:Theme.color.purple500, borderRadius:15, marginBottom:10, marginEnd:10, width:170, height:100}}><Text style={styles.tnotes}>Recent Note 05</Text></View>
            <View style={{backgroundColor:Theme.color.purple500, borderRadius:15, marginBottom:10, marginEnd:10, width:170, height:100}}><Text style={styles.tnotes}>Recent Note 06</Text></View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 15,
    

    },
    header: {
        // fontFamily: AppTheme.font.text600,
        fontSize: 25,
    },
    notes:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        flexWrap:"wrap",
        marginBottom:10
    },
    tnotes:{
        paddingVertical:35,
        paddingHorizontal:20,
        fontSize:20,
        color:'black'
    }
})

const Tab = createBottomTabNavigator();

export function HomePage() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let size;
                    if (route.name === 'HomeScreen') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (route.name === 'Profile') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'account' : 'account-outline';
                    }
                    else if (route.name === 'PostNote') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'plus' : 'plus-box-outline';
                    }
                    else if (route.name === 'SendNote') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'transfer' : 'transfer';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: Theme.color.purple500,
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="PostNote" component={PostNote} />
            <Tab.Screen name="SendNote" component={SendNote} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}