<template>
    <section>
      <div>
        <HeroSection />
      </div>
      <div>
        <CarListings />
      </div>
    </section>
  </template>
  
  <script>
  import HeroSection from '@/components/HeroSection.vue';
  import CarListings from '@/components/CarListings.vue';
  
  export default {
    components: {
      HeroSection,
      CarListings,
    },
  };
  </script>
  