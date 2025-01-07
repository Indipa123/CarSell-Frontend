// stores/user.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John Doe', 
    age : 15 ,// Shared state
  }),

  actions: {
    updateName(newName: string) {
      this.name = newName;
    },
    updateAge(newAge: number) {
      this.age = newAge;
    }
  },
});

