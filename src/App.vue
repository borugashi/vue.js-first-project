<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="grow">
      <router-view />
      <!-- Здесь будет меняться контент -->
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
