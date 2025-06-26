// -- custom themed view component to override the default native VIEW component --

import { SafeAreaView, View, useColorScheme } from 'react-native';
import { COLORS } from '../constants/colours';
import {useSafeAreaInsets} from "react-native-safe-area-context";

// @ts-ignore
const ThemedView = ({ style, safe = false, ...props }) => {
    const colorScheme = useColorScheme() // grab a color scheme using ColorScheme hook
    // @ts-ignore

    // Selects the appropriate color theme (light or dark) or null. If null, then the theme will be light.
    const theme = COLORS[colorScheme] ?? COLORS.light

    // if safeView is false, return the default react-native View.
    if (!safe)
        return (
            <View style={[{backgroundColor: theme.background}, style]}
                  {...props}
            />
        )

        const insets = useSafeAreaInsets()

    //Else, return a View with safe area insets applied (top and bottom padding)
        return (
            <View
                style={[{
                    backgroundColor: theme.background,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                },
                    style
                ]}
                {...props}
            />
        )
}

export default ThemedView;