<template>
 <NavInterno>
  <template #main><h4>GraphQL</h4></template>
  <template #title1><h4>INICIO</h4></template>
  <template #title2><h4>OPTIONS</h4></template>
 </NavInterno>
    <!-- ********************************** -->
    <div class="" id="section1">
         <v-row class="bg-purple-lighten-4">
      <v-col
       v-for="exercise1 in exercises"
      :key="exercise1.id"
       cols="12"
       sm="6"
       md="4"
       lg="3"
       >
      <v-card
    class="mx-auto my-8 bg-brown-lighten-4"
    elevation="16"
    max-width="344" >
    <v-card-item>
    <v-card-title class="text-purple">{{ exercise1.title }} </v-card-title>
    <v-card-subtitle class="">{{ exercise1.description }}</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    <p><b>Tiempo restante: {{ exercise1.remainingTime }} segundos</b></p>
    </v-card-text>
    <v-card-actions>
    <v-btn @click="startExercise1(exercise1)" :disabled="exercise1.intervalId" class="bg-blue text-white pa-2">
      Iniciar
    </v-btn>
    <v-btn @click="stopExercise1(exercise1)" :disabled="!exercise1.intervalId" class="bg-red text-white">
      Detener
    </v-btn>
    <v-btn :href="exercise1.link" target="_blank" class="bg-teal text-white">
      Ver 
    </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
    </div>
<!-- ********************************************************************** -->
      <div id="section2">
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">Vue2 OPTIONS </h2>
  </v-col>
</v-row>
</div>
<!-- ********************************************************************** -->
</template>
<!-- /////////////////////////////////////////////// -->
<script setup>
  import NavInterno from '@/layouts/NavInterno.vue';
  import { ref } from 'vue';

const exercises = ref([
      { id: 1, title: 'INSTALACIÓN', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/data/graphQL/Instalaciones.html' },
      { id: 2, title: 'BUSCAR', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/data/graphQL/enlace.html' },
      { id: 3, title: 'UNIR CAMPOS', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/data/graphQL/buleano.html' },
      { id: 4, title: 'ANIDAR CAMPOS', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/data/graphQL/anidar.html' },
      { id: 5, title: 'CALCULOS', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/data/graphQL/acciones.html' },
      { id: 6, title: 'MUTACIONES', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/front/vue3/Snippet.html' },
      { id: 7, title: 'ENUM', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/data/graphQL/enum.html' },
    ]);
    const startExercise1 = (exercise1) => {
      if (exercise1.intervalId) return;

      exercise1.intervalId = setInterval(() => {
        if (exercise1.remainingTime > 0) {
          exercise1.remainingTime--
        } else {
          clearInterval(exercise1.intervalId);
          exercise1.intervalId = null;
        }
      }, 1000);
    };
    const stopExercise1 = (exercise1) => {
      clearInterval(exercise1.intervalId);
      exercise1.intervalId = null;
    }; 
</script>
<!-- ******************************* -->
<style scoped>


</style>