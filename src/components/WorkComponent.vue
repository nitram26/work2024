<template>
  <v-card 
  class="mx-auto bg-teal" 
  max-width="400"
  height="177"
  >
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ content }}</v-card-text>
  </v-card>
</template>
<!-- //////////////////////////////////////////////////// -->
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>
<!-- //////////////////////////////////////////////////// -->
<style scoped>

</style>
