

<template>
  <v-row class="bg-teal-darken-2 pa-2" >
      <v-col cols="11" class="text-center">
          <h2 >ESTUDIOS </h2>
    </v-col>
    <v-col cols="1" >

<v-btn icon @click="toggleDrawer" >
    <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
    </v-col>
  </v-row>
  <!-- ********************************************* -->
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
      <v-list>
        <v-list-item link to="/" title="Carlos" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item link to="/front" title="Vue2" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
        <v-list-item link to="/vue2" title="dos" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
        <v-list-item link to="/store" title="tres" prepend-icon="mdi-database-cog-outline"></v-list-item>
        <v-list-item link to="/backend" title="cuatro" prepend-icon="mdi-store"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- *********************************************** -->
<v-row>
  <!-- columna -->
  <v-col cols="12" class="bg-red-darken-2 text-center">
<h2>Vue3 2024</h2>
  </v-col>
</v-row> 
<v-row>
  <v-col cols="3" class="bg-teal-lighten-5">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5500/src/assets/studium/CrearProyecto.html"
max-width="344" >
<v-card-item>
  <v-card-title> Crear Estructura </v-card-title>
  <v-card-subtitle>Vue.Cli - Vue.Vite</v-card-subtitle>
</v-card-item>
<v-card-text>
Árbol inicial de carpetas
</v-card-text>
</v-card>
  </v-col>
<!-- ****************************************************************************** -->
</v-row>
       
      </template>
<!-- ///////////////////////////////////////////////////// -->
  <script setup>
  import { ref } from 'vue';
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
  </script>
  <!-- ************************************************* -->
      
          
      
        