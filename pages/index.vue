<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Provet Input Test</h1>
    <div class="space-y-4">
      <provet-input
        label="Test Input"
        placeholder="Enter some text"
        v-model="inputValue"
      />
      <div class="text-sm text-gray-600">
        Current value: {{ inputValue }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputValue = ref('')
</script>
