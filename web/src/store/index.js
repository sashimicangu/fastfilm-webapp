import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let userStore = (set) => ({
  user: {
    email: '',
    name: '',
    dob: null,
    rank: null,
    token: null,
    isLogin: false,
    createAt: Date.now(),
  },
  updateUserData: (data) =>
    set((state) => ({
      user: {
        email: data.email,
        name: data.name,
        dob: data.dob,
        rank: data.rank,
        isLogin: data.isLogin,
        token: data.token,
        createAt: data.createAt,
      },
    })),
});

userStore = devtools(userStore);
userStore = persist(userStore, { name: 'user-settings' });

export const useUserStore = create(userStore);
