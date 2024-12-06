// app/user-type/shopper.tsx
import React from 'react';
import useUserStore from '../../stores/userTypeStore'; // Corrected the import path for the Zustand store
import AuthForm from '../../components/auth/AuthForm'; // Corrected the import path for the AuthForm component

const ShopperScreen = () => {
  const { userType, setUserType } = useUserStore();

  const handleLogin = () => {
    alert('Login');
  };

  const handleRegister = () => {
    alert('Register');
  };

  return (
    <AuthForm userType="Shopper" onLogin={handleLogin} onRegister={handleRegister} />
  );
};

export default ShopperScreen;