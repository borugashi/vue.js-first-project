<template>
  <div class="bg-[#F0F6F6] min-h-screen">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Корзина</h1>

      <!-- Пустая корзина -->
      <div v-if="cartItems.length === 0" class="text-center py-16">
        <p class="text-gray-500 text-lg mb-6">Корзина пуста</p>
        <router-link to="/catalog" class="inline-block bg-[#196950] text-white px-8 py-3 rounded-full hover:bg-[#0F4D3C] transition">
          Перейти в каталог
        </router-link>
      </div>

      <!-- Список товаров -->
      <div v-else class="space-y-4 mb-8">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="bg-white rounded-2xl border-2 border-[#196950] p-4 flex flex-col sm:flex-row items-center gap-4"
        >
          <!-- Картинка -->
          <img :src="item.image || '/imgs/placeholder-product.png'" :alt="item.name" class="w-24 h-24 object-contain" />

          <!-- Информация -->
          <div class="flex-1 text-center sm:text-left">
            <h3 class="font-bold text-gray-900">{{ item.name }}</h3>
            <p class="text-[#196950] font-semibold">{{ item.price }} ₽</p>
          </div>

          <!-- Количество -->
          <div class="flex items-center gap-2">
            <button
              @click="updateQuantity(item.id, item.quantity - 1)"
              class="w-8 h-8 rounded-full border border-[#196950] text-[#196950] hover:bg-[#196950] hover:text-white transition"
            >
              −
            </button>
            <span class="w-8 text-center font-semibold">{{ item.quantity }}</span>
            <button
              @click="updateQuantity(item.id, item.quantity + 1)"
              class="w-8 h-8 rounded-full border border-[#196950] text-[#196950] hover:bg-[#196950] hover:text-white transition"
            >
              +
            </button>
          </div>

          <!-- Сумма -->
          <p class="font-bold text-gray-900 w-24 text-center">{{ item.price * item.quantity }} ₽</p>

          <!-- Удалить -->
          <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-700 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Итого -->
      <div
        v-if="cartItems.length > 0"
        class="bg-white rounded-2xl border-2 border-[#196950] p-6 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <div>
          <p class="text-gray-600">Итого:</p>
          <p class="text-3xl font-bold text-gray-900">{{ totalPrice }} ₽</p>
        </div>
        <div class="flex gap-4">
          <button
            @click="clearCart"
            class="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-500 transition"
          >
            Очистить
          </button>
          <button class="px-8 py-3 rounded-full bg-[#196950] text-white hover:bg-[#0F4D3C] transition">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/composables/useCart";

const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
</script>
