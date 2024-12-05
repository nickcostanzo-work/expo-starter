// set user type to 'shopper' by default on navigation
// persist usertype into the next page

import React, { useCallback } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';
import useUserStore from '../stores/userTypeStore'; // Import the Zustand store

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
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
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Crier</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Discover your local ecosystem"
          onPress={() => {
            setUserType('Shopper');
            router.push('./(UserTypeAuth)/Shopper');
          }}
          color="#3b5998"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userType: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;