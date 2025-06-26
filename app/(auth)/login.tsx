import {StyleSheet, Pressable, Text} from "react-native";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import {Link} from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/spacer";

const login = () => {

    const handleSubmit = () => {
        console.log('login form submitted')
    }

    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.title}>
                Account Login
            </ThemedText>

            <Spacer />

            <ThemedButton onPress={handleSubmit}>
                <Text>Login</Text>
            </ThemedButton>

            <Spacer />

            <Link href='/register'>
                <ThemedText style={{textAlign: 'center', fontSize: 12}}>
                    Don't have an account? Register here.
                </ThemedText>
            </Link>

        </ThemedView>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})