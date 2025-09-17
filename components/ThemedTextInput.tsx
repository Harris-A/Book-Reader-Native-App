import { TextInput, useColorScheme } from "react-native";
import {COLORS} from "../constants/colours";

// @ts-ignore
const ThemedTextInput = ({ style, ...props}) => {
    const colorScheme = useColorScheme()
    // @ts-ignore
    const theme = COLORS[colorScheme] ?? COLORS.light

    return (
        <TextInput
            style={[
                {
                    color: theme.text,
                    backgroundColor: theme.uiBackground,
                    padding: 20,
                    borderRadius: 10,
                },
                style
                ]}
            {...props}
        />
    )
}
export default ThemedTextInput;