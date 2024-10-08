<template>
  <v-row class="bg-cyan-darken-1 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >VUETIFY view </h2>
    </v-col>
    <v-col cols="1" >

<v-btn icon @click="toggleDrawer" >
    <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
    </v-col>
  </v-row>
  <!-- ********************************************* -->
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
      <v-list>
        <v-list-item link to="/" title="HOME" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item link to="/containment" title="Containment" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
        <v-list-item link to="/navigation" title="Navigation" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
        <v-list-item link to="/formInput" title="Form, inputs & controls" prepend-icon="mdi-database-cog-outline"></v-list-item>
        <v-list-item link to="/backend" title="Layouts" prepend-icon="mdi-store"></v-list-item>
        <v-list-item link to="/backend" title="Selection" prepend-icon="mdi-store"></v-list-item>
        <v-list-item link to="/backend" title="Data & Display" prepend-icon="mdi-store"></v-list-item>
        <v-list-item link to="/backend" title="Feedback" prepend-icon="mdi-store"></v-list-item>
        <v-list-item link to="/backend" title="Images & icons" prepend-icon="mdi-store"></v-list-item>
        <v-list-item link to="/backend" title="Pickers" prepend-icon="mdi-store"></v-list-item>
        <v-list-item link to="/backend" title="Providers" prepend-icon="mdi-store"></v-list-item>
        <v-list-item link to="/backend" title="Miscellaneous" prepend-icon="mdi-store"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ********************************** -->
  <v-row class="mt-12">
    <v-col class="mt-4">
      <h3 class="bg-green-darken-4 pa-4  text-center">INTRODUCCIÓN </h3>
    </v-col>
     
      </v-row>
      <!-- fin de navegador derecho -->
      <v-row class="bg-green-lighten-4">
        <!-- ****************************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/vuetify/instalacion.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> VUETIFY  </v-card-title>
      <v-card-subtitle>Secuencia de Instalación </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Proyectos iniciales y existentes
    </v-card-text>
  </v-card>
  </v-col>
  </v-row>
  
</template>
<!-- /////////////////////////////////////////////////////////////////////////////////////-->

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
  