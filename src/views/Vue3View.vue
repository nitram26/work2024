
<template>
  <v-app>
   
<span class="text-right">
  <v-btn icon @click="toggleDrawer" >
    <v-icon>{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
  </v-btn>
</span >
<!-- ************************************************* -->
    <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
      <v-list>
        <v-list-item link to="/" title="Home" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item link to="/front" title="uno" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
        <v-list-item link to="/vue2" title="dos" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
        <v-list-item link to="/store" title="tres" prepend-icon="mdi-database-cog-outline"></v-list-item>
        <v-list-item link to="/backend" title="cuatro" prepend-icon="mdi-store"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- Contenido principal de la aplicación -->
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
</script>
