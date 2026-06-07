<template>
  <div class="bg-[#F0F6F6] min-h-screen">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Фильтры слева -->
        <CatalogFilters @filter-change="updateFilters" />

        <!-- Товары справа -->
        <CatalogProducts :filters="filters" />
      </div>
    </div>

    <!-- Контакты -->
    <ContactsSection />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CatalogFilters from "../components/CatalogFilters.vue";
import CatalogProducts from "../components/CatalogProducts.vue";
import ContactsSection from "../components/ContactsSection.vue";

const filters = ref({
  categoryId: null,
  isNew: false,
  priceMin: null,
  priceMax: null,
});

const updateFilters = (newFilters) => {
  filters.value = { ...filters.value, ...newFilters };
};
</script>
