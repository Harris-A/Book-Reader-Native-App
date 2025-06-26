import { StyleSheet } from 'react-native';

// themed components
import Spacer from "../../components/spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const create = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.heading}>Create a New Book</ThemedText>

            <Spacer />

        </ThemedView>
    )
}

export default create;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});