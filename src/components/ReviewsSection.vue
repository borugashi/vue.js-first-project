<template>
  <section class="bg-[#F0F6F6] py-16 md:py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Покупатели о нас</h2>

      <!-- Загрузка -->
      <div v-if="loading" class="text-center py-12">
        <p class="text-gray-500">Загрузка отзывов...</p>
      </div>

      <!-- Ошибка -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-500">{{ error }}</p>
      </div>

      <!-- Swiper с отзывами -->
      <div v-else class="relative">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="24"
          :pagination="{ clickable: true, el: '.reviews-pagination' }"
          :breakpoints="{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }"
          class="reviews-swiper"
        >
          <SwiperSlide v-for="review in reviews" :key="review.id">
            <div class="bg-white rounded-4xl border-3 border-[#196950] p-6 flex flex-col h-full">
              <div class="flex items-center gap-4 mb-4">
                <img :src="getAvatarUrl(review.id)" :alt="review.name" class="w-12 h-12 rounded-full object-cover" />
                <p class="text-base md:text-lg font-bold text-gray-900">
                  {{ review.name }}
                </p>
              </div>

              <!-- Рейтинг (звёзды) -->
              <div class="flex gap-1 mb-3">
                <svg
                  v-for="star in 5"
                  :key="star"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  :fill="star <= review.rating ? '#196950' : '#E5E7EB'"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>

              <p class="text-sm md:text-base text-gray-700 leading-relaxed flex-grow">
                {{ review.text }}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Пагинация вне Swiper -->
        <div class="reviews-pagination flex justify-center gap-2 mt-8"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getStoreReviews } from "@/api/products";

const modules = [Pagination];

const reviews = ref([]);
const loading = ref(false);
const error = ref(null);
const currentPage = ref(1);
const totalPages = ref(1);

// Маппинг аватарок по ID отзывов
const avatarMap = {
  1: "/imgs/review-1.jpg",
  2: "/imgs/review-2.jpg",
  3: "/imgs/review-3.jpg",
  4: "/imgs/review-4.jpg",
  5: "/imgs/review-5.jpg",
  6: "/imgs/review-6.jpg",
};

const getAvatarUrl = (reviewId) => {
  return avatarMap[reviewId] || "/imgs/review-1.jpg";
};

const loadReviews = async () => {
  loading.value = true;
  error.value = null;

  try {
    const params = {
      page: currentPage.value,
      per_page: 10,
    };

    const response = await getStoreReviews(params);
    reviews.value = response.data.data || [];
    totalPages.value = response.data.meta?.last_page || 1;
  } catch (err) {
    error.value = "Ошибка загрузки отзывов";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadReviews();
});
</script>

<style>
/* стилизация точек пагинации */
.reviews-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #d1d5db;
  opacity: 1;
  cursor: pointer;
}

.reviews-pagination .swiper-pagination-bullet-active {
  background: #196950;
}
</style>
