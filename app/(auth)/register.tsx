import { StyleSheet, Pressable, Text} from "react-native";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/spacer";

const register = () => {

    const handleSubmit = () => {
        console.log('register form submitted')
    }

    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.title}>
                Register to your Account
            </ThemedText>

            <Spacer />

            <ThemedButton onPress={handleSubmit}>
                <Text>Register</Text>
            </ThemedButton>

            <Spacer />

            <Link href='/login'>
                <ThemedText style={{fontSize: 12}}>
                    Already have an account? Login here.
                </ThemedText>
            </Link>

        </ThemedView>
    )
}

export default register

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