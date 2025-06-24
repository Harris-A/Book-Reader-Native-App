// -- custom themed view component to override the default native VIEW component --

import { View, useColorScheme } from 'react-native';
import { COLORS } from '../constants/colours';

// @ts-ignore
const ThemedView = ({ style, ...props }) => {
    const colorScheme = useColorScheme() // grab a color scheme using ColorScheme hook
    // @ts-ignore

    // Selects the appropriate color theme (light or dark) or null. If null, then the theme will be light.
    const theme = COLORS[colorScheme] ?? COLORS.light

    return (
      <View style={[{backgroundColor: theme.background}, style]}
      {...props}
      />
  )
}

export default ThemedView;