<template>

   <button @click="toggleDarkMode" class="p-2 bg-gray-200 dark:bg-gray-700 rounded">
    <span v-if="isDarkMode">🌙</span>
    <span v-else>☀️</span>
  </button>

  <header
    :class="[
      'bg-gray-800 text-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out',
      isVisible ? 'translate-y-0' : '-translate-y-full',
    ]"
  >
    <nav class="flex justify-between items-center container mx-auto p-4 md:p-6">
      <div class="text-xl font-bold">CarSell</div>
      <ul class="flex space-x-10">
        <li><nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link></li>
        <li><nuxt-link to="/about" class="hover:text-gray-400">About</nuxt-link></li>
        <li><nuxt-link to="/contact" class="hover:text-gray-400">Contact</nuxt-link></li>
        <li><nuxt-link to="/login" class="hover:text-gray-400">Login</nuxt-link></li>
      </ul>
    </nav>
    
  </header>
  
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    // Add the scroll event listener
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Clean up the event listener
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.scrollY;

      // Toggle header visibility based on scroll direction
      if (currentScrollPosition > this.lastScrollPosition) {
        // Scrolling down
        this.isVisible = false;
      } else {
        // Scrolling up
        this.isVisible = true;
      }

      // Update the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

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

<style scoped>
header {
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>