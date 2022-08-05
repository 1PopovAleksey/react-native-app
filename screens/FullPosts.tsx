import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Alert, View} from "react-native";
import axios from "axios";
import Loading from "../components/Loading";

// @ts-ignore
const PostImage = styled.Image`
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`;

// @ts-ignore
const PostText = styled.Text`
    width: 80%;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.4);
`;

export const FullPostScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        setIsLoading(true);

        axios
            .get(`https://62a2ee0621232ff9b2136737.mockapi.io/articles/2`)
            .then(({data}) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Ошибочка', 'Не удалось получить статью')
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <Loading/>
    }

    return (
        <View style={{padding: 10}}>
            <PostImage source={{uri: data.imageUrl}}/>
            <PostText>{data.text}</PostText>
        </View>
    )
}