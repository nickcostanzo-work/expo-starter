import React, { useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import * as SplashScreen from 'expo-splash-screen';
import Icon from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const UserTypeScreen = () => {
  const router = useRouter();
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
        <TouchableOpacity style={styles.button} onPress={() => router.push('/user-type/delivery')}>
          <Icon name="car" size={30} color="#3b5998" />
          <Text style={styles.buttonText}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/user-type/business')}>
          <Icon name="briefcase" size={30} color="#3b5998" />
          <Text style={styles.buttonText}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/user-type/shopper')}>
          <Icon name="shopping-bag" size={30} color="#3b5998" />
          <Text style={styles.buttonText}>Shopper</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 18,
    color: '#3b5998',
    marginTop: 5,
  },
});

export default UserTypeScreen;