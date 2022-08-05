import {StatusBar, View} from 'react-native';
import {Header} from "./components/Header";
import {HomeScreen} from "./screens/Home";
import {FullPostScreen} from "./screens/FullPosts";

export default function App() {

    return (
        <View>
            <Header/>
            <HomeScreen/>
            <StatusBar/>
        </View>
    );
};
