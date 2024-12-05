import React from 'react';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="user-type/delivery" options={{ title: 'Delivery' }} />
      <Tabs.Screen name="user-type/business" options={{ title: 'Business' }} />
      <Tabs.Screen name="user-type/shopper" options={{ title: 'Shopper' }} />
    </Tabs>
  );
};

export default Layout;