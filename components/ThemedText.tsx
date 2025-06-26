import { Text, TextProps, useColorScheme } from 'react-native';
import { COLORS } from "../constants/colours";
import { ReactNode } from 'react';

type ThemedTextProps = TextProps & {
    title?: boolean;
    children?: ReactNode;
};

// custom ThemedText component with 'title' prop passed
const ThemedText = ({ style, title = false, children, ...props }: ThemedTextProps) => {
    const colorScheme = useColorScheme();
    // @ts-ignore
    const theme = COLORS[colorScheme] ?? COLORS.light;

    // if title prop is true, return title color from theme
    // if no title color found, return text color from theme
    const textColor = title ? theme.title : theme.text;

    return (
        <Text style={[{ color: textColor }, style]} {...props}>
            {children}
        </Text>
    )
}

export default ThemedText;
