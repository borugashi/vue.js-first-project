<template>
  <div class="mb-16">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Покупатели о продукте</h2>

    <!-- Загрузка отзывов -->
    <div v-if="loading" class="text-center py-8">
      <p class="text-gray-500">Загрузка отзывов...</p>
    </div>

    <!-- Сетка отзывов -->
    <div v-else-if="reviews.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ReviewCard v-for="review in reviews" :key="review.id" :review="review" :avatar-url="getAvatarUrl(review.id)" />
    </div>

    <div v-else class="text-center py-8 text-gray-500">Пока нет отзывов о этом товаре</div>

    <!-- Точки пагинации -->
    <div v-if="totalPages > 1" class="flex justify-center gap-2 mt-8">
      <span
        v-for="page in totalPages"
        :key="page"
        class="w-2 h-2 rounded-full"
        :class="page === currentPage ? 'bg-[#196950]' : 'bg-gray-300'"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getProductReviews } from "@/api/products";
import ReviewCard from "./ReviewCard.vue";

const props = defineProps({
  productId: Number,
});

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
      per_page: 3,
    };
    const response = await getProductReviews(props.productId, params);
    reviews.value = response.data.data || [];
    totalPages.value = response.data.meta?.last_page || 1;
  } catch (err) {
    console.error("Ошибка загрузки отзывов:", err);
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
