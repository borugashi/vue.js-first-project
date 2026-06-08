<template>
  <div class="mb-16">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Покупатели о продукте</h2>

    <!-- Загрузка -->
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-500">Загрузка отзывов...</p>
    </div>

    <!-- Свайпер с отзывами -->
    <div v-else-if="reviews.length > 0" class="relative">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="24"
        :pagination="{ clickable: true, el: '.product-reviews-pagination' }"
        :breakpoints="{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }"
        class="product-reviews-swiper"
      >
        <SwiperSlide v-for="review in reviews" :key="review.id">
          <ReviewCard :review="review" :avatar-url="getAvatarUrl(review.id)" />
        </SwiperSlide>
      </Swiper>

      <!-- Пагинация-->
      <div class="product-reviews-pagination flex justify-center gap-2 mt-8"></div>
    </div>

    <!-- Нет отзывов -->
    <div v-else class="text-center py-8 text-gray-500">Пока нет отзывов об этом товаре</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getProductReviews } from "@/api/products";
import ReviewCard from "./ReviewCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const props = defineProps({
  productId: Number,
});

const modules = [Pagination];

const reviews = ref([]);
const loading = ref(false);
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

  try {
    const params = {
      page: currentPage.value,
      per_page: 10,
    };
    const response = await getProductReviews(props.productId, params);
    reviews.value = response.data.data || [];
    totalPages.value = response.data.meta?.last_page || 1;
  } catch (err) {
    console.error("Ошибка загрузки отзывов: ", err);
  } finally {
    loading.value = false;
  }
};

watch(
  () => props.productId,
  () => {
    currentPage.value = 1;
    loadReviews();
  },
);

onMounted(() => {
  loadReviews();
});
</script>

<style>
/* стили точек пагинации*/
.product-reviews-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #d1d5db;
  opacity: 1;
  cursor: pointer;
}

.product-reviews-pagination .swiper-pagination-bullet-active {
  background: #196950;
}
</style>
