import * as Location from "expo-location";
import React, {useEffect, useState} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {Text} from "react-native";
import {ScrollView} from "react-native";

const {width:SCREEN_WIDTH} = Dimensions.get("window");

const API_KEY = "358b41330582446b0266246023c6eacb";
export default function App() {

    const [days,setDays] = useState("loading..");
    const [city,setCity] = useState("loading..");
    const [ok, setOk] = useState(true);
    // 권한요청 (앱 사용중에만 위치를 요청)
    const getWeather = async () => {
        const {granted} = await Location.requestForegroundPermissionsAsync();
        // 만약 허가를 받지 않았다면 setOk를 false 해줌
        const {
            coords: {latitude, longitude},
        } = await Location.getCurrentPositionAsync({accuracy:5});

        /* const {
             latitude, longitude
         } = await (await Location.getCurrentPositionAsync({accuracy: 5})).coords;*/

        if(!granted){
            setOk(false);
        };
        console.log(latitude, longitude)
        const location = await Location.reverseGeocodeAsync(
            {latitude, longitude},
            {useGoogleMaps:false}
        );
        console.log(location[0].region);
        setCity(location[0].region);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}&unites=metric`);
        const json = await response.json();
        const ete = json.mappings;
        console.log(response.json.getAttributeNames()[3]);

    };

    // 컴포넌트가 마운트 되면 useEffect 를 사용해서 getPermission 함수를 호출
    useEffect(()=>{
        getWeather();
    },[]);
    return (
        <View style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>{city}</Text>
            </View>

            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.weather}
                style={{backgroundColor: 'white'}}
            >
                <View style={styles.day}>
                    <Text style={styles.temp}>{/*{parseFloat(days.temp.days).toFixed(1)}*/}</Text>
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
    );
}

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
        width:SCREEN_WIDTH,
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