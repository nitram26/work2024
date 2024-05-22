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
        <v-card-title> PÁGINA App.vue </v-card-title>
        <v-card-subtitle>Menu principal y lateral</v-card-subtitle>
      </v-card-item>
      <v-card-text>
     Barra principal de navegación y menu navigation-drawer con las áreas principales
      </v-card-text>
    </v-card> 
        </v-col>
  <!-- ****************************************************************************** -->
      <v-col cols="3" class="bg-teal-lighten-5">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/origin/MenuSecundario.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> SUB TÍTULO  </v-card-title>
        <v-card-subtitle>Menu SECUNDARIO lateral</v-card-subtitle>
      </v-card-item>
      <v-card-text>
     Barra de sub titulo y botón de menu lateral secundario y botón de regresar al principio de página
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
  