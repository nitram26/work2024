
<template>
  <v-app>
   
<span class="text-right">

  <!-- Botón para abrir/cerrar el navigation drawer -->
  <v-btn icon @click="toggleDrawer" >
    <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
  </v-btn>
</span >
   

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
      <v-list>
        <v-list-item link to="/" title="Home" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item link to="/front" title="uno" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
        <v-list-item link to="/vue2" title="dos" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
        <v-list-item link to="/store" title="tres" prepend-icon="mdi-database-cog-outline"></v-list-item>
        <v-list-item link to="/backend" title="cuatro" prepend-icon="mdi-store"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido de la aplicación -->
    <v-main>
      <!-- Contenido principal de la aplicación -->
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

// Variable para controlar la apertura y cierre del navigation drawer
const drawer = ref(false);

// Función para alternar entre abrir y cerrar el navigation drawer
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>
