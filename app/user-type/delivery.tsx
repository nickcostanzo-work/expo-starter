import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const DeliveryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Delivery Screen</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => alert('Login')} />
      <Button title="Register" onPress={() => alert('Register')} />
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default DeliveryScreen;