import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello, world!</Text>
            <Text style={styles.par}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deserunt earum eveniet nulla
                numquam odio repellat vero voluptatem.
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    par: {
        width: '90%',
    }
});
