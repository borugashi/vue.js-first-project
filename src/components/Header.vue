<template>
  <header class="bg-white sticky top-0 z-50 shadow-2xs">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 py-3">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-3xl font-serif font-bold text-gray-900">Мускул</router-link>

        <!-- Десктопное меню -->
        <nav class="hidden md:flex gap-8">
          <router-link to="/" class="text-gray-700 hover:text-[#196950] transition">Главная</router-link>
          <router-link to="/#about" class="text-gray-700 hover:text-[#196950] transition">О нас</router-link>
          <router-link to="/#new" class="text-gray-700 hover:text-[#196950] transition">Новинки</router-link>
          <router-link to="/#popular" class="text-gray-700 hover:text-[#196950] transition">Популярное</router-link>
          <router-link to="/#reviews" class="text-gray-700 hover:text-[#196950] transition">Отзывы</router-link>
          <router-link to="/#contacts" class="text-gray-700 hover:text-[#196950] transition">Контакты</router-link>
        </nav>

        <!-- Иконки -->
        <div class="flex gap-4 items-center">
          <button class="text-gray-700 hover:text-[#1A6B54] transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
          <button class="text-gray-700 hover:text-[#1A6B54] transition relative">
            <router-link to="/cart" class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span
                v-if="totalCount > 0"
                class="absolute -top-2 -right-2 bg-[#196950] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
              >
                {{ totalCount }}
              </span>
            </router-link>
          </button>

          <!-- Бургер-меню для мобилок -->
          <button @click="menuOpen = !menuOpen" class="lg:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div v-if="menuOpen" class="lg:hidden mt-4 pb-4 flex flex-col gap-3">
        <router-link to="/" class="text-gray-700 hover:text-[#196950] transition">Главная</router-link>
        <router-link to="/#about" class="text-gray-700 hover:text-[#196950] transition">О нас</router-link>
        <router-link to="/#new" class="text-gray-700 hover:text-[#196950] transition">Новинки</router-link>
        <router-link to="/#popular" class="text-gray-700 hover:text-[#196950] transition">Популярное</router-link>
        <router-link to="/#reviews" class="text-gray-700 hover:text-[#196950] transition">Отзывы</router-link>
        <router-link to="/#contacts" class="text-gray-700 hover:text-[#196950] transition">Контакты</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

import { useCart } from "@/composables/useCart";
const { totalCount } = useCart();
</script>
