import React, { useCallback } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const UserTypeScreen = () => {
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
      <Text style={styles.title}>Select User Type</Text>
      <View style={styles.buttonContainer}>
        <Button title="Delivery" onPress={() => alert('Delivery selected')} color="#3b5998" />
        <Button title="Business" onPress={() => alert('Business selected')} color="#3b5998" />
        <Button title="Shopper" onPress={() => alert('Shopper selected')} color="#3b5998" />
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
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
  button: {
    marginVertical: 10,
  },
});

export default UserTypeScreen;