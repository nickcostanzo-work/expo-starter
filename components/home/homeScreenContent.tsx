// app/components/HomeScreenContent.tsx
import React, { useCallback } from 'react';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';
import useUserStore from '../../stores/userTypeStore'; // Import the Zustand store
import { Button, Text, YStack } from 'tamagui';

SplashScreen.preventAutoHideAsync();

const HomeScreenContent = () => {
  const router = useRouter();
  const { userType, setUserType } = useUserStore();
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <YStack f={1} jc="center" ai="center" p="$4" onLayout={onLayoutRootView}>
      <Text fontFamily="PressStart2P_400Regular" fontSize="$10" mb="$5">
        Crier
      </Text>
      <YStack mt="$5" w="100%" ai="center">
        <Button
          onPress={() => {
            setUserType('Shopper');
            router.push('./(UserTypeAuth)/Shopper');
          }}
        >
          <Text textAlign="center" fontFamily="PressStart2P_400Regular" fontSize="$2">
            Discover your local ecosystem
          </Text>
        </Button>
      </YStack>
    </YStack>
  );
};

export default HomeScreenContent;