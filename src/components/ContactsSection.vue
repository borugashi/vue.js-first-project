<template>
  <section class="bg-[#F0F6F6] py-16 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Контакты</h2>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Контакты -->
        <div class="lg:w-1/2 space-y-6">
          <!-- Телефон -->
          <div class="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <div>
              <p class="text-base md:text-lg text-gray-900 font-semibold">+7 (777) 777-77-77</p>
            </div>
          </div>

          <!-- Адрес -->
          <div class="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <div>
              <p class="text-base md:text-lg text-gray-900 font-semibold">г. Санкт-Петербург, наб. реки Фонтанки, д. 20</p>
            </div>
          </div>

          <!-- почта -->
          <div class="flex items-start gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <div>
              <p class="text-base md:text-lg text-gray-900 font-semibold">help_muscle.ru</p>
            </div>
          </div>

          <!-- Соцсети -->
          <div class="flex gap-10 pt-4">
            <!-- TG -->
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#01b57c] transition">
              <img src="/icons/telegram.svg" alt="Telegram" class="w-full h-full" />
            </a>

            <!-- WhatsApp -->
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#01b57c] transition">
              <img src="/icons/whatsapp.svg" alt="Telegram" class="w-full h-full" />
            </a>

            <!-- VK -->
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#01b57c] transition">
              <img src="/icons/vk.svg" alt="Telegram" class="w-full h-full" />
            </a>
          </div>
        </div>

        <!-- Карта -->
        <div class="lg:w-1/2 h-80 md:h-96 lg:h-auto rounded-2xl overflow-hidden border-3 border-[#196950]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af02ec504c9f64bb00bf32797111f4316f2a8e92b069be4d9c73f9a46d220c9a9&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
