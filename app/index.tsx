import {Pressable, StyleSheet, Text,} from "react-native";
import {Link} from "expo-router";
// @ts-ignore
import Logo from '../assets/app-logo-light.png'

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/spacer";
import ThemedButton from "../components/ThemedButton";

const Home = () => {
    return (
        /* default react-native components (View & Text) */
        /* dynamically change the style of the view by using CSS class rule */
        <ThemedView style={styles.container}>
            <ThemedLogo style={styles.img} />

            <ThemedText style={styles.title} title={true}>
                My First React-Native
            </ThemedText>

            <Spacer />

            <ThemedText>
                Reading List App
            </ThemedText>

            <Spacer />

            <Spacer />


            <ThemedButton>
                <Link href="/login">
                    <ThemedText>Login</ThemedText>
                </Link>
            </ThemedButton>

            <ThemedButton>
                <Link href="/register">
                    <ThemedText>Register</ThemedText>
                </Link>
            </ThemedButton>
        </ThemedView>
    )
}

export default Home

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
    img: {
        marginVertical: 20,
        width: 150,
        height: 150,
    },
})