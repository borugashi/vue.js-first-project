<template>
  <footer class="bg-[#F0F6F6] py-8 md:py-12 px-6 border-t border-[#196950]">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8">
        <!-- Меню слева -->
        <nav class="flex flex-col gap-2">
          <router-link to="/about" class="text-sm text-gray-700 hover:text-[#196950] transition">О нас</router-link>
          <router-link to="/catalog" class="text-sm text-gray-700 hover:text-[#196950] transition">Направления</router-link>
          <router-link to="/catalog" class="text-sm text-gray-700 hover:text-[#196950] transition">Тренеры</router-link>
          <router-link to="/catalog" class="text-sm text-gray-700 hover:text-[#196950] transition">Абонементы</router-link>
          <router-link to="/catalog" class="text-sm text-gray-700 hover:text-[#196950] transition">Расписание занятий</router-link>
          <router-link to="/contacts" class="text-sm text-gray-700 hover:text-[#196950] transition">Контакты</router-link>
        </nav>

        <!-- Контакты справа -->
        <div class="text-right space-y-2">
          <p class="text-sm text-gray-900 font-semibold">+7 (777) 777-77-77</p>
          <p class="text-sm text-gray-700">help_muscle.ru</p>
          <p class="text-sm text-gray-700">г. Санкт-Петербург, наб. реки Фонтанки, д. 20</p>
        </div>
      </div>

      <!-- Соцсети -->
      <div class="flex gap-10 pt-4 justify-end">
        <!-- Telegram -->
        <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#01b57c] transition">
          <img src="/icons/telegram.svg" alt="Telegram" class="w-full h-full" />
        </a>

        <!-- WhatsApp -->
        <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#01b57c] transition">
          <img src="/icons/whatsapp.svg" alt="Telegram" class="w-full h-full" />
        </a>

        <!-- VK -->
        <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#01b57c] transition">
          <img src="/icons/vk.svg" alt="Telegram" class="w-full h-full" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
