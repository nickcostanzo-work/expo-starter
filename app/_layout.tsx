import React from 'react';
import { Stack } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome';


///////// Tamagui imports
import "../tamagui.config.ts";
import { TamaguiProvider } from 'tamagui'
import { tamaguiConfig } from '../tamagui.config'
////////


const Layout = () => {
  return (
   <TamaguiProvider config={tamaguiConfig}>
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="index" />
      </Stack>
    </TamaguiProvider>
  );
};

export default Layout;