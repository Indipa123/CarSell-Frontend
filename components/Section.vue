<template>
  <div>
    <!-- Image Slider Section -->
    <section class="relative bg-cover bg-center h-screen overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 w-full h-full">
        <div class="image-slider absolute inset-0 w-full h-full">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            alt="Hero Background"
            class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out"
            :class="{ 'opacity-100': currentImageIndex === index }"
          />
        </div>
      </div>

      <!-- Overlay Content -->
      <div
        class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4"
      >
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Happy holidays, with Love.</h1>
        <p class="text-lg md:text-xl mb-6">Celebrate the journeys that bring us together.</p>
        <button class="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Discover more &rarr;
        </button>
      </div>

      <!-- Scroll Button -->
      <div
        class="absolute bottom-8 w-full flex justify-center animate-bounce cursor-pointer"
      >
        <button
          @click="scrollToSection"
          class="bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          Scroll Down &darr;
        </button>
      </div>
    </section>

    <!-- Video Section -->
    <section
      ref="videoSection"
      class="relative h-screen transition-opacity duration-1000 ease-in-out"
    >
      <!-- Video Background -->
      <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
        <source src="@/static/IMG_1900.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <!-- Video Overlay Content -->
      <div
        class="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 bg-black bg-opacity-50"
      >
        <h2 class="text-4xl md:text-6xl font-bold mb-4">Experience the Journey</h2>
        <p class="text-lg md:text-xl mb-6">A drive that inspires memories.</p>
      </div>
    </section>
  </div>
</template>

<script>
import car1 from "@/static/car1.png";
import car2 from "@/static/car2.png";
import car3 from "@/static/car3.png";

export default {
  data() {
    return {
      images: [car1, car2, car3],
      currentImageIndex: 0,
    };
  },
  mounted() {
    this.startImageSlider();
  },
  methods: {
    startImageSlider() {
      setInterval(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
      }, 4000); // Change the image every 4 seconds
    },
    scrollToSection() {
      const section = this.$refs.videoSection;
      section.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.image-slider img {
  transition: opacity 1s ease-in-out;
}

section {
  position: relative;
  z-index: 1;
}

section video {
  z-index: -1;
}
</style>
