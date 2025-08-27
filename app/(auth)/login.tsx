import {StyleSheet, Pressable, Text, TextInput} from "react-native";
import { useState } from "react";
import { useUser } from '../../hooks/userUser';

// Themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import {Link} from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/spacer";
import ThemedTextInput from "../../components/ThemedTextInput";
// end

const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { login } = useUser()

    const handleSubmit = async () => {
        setError('')

        try {
            await login(email, password)
        } catch (error) {
            // @ts-ignore
            setError(error.message)
        }
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
            {error && <ThemedText style={styles.error}>{error}</ThemedText>}

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
    error: {
        color: 'COLORS.warning',
        padding: 10,
        backgroundColor: 'COLORS.errorBackground',
        borderColor: 'COLORS.errorBorder',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
    }
})