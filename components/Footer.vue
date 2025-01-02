<template>
  <footer class="bg-gray-900 text-white py-6 md:py-10 lg:py-12">
    <!-- Main Footer Content -->
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-8">
      <!-- Community Section -->
      <div>
        <h3 class="font-bold mb-4">Community</h3>
        <ul>
          <li><a href="#" class="hover:text-gray-400">Nuxters</a></li>
          <li><a href="#" class="hover:text-gray-400">Team</a></li>
          <li><a href="#" class="hover:text-gray-400">Design Kit</a></li>
        </ul>
      </div>

      <!-- Products Section -->
      <div>
        <h3 class="font-bold mb-4">Products</h3>
        <ul>
          <li><a href="#" class="hover:text-gray-400">Nuxt UI Pro</a></li>
          <li><a href="#" class="hover:text-gray-400">Nuxt Studio</a></li>
          <li><a href="#" class="hover:text-gray-400">NuxtHub</a></li>
        </ul>
      </div>

      <!-- Enterprise Section -->
      <div>
        <h3 class="font-bold mb-4">Enterprise</h3>
        <ul>
          <li><a href="#" class="hover:text-gray-400">Support</a></li>
          <li><a href="#" class="hover:text-gray-400">Agencies</a></li>
          <li><a href="#" class="hover:text-gray-400">Sponsors</a></li>
        </ul>
      </div>

      <!-- Newsletter Subscription -->
      <div>
        <h3 class="font-bold mb-4">Subscribe to our newsletter</h3>
        <p class="text-sm text-gray-400 mb-4">
          Stay updated on new releases, features, and community updates.
        </p>
        <form class="flex">
          <input
            type="email"
            placeholder="you@domain.com"
            class="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <button
            type="submit"
            class="bg-white text-gray-900 px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-100"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Footer Bottom Section -->
    <div class="border-t border-gray-700 mt-10 pt-6 px-4 sm:px-6 md:px-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2016-2025 Nuxt - MIT License</p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-white">X</a>
          <a href="#" class="hover:text-white">🐦</a>
          <a href="#" class="hover:text-white">LinkedIn</a>
          <a href="#" class="hover:text-white">Discord</a>
          <a href="#" class="hover:text-white">GitHub</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-family: Arial, sans-serif;
}
</style>
