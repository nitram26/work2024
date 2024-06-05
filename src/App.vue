<template>
  <v-app>
    <v-app-bar
      app
      color="teal-darken-4"
      scroll-target="#scrolling-container"
    >
      <!-- botón de menú lateral -->
      <v-btn icon @click="toggleDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-app-bar-title>OPUS</v-app-bar-title>
      <!-- botones de enlace a páginas -->
      <!-- home -->
      <v-app-bar-nav-icon>
        <v-btn to="/">
          <v-img
            src="@/assets/image/CERVERA.png"
            alt="My Image2"
            style="width: 39px; border-radius: 1em;"
          />
        </v-btn>
      </v-app-bar-nav-icon>
      <!-- homeFront -->
      <v-app-bar-nav-icon class="ma-14">
        <v-btn icon="mdi-arrange-bring-to-front" to="/homeFront"></v-btn>
        Traductor
      </v-app-bar-nav-icon>
      <!-- Back -->
      <v-app-bar-nav-icon class="ma-14">
        <v-btn icon="mdi-arrange-send-to-back" to="/backend"></v-btn>
        Chat GPT
      </v-app-bar-nav-icon>
      <!-- Data -->
      <v-app-bar-nav-icon class="ma-14">
        <v-btn icon="mdi-database-cog-outline" to="/data"></v-btn>
        Vuetify
      </v-app-bar-nav-icon>
      <!-- Store -->
      <v-app-bar-nav-icon class="ma-14">
        <v-btn icon="mdi-store" to="/store"></v-btn>
        M Design
      </v-app-bar-nav-icon>
    </v-app-bar>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" color="teal-darken-4" dark>
      <v-list-item link to="/homeFront" title=" FRONT" prepend-icon="mdi-grid" @click="handle"></v-list-item>
      <v-list-item link to="/backend" title="BACK" prepend-icon="mdi-store" @click="handle"></v-list-item>
      <v-list-item link to="/data" title="DATA" prepend-icon="mdi-database-cog-outline" @click="handle"></v-list-item>

      <v-list-item link to="/studium" title="STUDIUM" prepend-icon="mdi-arrange-send-to-back" @click="handle"></v-list-item>
      <v-list-item link to="/project" title="PROYECTOS" prepend-icon="mdi-arrange-bring-to-front"  @click="handle"></v-list-item>
    </v-navigation-drawer>
    <!-- Main y router -->
    <v-main>
      <div id="scrolling-container">
        <router-view />
      </div>
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
 
}
const handle = () => {
  drawer.value = false;
};
</script>

<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000
}
#scrolling-container {
  height: 100vh;
  overflow-y: auto;
}
</style>