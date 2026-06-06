<template>
  <section class="bg-[#F0F6F6] py-16 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Новинки</h2>

      <!-- Сетка карточек -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";

// Фейковые данные (потом заменить на API)
const products = ref([
  {
    id: 1,
    name: "Протеин сывороточный",
    price: 2342,
    image: "/imgs/product-1.png",
  },
  {
    id: 2,
    name: "Шейкер металлический",
    price: 871,
    image: "/imgs/product-2.png",
  },
  {
    id: 3,
    name: "Витамины Omega 3",
    price: 1012,
    image: "/imgs/product-3.png",
  },
  {
    id: 4,
    name: "Pre-workout, 60 капсул",
    price: 477,
    image: "/imgs/product-4.png",
  },
]);
</script>
