import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BusinessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Business Screen</Text>
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

export default BusinessScreen;