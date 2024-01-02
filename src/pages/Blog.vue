<script setup>
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = ref(route.params.id); // routesで設定した「:id」と同じ名前
console.log('watch外:', id)

watch(route, ()=> {
  id.value  = route.params.id;
  console.log('watch内:', id.value);
});
</script>

<template>
  <h1>blog page</h1>
  <p>blog id = {{ id }}</p>
</template>
