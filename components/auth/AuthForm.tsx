// components/AuthForm.tsx
import React, { useState } from 'react';
import { Button, Input, Text, View, YStack } from 'tamagui';
import { Link } from 'expo-router';
import Icon from '@expo/vector-icons/FontAwesome';

interface AuthFormProps {
  userType: string;
  onLogin: () => void;
  onRegister: () => void;
  onGoogleAuth: () => void; 
}

const AuthForm: React.FC<AuthFormProps> = ({ userType, onLogin, onRegister, onGoogleAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <YStack f={1} jc="center" ai="center" bg="white" p="$4">
      <Link href="/" style={{ position: 'absolute', top: 40, left: 20 }}>
        <Icon name="arrow-left" size={24} color="#000" />
      </Link>
      <Text fontSize="$6" fontWeight="bold" mb="$5">
        {userType} Screen
      </Text>
      <Input
        w="80%"
        p="$2"
        my="$2"
        borderWidth={1}
        borderColor="#ccc"
        borderRadius="$4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        w="80%"
        p="$2"
        my="$2"
        borderWidth={1}
        borderColor="#ccc"
        borderRadius="$4"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <YStack mt="$5" w="70%">
        <Button onPress={onLogin}>Login</Button>
        <Text jc="center" mt="$4" mb="$4" fontSize="$6" textAlign="center">-or-</Text>
        <Button onPress={onRegister}>Register</Button>
        <Button
          mt="$4"
          bg="#4285F4"
          color="white"
          onPress={onGoogleAuth}
          icon={<Icon name="google" size={20} color="white" />}
        >
          Sign in with Google
        </Button>
      </YStack>
    </YStack>
  );
};

export default AuthForm;