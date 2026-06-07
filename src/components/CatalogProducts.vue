<template>
  <div class="flex-1">
    <div class="flex justify-between items-center mb-6">
      <span class="text-sm text-gray-500">Главная / Каталог</span>
      <select
        v-model="sortBy"
        class="text-sm text-gray-700 border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-[#196950]"
      >
        <option value="">По популярности</option>
        <option value="price_asc">Цена: по возрастанию</option>
        <option value="price_desc">Цена: по убыванию</option>
        <option value="name_asc">Название: А-Я</option>
        <option value="name_desc">Название: Я-А</option>
      </select>
    </div>

    <!-- Загрузка -->
    <div v-if="loading" class="text-center py-12">
      <p class="text-gray-500">Загрузка товаров...</p>
    </div>

    <!-- Ошибка -->
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-500">{{ error }}</p>
    </div>

    <!-- Сетка товаров -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

    <!-- Показать ещё -->
    <div class="text-center mt-10">
      <button
        v-if="currentPage < totalPages"
        @click="loadMore"
        :disabled="loading"
        class="text-sm text-gray-700 underline hover:text-[#196950] transition disabled:opacity-50"
      >
        Показать ещё
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { getProducts } from "@/api/products.js";
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  filters: {
    type: Object,
    default: () => ({}),
  },
});

const products = ref([]);
const loading = ref(false);
const error = ref(null);
const currentPage = ref(1);
const totalPages = ref(1);
const sortBy = ref("");

const loadProducts = async (append = false) => {
  loading.value = true;
  error.value = null;

  try {
    const params = {
      page: currentPage.value,
      per_page: 12,
    };

    if (props.filters.categoryId) {
      params.category_id = props.filters.categoryId;
    }
    if (props.filters.isNew) {
      params.is_new = true;
    }
    if (props.filters.priceMin !== null && props.filters.priceMin !== undefined) {
      params.price_min = props.filters.priceMin;
    }
    if (props.filters.priceMax !== null && props.filters.priceMax !== undefined) {
      params.price_max = props.filters.priceMax;
    }

    // Сортировка
    if (sortBy.value) {
      const [field, direction] = sortBy.value.split("_");
      params.sort_by = field;
      params.sort_direction = direction;
    }

    const response = await getProducts(params);
    const newProducts = response.data.data || [];

    if (append) {
      products.value = [...products.value, ...newProducts];
    } else {
      products.value = newProducts;
    }

    // Пагинация
    totalPages.value = response.data.meta?.last_page || 1;
  } catch (err) {
    error.value = "Ошибка загрузки товаров";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const loadMore = () => {
  currentPage.value++;
  loadProducts(true);
};

// Следим за изменением фильтров
watch(
  () => props.filters,
  () => {
    currentPage.value = 1;
    loadProducts();
  },
  { deep: true },
);

// Следим за изменением сортировки
watch(sortBy, (newValue) => {
  console.log("Сортировка изменена на:", newValue); // Для отладки
  currentPage.value = 1;
  loadProducts();
});

onMounted(() => {
  loadProducts();
});
</script>
