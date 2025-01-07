// filepath: /e:/Intern-project/components/DarkModeToggle.vue
<template>
  <button @click="toggleDarkMode" class="p-2 bg-gray-200 dark:bg-gray-700 rounded">
    <span v-if="isDarkMode">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {
    this.isDarkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    },
  },
};
</script>