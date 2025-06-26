// import image and useCoulorScheme hook
import { Image, useColorScheme } from "react-native";

// images
// @ts-ignore
import DarkLogo from '../assets/app-logo-dark.png'
// @ts-ignore
import LightLogo from '../assets/app-logo-light.png'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme() //grab user colour scheme

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo // grab the correct logo based on a color scheme

    return (
        <Image source={logo} {...props} />
    )
}

export default ThemedLogo