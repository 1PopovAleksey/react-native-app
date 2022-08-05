import React from 'react';
import {ActivityIndicator, Text, View} from "react-native";

export const Loading = () => {
    return (
        <View style={{
            flex: 0,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 300,
        }}>
            <ActivityIndicator size="large" color="#000"/>
            <Text style={{marginTop: 10}}>Загрузка статей</Text>
        </View>
    );
}

export default Loading;