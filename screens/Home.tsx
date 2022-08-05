import {useEffect, useState} from 'react';
import {Alert, FlatList, RefreshControl, TouchableOpacity, View} from 'react-native';
import {Post} from "../components/Post";
import axios from "axios";
import Loading from "../components/Loading";

export const HomeScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState();

    const fetchPosts = () => {
        setIsLoading(true);

        axios
            .get(`https://62a2ee0621232ff9b2136737.mockapi.io/articles`)
            .then(({data}) => {
                setItems(data);
            })
            .catch((err) => {
                console.log(err);
                Alert.alert('Ошибочка', 'Не удалось получить статьи')
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(fetchPosts, [])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={items}
                renderItem={({item}) =>
                    <TouchableOpacity>
                        <Post
                            title={item.title}
                            imageUrl={item.imageUrl}
                            createdAt={item.createdAt}
                        />
                    </TouchableOpacity>
                }/>
        </View>
    );
};
