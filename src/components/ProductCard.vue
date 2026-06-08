<template>
  <router-link :to="`/products/${product.id}`" class="rounded-4xl p-4 flex flex-col hover:shadow-2xl transition">
    <!-- Картинка + избранное -->
    <div class="relative mb-4 border-[#196950] border-3 rounded-4xl p-4">
      <img :src="product.image || '/imgs/placeholder-product.png'" :alt="product.name" class="w-full h-48 md:h-56 object-contain" />
      <button class="absolute top-4 right-4 text-[#196950] hover:text-red-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>

    <!-- Название -->
    <p class="text-sm md:text-base font-semibold text-gray-900 mb-2">{{ product.name }}</p>

    <!-- Цена -->
    <p class="text-lg md:text-lg font-bold text-gray-900 mb-4">{{ product.price }} ₽</p>

    <!-- Кнопка -->
    <button
      @click.prevent.stop="handleAddToCart"
      class="mt-auto bg-[#196950] text-white py-2 rounded-full text-sm hover:bg-[#0F4D3C] transition"
    >
      В корзину
    </button>
  </router-link>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const props = defineProps({
  product: Object,
});

const { addToCart } = useCart();
const handleAddToCart = () => {
  addToCart(props.product);
};
</script>
