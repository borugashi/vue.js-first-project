<template>
  <aside class="w-full lg:w-64 flex-shrink-0 space-y-6">
    <!-- Категории -->
    <div>
      <h3 class="text-lg font-bold text-gray-900 mb-3">Категории</h3>
      <div class="space-y-2">
        <label v-for="category in categories" :key="category.id" class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="radio"
            :value="category.id"
            v-model="selectedCategory"
            @change="$emit('filter-change', { categoryId: selectedCategory })"
            name="category"
            class="w-4 h-4 border-gray-300 text-[#196950] focus:ring-[#196950]"
          />
          {{ category.name }}
        </label>
      </div>
      <button
        v-if="selectedCategory"
        @click="
          selectedCategory = null;
          $emit('filter-change', { categoryId: null });
        "
        class="text-xs text-[#196950] underline mt-2"
      >
        Сбросить
      </button>
    </div>

    <!-- Только новинки -->
    <div>
      <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
        <input
          type="checkbox"
          v-model="isNew"
          @change="$emit('filter-change', { isNew: isNew })"
          class="w-4 h-4 rounded border-gray-300 text-[#196950] focus:ring-[#196950]"
        />
        Только новинки
      </label>
    </div>

    <!-- Цена -->
    <div>
      <h3 class="text-lg font-bold text-gray-900 mb-3">Цена, ₽</h3>
      <div class="flex items-center gap-2 mb-3">
        <input
          type="number"
          v-model.number="priceMin"
          placeholder="0"
          @input="$emit('filter-change', { priceMin: priceMin || null, priceMax: priceMax || null })"
          class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#196950]"
        />
        <span class="text-gray-500">—</span>
        <input
          type="number"
          v-model.number="priceMax"
          placeholder="10000"
          @input="$emit('filter-change', { priceMin: priceMin || null, priceMax: priceMax || null })"
          class="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-[#196950]"
        />
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCategories } from "@/api/categories";
import { useRoute } from "vue-router";

const route = useRoute();
const emit = defineEmits(["filter-change"]);

const categories = ref([]);
const selectedCategory = ref(null);
const isNew = ref(false);
const priceMin = ref(null);
const priceMax = ref(null);

onMounted(async () => {
  try {
    const response = await getCategories();
    categories.value = response.data.data || [];
  } catch (error) {
    console.error("Ошибка загрузки категорий:", error);
  }

  try {
    const response = await getCategories();
    categories.value = response.data.data || [];

    // Читаем category из URL
    if (route.query.category) {
      selectedCategory.value = Number(route.query.category);
      emit("filter-change", { categoryId: selectedCategory.value });
    }
  } catch (error) {
    console.error("Ошибка загрузки категорий:", error);
  }
});
</script>
