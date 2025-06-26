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
            <StatusBar style="auto" />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
            }}>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})