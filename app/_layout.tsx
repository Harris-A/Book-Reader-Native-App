import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        /* applies native stack navigator on app */
        <Stack screenOptions={{
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
            <Stack.Screen name="contact" options={{ title: 'Contact' }} />
        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})