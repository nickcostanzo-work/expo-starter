// /app/shopper-registration/shopper.tsx
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Link } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome';
import useUserStore from '../stores/useUserStore'; // Import the Zustand store
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { router } from 'expo-router';

const ShopperRegistration = () => {
  const { userType, setUserType } = useUserStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    setUserType('Shopper'); // Set user type to 'Shopper' when the component mounts
  }, [setUserType]);

  const handleRegister = async () => {
    if (userType !== 'Shopper') {
      Alert.alert('Error', 'User type is not set to Shopper.');
      setUserType('Shopper');
      router.push('/user-type/shopper');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'shoppers'), {
        fullName,
        address,
        email,
        userType
      });
      console.log('User details saved to Firestore with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.backButton}>
        <Icon name="arrow-left" size={24} color="#000" />
      </Link>
      <Text style={styles.text}>{userType} Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} />
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
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default ShopperRegistration;