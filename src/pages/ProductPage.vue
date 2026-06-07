<template>
  <div class="bg-[#F0F6F6] min-h-screen">
    <div class="max-w-7xl mx-auto px-6 py-12">
      <ProductInfo :product-id="productId" />
      <ProductReviews :product-id="productId" />
    </div>

    <ContactsSection />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import ProductInfo from "../components/ProductInfo.vue";
import ProductReviews from "../components/ProductReviews.vue";
import ContactsSection from "../components/ContactsSection.vue";

const route = useRoute();
const productId = route.params.id;
</script>
