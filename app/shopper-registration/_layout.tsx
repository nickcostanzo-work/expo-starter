import React from 'react';
import { Stack } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="shopper" />
    </Stack>
  );
};

export default Layout;