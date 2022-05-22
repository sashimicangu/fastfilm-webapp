import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let userStore = (set) => ({
  user: { email: '', name: '', token: null, isLogin: false, createAt: Date.now() },
  updateUserData: (data) =>
    set((state) => ({
      user: {
        email: data.email,
        name: data.name,
        isLogin: data.isLogin,
        token: data.token,
        createAt: data.createAt
      },
    })),
});

userStore = devtools(userStore);
userStore = persist(userStore, { name: 'user-settings' });

export const useUserStore = create(userStore);
