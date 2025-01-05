<template>
  <header
    :class="[
      'bg-gray-800 text-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out',
      isVisible ? 'translate-y-0' : '-translate-y-full',
    ]"
  >
    <nav class="flex justify-between items-center container mx-auto p-4 md:p-6">
      <div class="text-xl font-bold">CarSell</div>
      <ul class="flex space-x-10">
        <li><a href="#" class="hover:text-gray-400">Home</a></li>
        <li><a href="#" class="hover:text-gray-400">About</a></li>
        <li><a href="#" class="hover:text-gray-400">Contact</a></li>
        <li><a href="#" class="hover:text-gray-400">Login</a></li>
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

<style scoped>
header {
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
