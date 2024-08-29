<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>The intention of this project is to showcase my learning path on Vue</h3>
  </div>
</template>

<style scoped></style>
