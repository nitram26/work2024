<template>
  <v-container :fluid="true">
   <h1>PADRE MÉTODO INJECTION</h1> <br><br>

   <WorkView/>
  </v-container>
</template>
<!-- ******************************* --> 
<script setup>
import { provide, ref } from 'vue'
import WorkView from './WorkView.vue'

let canal = ref('Sofia')
provide('mi canal', canal)
</script>
<!-- ******************************* -->
<style scoped>

</style>