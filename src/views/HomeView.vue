<template>
    <v-row>
      <!-- ****************************************************************************** -->
      <v-col cols="3" class="bg-teal-lighten-5">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/origin/PaginaPrincipal.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> Página Principal </v-card-title>
        <v-card-subtitle>Menu lateral</v-card-subtitle>
      </v-card-item>
      <v-card-text>
     Título y sub menu navigation-drawer
      </v-card-text>
    </v-card> 
        </v-col>
  <!-- ****************************************************************************** -->
      <v-col cols="3" class="bg-teal-lighten-5">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/ModelVue2.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> Model </v-card-title>
        <v-card-subtitle>Proyectos Sursa</v-card-subtitle>
      </v-card-item>
      <v-card-text>
      Modelo básico para los model de Vue2
      </v-card-text>
    </v-card> 
        </v-col>
  <!-- ****************************************************************************** -->
      <v-col cols="3" class="bg-teal-lighten-5">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/ModelVue2.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> Model </v-card-title>
        <v-card-subtitle>Proyectos Sursa</v-card-subtitle>
      </v-card-item>
      <v-card-text>
      Modelo básico para los model de Vue2
      </v-card-text>
    </v-card> 
        </v-col>
  <!-- ****************************************************************************** -->
      <v-col cols="3" class="bg-teal-lighten-5">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/ModelVue2.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> Model </v-card-title>
        <v-card-subtitle>Proyectos Sursa</v-card-subtitle>
      </v-card-item>
      <v-card-text>
      Modelo básico para los model de Vue2
      </v-card-text>
    </v-card> 
        </v-col>
  <!-- ****************************************************************************** -->
  </v-row>
  
  </template>
  <!-- ******************************* --> 
  
  <script setup>
  import { ref } from 'vue';
  
  const drawer = ref(false);
  
  const toggleDrawer = () => {
    drawer.value = !drawer.value;
  };
  </script>
  <!-- ******************************* --> 
  