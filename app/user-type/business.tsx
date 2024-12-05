import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome';
import useUserStore from '../stores/useUserStore'; // Import the Zustand store

const BusinessScreen = () => {
  const { userType, setUserType } = useUserStore();

  useEffect(() => {
    setUserType('Business'); // Set user type to 'Business' when the component mounts
  }, [setUserType]);

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#000" />
      </Link>
      <Text style={styles.text}>{userType} Screen</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => alert('Login')} />
        <Button title="Register" onPress={() => alert('Register')} />
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userType: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

export default BusinessScreen;