<!-- components/Profile.vue -->
<template>
  <div>
    <p>User Name: {{ userStore.name }}</p>
    <p>User Age: {{ userStore.age }}</p>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>

