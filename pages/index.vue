<!-- <template>
    <section>
      <div>
        <DarkModeToggle />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Section />  
      </div>  

      <div>
        <HeroSection />
      </div>

      <div>
        <CarListings />
      </div>

      <div>
        <Footer />
      </div>

      

    </section>
  </template>
  
  <script>
  import DarkModeToggle from '~/components/DarkModeToggle.vue';
  import HeroSection from '@/components/HeroSection.vue';
  import CarListings from '@/components/CarListings.vue';
  
  export default {
    components: {
      DarkModeToggle,
      HeroSection,
      CarListings,
    },
  };
  </script> -->

  

 <!-- pages/index.vue -->
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-xl font-bold mb-4">Pinia State Management Example</h1>
    <Profile />
    <EditUser />
  </div>
</template>

<script setup>
import Profile from '@/components/Profile.vue';
import EditUser from '@/components/EditUser.vue';
</script>
