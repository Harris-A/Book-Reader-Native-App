import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import { Stack } from 'expo-router'
import { COLORS } from "../constants/colours";
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
    const colorScheme = useColorScheme()
    // @ts-ignore
    const theme = COLORS[colorScheme] ?? COLORS.light
    return (
        <>
            <StatusBar style="light" />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: '#fff',
                headerTitleStyle: theme.title,
            }}>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="(auth)/login" options={{ title: 'Account Login' }} />
                <Stack.Screen name="(auth)/register" options={{ title: 'Account Registration' }} />
            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})