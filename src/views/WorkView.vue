<template>
  <div>
   <h1>Hijo</h1> 
   <h2>Te llamas {{ nombre }} y tienes {{ edad }} años</h2>

   <v-btn>Cambiar valores</v-btn>
  </div>
</template>
<!-- ******************************* --> 
<script setup>

const props = defineProps({
  nombre: String,
  edad: Number
})
</script>
<!-- ******************************* -->
<style scoped>

</style>