import Icon from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

//// for tamagui config
import { useColorScheme } from 'react-native'
import { TamaguiProvider, Theme } from 'tamagui'
import { tamaguiConfig } from '../tamagui.config'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
////



const Layout = () => {
  const colorScheme = useColorScheme();
//Defaulttheme is used here to enable support for native device dark/light mode settings
//<theme name="x" will be the default theme for your apps, see tamagui docs for changing nested child themes
  return (   
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto"/>
      <Theme name="green"> 
        <Stack screenOptions={{ headerShown: false }} >
          <Stack.Screen name="index" />
        </Stack>
      </Theme>
      </ThemeProvider>
    </TamaguiProvider>
  );
};

export default Layout;