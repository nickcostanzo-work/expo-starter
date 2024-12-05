import { Tabs } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome';
import useUserStore from '../../stores/userTypeStore'; // Import the Zustand store

const TabsLayout = () => {
  const { userType, setUserType } = useUserStore();
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Shopper"
        options={{
          title: 'Shopper',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="shopping-cart" color={color} size={24} />
          ),
        }}
        listeners={{
          tabPress: () => {
            setUserType('Shopper');
          },
        }}
      />
      <Tabs.Screen
        name="Delivery"
        options={{
          title: 'Delivery',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="truck" color={color} size={24} />
          ),
        }}
        listeners={{
          tabPress: () => {
            setUserType('Delivery');
          },
        }}
      />
      <Tabs.Screen
        name="Business"
        options={{
          title: 'Business',
          tabBarIcon: ({ color, focused }) => (
            <Icon name="briefcase" color={color} size={24} />
          ),
        }}
        listeners={{
          tabPress: () => {
            setUserType('Business');
          },
        }}
      />

    </Tabs>
  );
};

export default TabsLayout;