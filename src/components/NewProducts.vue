<template>
  <section class="bg-[#F0F6F6] py-16 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Новинки</h2>

      <!-- Загрузка -->
      <div v-if="loading" class="text-center py-12">
        <p class="text-gray-500">Загрузка...</p>
      </div>

      <!-- Ошибка -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-500">{{ error }}</p>
      </div>

      <!-- Сетка с карточками -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getProducts } from "@/api/products";
import ProductCard from "./ProductCard.vue";

const products = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const response = await getProducts({ is_new: true, per_page: 4 });
    products.value = response.data.data || [];
  } catch (err) {
    error.value = "Ошибка загрузки новинок";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>
