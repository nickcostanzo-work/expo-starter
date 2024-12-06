// app/user-type/business.tsx
import React from 'react';
import useUserStore from '../../stores/userTypeStore'; // Corrected the import path for the Zustand store
import AuthForm from '../../components/auth/AuthForm'; // Corrected the import path for the AuthForm component

const BusinessScreen = () => {
  const { userType, setUserType } = useUserStore();

  const handleLogin = () => {
    alert('Login');
  };

  const handleRegister = () => {
    alert('Register');
  };

  const handleGoogleAuth = () => { 
    alert('Google Auth');
  };

  return (
    <AuthForm userType="Business" onLogin={handleLogin} onRegister={handleRegister} onGoogleAuth={handleGoogleAuth}/>
  );
};

export default BusinessScreen;