<template>
    <div>
      <Header />
      <nuxt />
      <Section />
      <HeroSection />
      <CarListings />
      <Footer />
      
      
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Section from '@/components/Section.vue';
  import HeroSection from '@/components/HeroSection.vue';
  import CarListings from '@/components/CarListings.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    components: {
      Header,
      Section,
      HeroSection,
      CarListings,
      Footer,
    },
  };
  </script>
  