import { create } from 'zustand';
import { User } from '../api/types';
import { persist } from 'zustand/middleware';

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user',
    },
  ),
);