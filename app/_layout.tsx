import React from 'react';
import { Stack } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome';

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default Layout;