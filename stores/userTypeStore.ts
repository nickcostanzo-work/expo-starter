// FILE: app/stores/useUserStore.ts
import { create } from 'zustand';

interface UserState {
  userType: 'default' | 'Business' | 'Delivery' | 'Shopper';
  setUserType: (type: 'default' | 'Business' | 'Delivery' | 'Shopper') => void;
}

const useUserTypeStore = create<UserState>((set) => ({
  userType: 'default',
  setUserType: (type: 'default' | 'Business' | 'Delivery' | 'Shopper') => set({ userType: type }),
}));

export default useUserTypeStore; 