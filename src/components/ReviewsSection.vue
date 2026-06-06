<template>
  <section class="bg-[#F0F6F6] py-16 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Покупатели о нас</h2>

      <!-- Сетка отзывов -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <!-- Отзыв 1 -->
        <div class="bg-white rounded-2xl border-3 border-[#196950] p-6 flex flex-col hover:shadow-2xl transition">
          <div class="flex items-center gap-4 mb-4">
            <img src="/imgs/review-1.jpg" alt="Елена К." class="w-12 h-12 rounded-full object-cover" />
            <p class="text-base md:text-lg font-bold text-gray-900">Елена К.</p>
          </div>
          <p class="text-sm md:text-base text-gray-700 leading-relaxed flex-grow">
            "Отличный магазин! Широкий ассортимент и всегда свежие продукты. Заказала протеин и осталась довольна качеством. Рекомендую!"
          </p>
        </div>

        <!-- Отзыв 2 -->
        <div class="bg-white rounded-2xl border-3 border-[#196950] p-6 flex flex-col hover:shadow-2xl transition">
          <div class="flex items-center gap-4 mb-4">
            <img src="/imgs/review-2.jpg" alt="Игорь С." class="w-12 h-12 rounded-full object-cover" />
            <p class="text-base md:text-lg font-bold text-gray-900">Игорь С.</p>
          </div>
          <p class="text-sm md:text-base text-gray-700 leading-relaxed flex-grow">
            Покупаю здесь спортивное питание уже несколько месяцев. Быстрая доставка и приятные цены. Обязательно вернусь за новыми
            покупками!
          </p>
        </div>

        <!-- Отзыв 3 -->
        <div class="bg-white rounded-2xl border-3 border-[#196950] p-6 flex flex-col hover:shadow-2xl transition">
          <div class="flex items-center gap-4 mb-4">
            <img src="/imgs/review-3.jpg" alt="Анна П." class="w-12 h-12 rounded-full object-cover" />
            <p class="text-base md:text-lg font-bold text-gray-900">Анна П.</p>
          </div>
          <p class="text-sm md:text-base text-gray-700 leading-relaxed flex-grow">
            Очень понравилось обслуживание! Консультанты помогают выбрать нужные добавки, а качество товаров на высоте. Спасибо!
          </p>
        </div>
      </div>

      <!-- Точки пагинации -->
      <div class="flex justify-center gap-2 mt-8">
        <span class="w-2 h-2 rounded-full bg-[#196950]"></span>
        <span class="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </div>
  </section>
</template>

<script setup></script>
