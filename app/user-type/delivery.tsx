import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DeliveryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Delivery Screen</Text>
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
  },
});

export default DeliveryScreen;