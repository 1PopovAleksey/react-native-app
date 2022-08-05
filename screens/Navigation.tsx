import {createNativeStackNavigator} from "react-native-screens/native-stack";
import { FullPostScreen } from "./FullPosts";
import { HomeScreen } from "./Home";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Новости'}}/>
        <Stack.Screen name="FullPost" component={FullPostScreen} options={{title: 'Статья'}}/>
    </Stack.Navigator>
}