<template>
  <v-row class="bg-purple-darken-4 pa-1 mt-14 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >HOME FRONT </h2>
    </v-col>
    <v-col cols="1" >

<v-btn icon @click="toggleDrawer" >
    <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
    </v-col>
  </v-row>
  <!-- ********************************************* -->
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
      <v-list>
        <v-list-item link to="/" title="INICIO" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item link to="/html" title="HTML" prepend-icon="mdi-store"></v-list-item>
        <v-list-item link to="/javascript" title="JavaScript" prepend-icon="mdi-database-cog-outline"></v-list-item>
        <v-list-item link to="/vue2" title="Vue2" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
        <v-list-item link to="/vue3" title="Vue3" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- /////////////////////////////////////// -->
    <v-row class="mt-12">
    <v-col class="mt-4">
      <h3 class="bg-blue pa-4  text-center">MODELOS DE PAGINAS COMPLETAS</h3>
    </v-col>
     
      </v-row>
      <!-- fin de navegador derecho -->
      <v-row class="bg-red-lighten-4">
        <!-- ****************************************************************************** -->

      <v-col cols="3" >
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href=""
      max-width="344" >
      <v-card-item>
        <v-card-title> title </v-card-title>
        <v-card-subtitle>subtitle</v-card-subtitle>
      </v-card-item>
      <v-card-text>
     explicación
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
}
  </script>
  <!-- ******************************* -->
<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 101%;
  z-index: 1000
}

</style>