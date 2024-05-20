<template>
  <v-app>
      <v-app-bar scroll-behavior="hide" color="teal-darken-4" >
  <!-- botón de menu lateral -->
      <v-btn icon @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon> </v-btn>
  <v-app-bar-title>OPUS</v-app-bar-title>
<!-- botones de enlace a paginas******************************************** -->
<!-- home -->
  <v-app-bar-nav-icon>
    <v-btn to="/">
    <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
  </v-app-bar-nav-icon>
    <!-- homeFront ***********************************************************-->
  <v-app-bar-nav-icon class="ma-12"><v-btn icon="mdi-arrange-bring-to-front" to="/homeFront"></v-btn>Front</v-app-bar-nav-icon>
  <!-- Back ***********************************************************-->
  <v-app-bar-nav-icon class="ma-12"><v-btn icon="mdi-arrange-send-to-back" to="/backend"></v-btn>
    Back</v-app-bar-nav-icon>
    <!-- Data *********************************************************-->
  <v-app-bar-nav-icon class="ma-12"><v-btn icon="mdi-database-cog-outline" to="/data"></v-btn>Data</v-app-bar-nav-icon>
    <!-- Data *********************************************************-->
  <v-app-bar-nav-icon class="ma-12"><v-btn icon="mdi-store" to="/store"></v-btn>Store</v-app-bar-nav-icon>
</v-app-bar>
    <!-- Navigation Drawer ********************************************************* -->
 <v-navigation-drawer
      v-model="drawer"
      class="br-teal-darken-4"
      theme="dark"
      app
    >
      <v-list-item link to="/" title="Home" prepend-icon="mdi-grid"></v-list-item>
      <v-list-item link :to="ruta1" :title="nombre1" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
      <v-list-item link :to="ruta2" :title="nombre2" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
      <v-list-item link :to="ruta3" :title="nombre3" prepend-icon="mdi-database-cog-outline"></v-list-item>
      <v-list-item link :to="ruta4" :title="nombre4" prepend-icon="mdi-store"></v-list-item>
    </v-navigation-drawer>
    <!-- Main  y router*********************************************************-->
   <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<!-- ********************************************************* -->
<script setup>
import { ref } from 'vue';
// navigation-drawer
const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};



</script>
