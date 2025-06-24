import { StyleSheet, Text, View, Image} from "react-native";
import {Link} from "expo-router";
// @ts-ignore
import Logo from '../assets/app-logo.png'

const Home = () => {
    return (
        /* default react-native components (View & Text) */
        <View style={styles.container}>
            <Image source={Logo} style={styles.img} />

            {/* dynamically change the style of the view by using CSS class rule */}
            <Text style={styles.title}>My First React-Native</Text>

            {/*inline css*/}
            <Text style={{marginTop: 10, marginBottom: 30 }}>Reading List App</Text>

            <Link href="/about" style={styles.link}>About Page</Link>
            <Link href="/contact" style={styles.link}>Contact Page</Link>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    img: {
        marginVertical: 20,
        width: 150,
        height: 150,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})