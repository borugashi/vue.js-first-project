<template>
  <section class="bg-[#F0F6F6] py-16 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Популярные категории</h2>

      <!-- Сетка 4 колонки на десктопе -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <!-- Протеин (2 колонки) -->
        <router-link
          to="/catalog?category=1"
          class="lg:col-span-2 rounded-4xl border-3 border-[#196950] p-6 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition"
        >
          <div class="flex-1">
            <p class="text-lg md:text-xl font-bold text-gray-900 mb-4">Протеин</p>
            <ul class="text-sm md:text-base text-gray-700 space-y-2">
              <li>Увеличение мышечной массы</li>
              <li>Улучшение обмена веществ</li>
              <li>Восстановление мышц</li>
              <li>Управление весом</li>
              <li>Поддержка иммунной системы</li>
            </ul>
          </div>
          <img src="/imgs/category-protein.png" alt="Протеин" class="w-40 h-40 md:w-48 md:h-48 object-contain shrink-0" />
        </router-link>

        <!-- Витамины -->
        <router-link
          to="/catalog?category=2"
          class="bg-[#196950] rounded-4xl p-6 flex flex-col items-center justify-center text-white hover:shadow-2xl transition"
        >
          <p class="text-lg md:text-xl font-bold mb-4 text-center">Витамины</p>
          <img src="/imgs/category-vitamins.png" alt="Витамины" class="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </router-link>

        <!-- Аминокислоты -->
        <router-link
          to="/catalog?category=3"
          class="rounded-4xl border-3 border-[#196950] p-6 flex flex-col items-center justify-center hover:shadow-2xl transition"
        >
          <p class="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">Аминокислоты</p>
          <img src="/imgs/category-amino.png" alt="Аминокислоты" class="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </router-link>

        <!-- Креатин -->
        <router-link
          to="/catalog?category=4"
          class="bg-[#196950] rounded-4xl p-6 flex flex-col items-center justify-center text-white hover:shadow-2xl transition"
        >
          <p class="text-lg md:text-xl font-bold mb-4 text-center">Креатин</p>
          <img src="/imgs/category-creatine.png" alt="Креатин" class="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </router-link>

        <!-- Предтрен (2 колонки) -->
        <router-link
          to="/catalog?category=5"
          class="lg:col-span-2 rounded-4xl border-3 border-[#196950] p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-2xl transition"
        >
          <div class="flex-1">
            <p class="text-lg md:text-xl font-bold text-gray-900 mb-4">Предтренировочный комплекс</p>
            <ul class="text-sm md:text-base text-gray-700 space-y-2">
              <li>Увеличение энергии</li>
              <li>Улучшение концентрации</li>
              <li>Увеличение выносливости</li>
              <li>Улучшение кровообращения</li>
              <li>Снижение усталости</li>
            </ul>
          </div>
          <img
            src="/imgs/category-preworkout.png"
            alt="Предтренировочный комплекс"
            class="w-40 h-40 md:w-48 md:h-48 object-contain shrink-0"
          />
        </router-link>

        <!-- Другие категории -->
        <router-link
          to="/catalog?category=6"
          class="bg-[#196950] rounded-4xl p-6 flex flex-col items-center justify-center text-white hover:shadow-2xl transition"
        >
          <p class="text-lg md:text-xl font-bold mb-4 text-center">Другие категории</p>
          <img src="/imgs/category-other.png" alt="Другие категории" class="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </router-link>
      </div>

      <div class="text-center mt-12">
        <router-link
          to="/catalog"
          class="inline-block bg-[#196950] text-white px-10 py-3 rounded-full text-base hover:bg-[#0F4D3C] transition"
        >
          Каталог
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>
