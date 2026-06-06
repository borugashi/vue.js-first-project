<template>
  <section class="bg-[#F0F6F6] py-16 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Популярные категории</h2>

      <!-- Сетка 4 колонки на десктопе -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <!-- Протеин (занимает 2 колонки) -->
        <div
          class="lg:col-span-2 rounded-4xl border-3 border-[#196950] p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-2xl transition"
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
          <img src="/imgs/category-protein.png" alt="Протеин" class="w-40 h-40 md:w-48 md:h-48 object-contain flex-shrink-0" />
        </div>

        <!-- Витамины -->
        <div class="bg-[#196950] rounded-4xl p-6 flex flex-col items-center justify-center text-white hover:shadow-2xl transition">
          <p class="text-lg md:text-xl font-bold mb-4 text-center">Витамины</p>
          <img src="/imgs/category-vitamins.png" alt="Витамины" class="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </div>

        <!-- Аминокислоты -->
        <div class="rounded-4xl border-3 border-[#196950] p-6 flex flex-col items-center justify-center hover:shadow-2xl transition">
          <p class="text-lg md:text-xl font-bold text-gray-900 mb-4 text-center">Аминокислоты</p>
          <img src="/imgs/category-amino.png" alt="Аминокислоты" class="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </div>

        <!-- Креатин -->
        <div class="bg-[#196950] rounded-4xl p-6 flex flex-col items-center justify-center text-white hover:shadow-2xl transition">
          <p class="text-lg md:text-xl font-bold mb-4 text-center">Креатин</p>
          <img src="/imgs/category-creatine.png" alt="Креатин" class="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </div>

        <!-- Предтренировочный комплекс (занимает 2 колонки) -->
        <div
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
            class="w-40 h-40 md:w-48 md:h-48 object-contain flex-shrink-0"
          />
        </div>

        <!-- Другие категории -->
        <div class="bg-[#196950] rounded-4xl p-6 flex flex-col items-center justify-center text-white hover:shadow-2xl transition">
          <p class="text-lg md:text-xl font-bold mb-4 text-center">Другие категории</p>
          <img src="/imgs/category-other.png" alt="Другие категории" class="w-32 h-32 md:w-40 md:h-40 object-contain" />
        </div>
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
