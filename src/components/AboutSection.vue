<template>
  <section class="bg-[#F0F6F6] py-16 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">О нас</h2>

      <!-- Картинка + текст -->
      <div class="flex flex-col md:flex-row gap-8 md:gap-12">
        <!-- Картинка с кнопкой-->
        <div class="relative w-full md:w-1/2 rounded-2xl overflow-hidden">
          <img src="/imgs/about-img.jpg" alt="О компании" class="w-full h-auto object-cover" />
          <!-- Кнопка-->
          <button
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-white transition shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </button>
        </div>

        <!--Текст -->
        <div class="w-full md:w-2/3">
          <p class="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
            Мы — команда энтузиастов, стремящихся помочь вам достичь фитнес-целей с помощью качественного спортивного питания. В нашем
            ассортименте — протеиновые порошки, аминокислоты, витамины и энергетические добавки, разработанные на основе современных научных
            исследований.
          </p>
          <p class="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
            Мы предлагаем индивидуальный подход и профессиональные консультации, чтобы помочь вам выбрать оптимальные продукты. Качество —
            наш главный приоритет: мы работаем только с проверенными производителями и контролируем каждый этап производства.
          </p>
          <p class="text-sm md:text-base text-gray-700 leading-relaxed">
            Присоединяйтесь к "Мускул" и начните свой путь к здоровью и силе уже сегодня!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
