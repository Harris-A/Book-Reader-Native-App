import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";

const About = () => {
    return (
        <ThemedView style={styles.container}>
            <Text style={[styles.title]}>About Page</Text>

            <Link href="/" style={styles.link}>Home</Link>
            <Link href="/" style={styles.link}>Contact</Link>
        </ThemedView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})