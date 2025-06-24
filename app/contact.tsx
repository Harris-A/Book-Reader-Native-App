import { StyleSheet, Text, View } from "react-native";
import ThemedView from "../components/ThemedView";

const Contact = () => {
    return (
        <ThemedView style={styles.container}>
            <Text style={styles.title}>Contact Page</Text>
        </ThemedView>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})