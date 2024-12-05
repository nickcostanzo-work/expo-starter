import { Tabs } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="delivery"
        options={{
          title: 'Delivery',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="truck" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="business"
        options={{
          title: 'Business',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="briefcase" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="shopper"
        options={{
          title: 'Shopper',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="shopping-cart" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;