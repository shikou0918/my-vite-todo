<script setup>
import BaseButton from './BaseButton.vue';
const emit = defineEmits(['show-click'])
</script>

<template>
  <BaseButton color="green" @on-click="emit('show-click')">編</BaseButton>
</template>
