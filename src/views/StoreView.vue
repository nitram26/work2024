<template>
  <v-container :fluid="true">
   <h1>Padre</h1> 

   <WorkView :nombre="nombre" :edad="edad"/>
  </v-container>
</template>
<!-- ******************************* --> 
<script setup>
import { ref } from 'vue'
import WorkView from './WorkView.vue'

let nombre = ref('Carlos')
let edad = ref(65)
</script>
<!-- ******************************* -->
<style scoped>

</style>