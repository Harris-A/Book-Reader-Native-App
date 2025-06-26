import { Pressable, StyleSheet } from "react-native";
import { COLORS } from "../constants/colours";

// @ts-ignore
function ThemedButton({ style, children, ...props}) {

    return (
        <Pressable
            style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
            {...props}
        >
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 12,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        marginVertical: 10,
        color: COLORS.light.text,
    },
    pressed: {
        opacity: 0.5,
    },
})

export default ThemedButton;