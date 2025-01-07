<!-- components/EditUser.vue -->
<template>
  <div>
    <input
      v-model="userStore.name"
      placeholder="Edit Name"
      class="border p-2"
    />
    <input
      v-model="userStore.age"
      placeholder="Edit Age"
      class="border p-2"
    />
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>

