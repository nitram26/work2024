<template>

  <v-row>
      <v-col cols="12" class="text-center">
          <h2 class="bg-purple-darken-4 pa-4 "> <v-btn @click="toggleDrawer" class="bg-red mx-7">MENU</v-btn>Opciones del Front </h2>
     
    </v-col>
  </v-row>
  <!-- ********************************************* -->
      <v-navigation-drawer
        v-model="drawer"
        class="br-teal-darken-4"
        theme="dark"
        app
      >
        <v-list-item link to="/" title="Home" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item link to="/front" title="Vue2" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
        <!-- <v-list-item link to="/backend" title="Backend" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
        <v-list-item link to="/data" title="Data" prepend-icon="mdi-database-cog-outline"></v-list-item>
        <v-list-item link to="/store" title="Store" prepend-icon="mdi-store"></v-list-item> -->
      </v-navigation-drawer>
    <!-- /////////////////////////////////////// -->
    <v-row>
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
  