import React from 'react';
import { Tabs } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="user-type/delivery"
        options={{
          title: 'Delivery',
          tabBarIcon: ({ color, size }) => <Icon name="car" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="user-type/business"
        options={{
          title: 'Business',
          tabBarIcon: ({ color, size }) => <Icon name="briefcase" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="user-type/shopper"
        options={{
          title: 'Shopper',
          tabBarIcon: ({ color, size }) => <Icon name="shopping-cart" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;