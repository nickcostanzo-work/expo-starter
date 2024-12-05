import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="user-type" options={{ title: 'Select User Type' }} />
    </Stack>
  );
};

export default Layout;