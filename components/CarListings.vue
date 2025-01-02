<template>
  <section class="container mx-auto py-16">
    <h2 class="text-3xl font-bold mb-8 text-center">Featured Cars</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
      <div
        v-for="car in cars"
        :key="car.id"
        class="border rounded-lg p-4 shadow-lg hover:shadow-xl"
      >
        <img :src="car.image" alt="Car image" class="w-full h-48 object-cover rounded " />
        <h3 class="text-xl font-bold mt-4">{{ car.name }}</h3>
        <p class="text-gray-700">{{ car.price }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import car1 from '@/static/car1.png';
import car2 from '@/static/car2.png';
import car3 from '@/static/car3.png';

export default {
  data() {
    return {
      cars: [
        { id: 1, name: 'Tesla Model S', price: '$60,000', image: car1 },
        { id: 2, name: 'BMW X5', price: '$50,000', image: car2 },
        { id: 3, name: 'Audi A6', price: '$40,000', image: car3 },
      ],
    };
  },
};
</script>