<template>
  <section class="relative w-full h-[600px] md:h-[900px] overflow-hidden">
    <!-- Картинка фоновая -->
    <img src="/imgs/hero-img-full.png" alt="Спортивное питание" class="absolute inset-0 w-full h-full object-cover z-0" />

    <!-- Текст -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-20 md:pt-32">
      <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 max-w-4xl leading-tight">
        Добро пожаловать в "Мускул" — ваш источник энергии и силы!
      </h1>
      <p class="text-sm md:text-base text-gray-700 mb-6 md:mb-8 max-w-3xl leading-relaxed">
        Мы предлагаем широкий ассортимент спортивного питания, созданного для достижения ваших фитнес-целей. Наша продукция включает
        протеины, аминокислоты, витамины и энергетические добавки, которые помогут вам повысить выносливость, ускорить восстановление и
        улучшить результаты тренировок.
      </p>
      <router-link
        to="/catalog"
        class="inline-block bg-[#196950] text-white px-8 py-2.5 md:px-10 md:py-3 rounded-full text-sm md:text-base hover:bg-[#0F4D3C] transition"
      >
        Каталог
      </router-link>
    </div>
  </section>
</template>

<script setup></script>
