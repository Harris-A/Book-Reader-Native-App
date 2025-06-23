import { StyleSheet, Text, View } from "react-native";

const Home = () => {
    return (
        /* default react native components (View & Text) */
        <View style={styles.container}>

            {/* dynamically change the style of the view by using css class rule */}
            <Text style={styles.title}>My First React-Native</Text>

            {/*inline css*/}
            <Text style={{marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})