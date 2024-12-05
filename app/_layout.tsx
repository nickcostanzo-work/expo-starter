import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="user-type" options={{ title: 'Select User Type' }} />
      <Stack.Screen name="user-type/delivery" options={{ title: 'Delivery' }} />
      <Stack.Screen name="user-type/business" options={{ title: 'Business' }} />
      <Stack.Screen name="user-type/shopper" options={{ title: 'Shopper' }} />
    </Stack>
  );
};

export default Layout;