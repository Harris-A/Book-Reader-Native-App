import { StyleSheet, Text} from "react-native";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/spacer";
import ThemedTextInput from "../../components/ThemedTextInput";
import {useState} from "react";

const register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('register form submitted', email, password)
    }

    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.title}>
                Register to your Account
            </ThemedText>

            <Spacer />

            <ThemedTextInput
                placeholder='Email'
                style={{width: '80%', marginBottom: 10}}
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />
            <ThemedTextInput
                placeholder='Password'
                style={{width: '80%', marginBottom: 10}}
                onChangeText={setPassword}
                value={password}
            />

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