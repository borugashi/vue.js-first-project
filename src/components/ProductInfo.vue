<template>
  <div>
    <!-- Загрузка -->
    <div v-if="loading" class="text-center py-12">
      <p class="text-gray-500">Загрузка товара...</p>
    </div>

    <!-- Ошибка -->
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-500">{{ error }}</p>
    </div>

    <!-- Товар -->
    <div v-else-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      <!-- Блок с картинками-->
      <div class="flex gap-4">
        <!-- Маленькие превью -->
        <div class="hidden lg:flex flex-col gap-4 w-1/3 flex-shrink-0">
          <div
            v-for="i in 3"
            :key="i"
            class="rounded-xl border-2 border-[#196950] overflow-hidden cursor-pointer hover:opacity-80 transition"
          >
            <img
              :src="product.image || '/imgs/placeholder-product.png'"
              :alt="`${product.name} - вид ${i}`"
              class="w-full h-24 object-cover"
            />
          </div>
        </div>

        <!-- Большая картинка-->
        <div class="flex-1 rounded-2xl border-2 border-[#196950] overflow-hidden">
          <img :src="product.image || '/imgs/placeholder-product.png'" :alt="product.name" class="w-full h-auto object-cover" />
        </div>
      </div>

      <!-- Информация о товаре -->
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {{ product.name }}
        </h1>

        <div class="space-y-4 mb-8">
          <div class="flex justify-between border-b border-gray-200 pb-2">
            <span class="text-gray-600">Вес товара, г:</span>
            <span class="font-semibold text-gray-900">{{ product.weight }}</span>
          </div>

          <div class="flex justify-between border-b border-gray-200 pb-2">
            <span class="text-gray-600">Вкусовой акцент (вкус):</span>
            <span class="font-semibold text-gray-900">{{ product.flavor }}</span>
          </div>

          <div class="flex justify-between border-b border-gray-200 pb-2">
            <span class="text-gray-600">Состав:</span>
            <span class="font-semibold text-gray-900">{{ product.composition }}</span>
          </div>
        </div>

        <p class="text-gray-700 leading-relaxed mb-8">
          {{ product.description }}
        </p>

        <div class="flex items-center gap-6">
          <span class="text-3xl font-bold text-gray-900">{{ product.price }} ₽</span>
          <button
            @click="handleAddToCart"
            class="flex-1 bg-[#196950] text-white px-8 py-3 rounded-full text-base hover:bg-[#0F4D3C] transition"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getProductById } from "@/api/products";
import { useCart } from "@/composables/useCart";

const { addToCart } = useCart();

const handleAddToCart = () => {
  if (product.value) {
    addToCart(product.value);
  }
};

const props = defineProps({
  productId: [String, Number],
});

const product = ref(null);
const loading = ref(false);
const error = ref(null);

const loadProduct = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await getProductById(props.productId);
    product.value = response.data.data || response.data;
  } catch (err) {
    error.value = "Ошибка загрузки товара";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadProduct();
});
</script>
