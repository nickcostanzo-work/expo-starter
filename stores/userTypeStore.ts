// FILE: app/stores/useUserStore.ts
import { create } from 'zustand';

interface UserState {
  userType: 'default';
  setUserType: (type: 'default' ) => void;
}

const useUserTypeStore = create<UserState>((set) => ({
  userType: 'default',
  setUserType: (type: 'default' ) => set({ userType: type }),
}));

export default useUserTypeStore; 