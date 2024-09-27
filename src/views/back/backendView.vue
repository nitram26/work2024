<template>
  <MainLayout>
     <template #main> <h1>BACK</h1> </template>
     <template #image1>  <a href="/graph" class="lat">GRAPH</a> </template>
     <template #image2>  <a href="/graph" class="lat">SQL Server</a> </template>
     <template #image3>  <a href="/graph" class="lat">MongoDB</a> </template>
     <template #image4>  <a href="/graph" class="lat">Sequlize</a> </template>
     <template #image5>  <a href="/graph" class="lat">PhpMyAdmin</a> </template>
     <template #image6>  <a href="/graph" class="lat">SQL</a> </template>
    
      
  </MainLayout>
   <!-- ********************************************* -->
    <v-row class="mt-12">
     <v-col class="mt-4">
       <h3 class="bg-blue pa-4  text-center">MODELOS </h3>
     </v-col>
      
       </v-row>
       <!-- fin de navegador derecho -->
       <v-row class="bg-red-lighten-4">
         <!-- ****************************************************************************** -->
         <v-col cols="3">
       <v-card
     class="mx-auto my-8"
     elevation="16"
     target="_blank"
     href="http://127.0.0.1:5501/src/assets/vue2/ModelVue2.html"
     max-width="344" >
     <v-card-item>
       <v-card-title class="text-red"> CREACIÓN  </v-card-title>
       <v-card-subtitle>Secuencia de Desarrollo</v-card-subtitle>
     </v-card-item>
     <v-card-text>
     Model
     </v-card-text>
   </v-card>
   </v-col>
   </v-row>
 </template>
 <!-- /////////////////////////////////////////////////////////////////////////////////////-->
 
 <script setup>
   import MainLayout from '@/layouts/MainLayout.vue';
 
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
   