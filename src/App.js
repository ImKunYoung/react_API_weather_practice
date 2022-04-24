import React from "react";
import {View, StyleSheet} from "react-native";
import {Text} from "react-native";
import {ScrollView} from "react-native";
// import * as expoLocation from "expo-location/src/ExpoLocation";

export default function App(){
    return(
        <View style = {styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>Seoul</Text>
            </View>

            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contenContainerStyle={styles.weather}
            pagingEnabled
            >

                <View style={styles.day}>
                    <Text style={styles.temp}>27</Text>
                    <Text style={styles.description}>sunny</Text>
                </View>

                <View style={styles.day}>
                    <Text style={styles.temp}>27</Text>
                    <Text style={styles.description}>sunny</Text>
                </View>

                <View style={styles.day}>
                    <Text style={styles.temp}>27</Text>
                    <Text style={styles.description}>sunny</Text>
                </View>

                <View style={styles.day}>
                    <Text style={styles.temp}>27</Text>
                    <Text style={styles.description}>sunny</Text>
                </View>

            </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"tomato",
    },
    city:{
        flex: 1.2,
        alignItems:"center",
        justifyContent:"center",
    },
    weather:{
        flex: 3,
    },
    cityName:{
        fontSize: 60,
        fontWeight: "800",
    },
    day:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    temp:{
        marginTop: 50,
        fontSize:150,
    },
    description:{
        fontSize: 60,
        marginTop: -30,
    },
});