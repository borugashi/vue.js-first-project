<template>
  <div class="bg-white rounded-2xl border-2 border-[#196950] p-6 flex flex-col h-full">
    <div class="flex items-center gap-4 mb-4">
      <img v-if="avatarUrl" :src="avatarUrl" :alt="review.name" class="w-12 h-12 rounded-full object-cover" />
      <div v-else class="w-12 h-12 rounded-full bg-[#196950]/10 flex items-center justify-center">
        <span class="text-lg font-bold text-[#196950]">
          {{ review.name.charAt(0) }}
        </span>
      </div>
      <p class="text-base font-bold text-gray-900">{{ review.name }}</p>
    </div>

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

    <p class="text-sm md:text-base text-gray-700 leading-relaxed grow">
      {{ review.text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  review: Object,
  avatarUrl: String,
});
</script>
