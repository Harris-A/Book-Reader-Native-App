import {StyleSheet, Pressable, Text, TextInput} from "react-native";
import { useState } from "react";

// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import {Link} from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/spacer";

// Themed components
import ThemedTextInput from "../../components/ThemedTextInput";

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log('login form submitted', email, password)
    }

    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.title}>
                Account Login
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