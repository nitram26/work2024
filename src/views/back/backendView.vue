<template>
  <MainLayout>
     <template #main> <h1>BACK</h1> </template>
     <template #image1>  <a href="/graph" class="lat">GRAPH</a> </template>
     <template #image2>  <a href="/" class="lat"></a> </template>
     <template #image3>  <a href="/" class="lat"></a> </template>
     <template #image4>  <a href="/" class="lat"></a> </template>
     <template #image5>  <a href="/" class="lat"></a> </template>
     <template #image6>  <a href="/" class="lat"></a> </template>
  </MainLayout>
     <!-- fin de navegador derecho -->
   <!-- ********************************************* -->
    <v-row class="">
     <v-col class="mt-4">
       <h3 class="bg-blue pa-4  text-center">MODELOS </h3>
     </v-col>
    </v-row>
         <!-- ****************************************************************************** -->
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
 </template>
 <!-- /////////////////////////////////////////////////////////////////////////////////////-->
 
 <script setup>
   import MainLayout from '@/layouts/MainLayout.vue';
   import { ref } from 'vue';

   const exercises = ref([
    { id: 1, title: 'CREAR PROYECTO', description: 'VUE CLI - VUE VITE', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/CrearProyecto.html' },
    { id: 2, title: 'CREAR SNIPPET', description: 'LINK', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/Snippet.html' },
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
 h6{
   margin: 1em;
 }
 
 .lat{
   margin-left: 3em;
   margin-top: 1em;
   color: white;
 
 }
 </style>
   