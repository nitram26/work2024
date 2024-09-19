<template>
  <v-row class="bg-purple-darken-4 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >SQL SERVER </h2>
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
        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front">INTRODUCCIÓN</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">PROCEDURE</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store">INNER JOIN</v-btn></v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->
    <div id="section1" class="mt-12" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">MiNTRODUCCIÓN</h3>
    </v-col>
        <!-- ****************************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/ModelVue2.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> CREACIÓN  </v-card-title>
      <v-card-subtitle>Secuencia de Desarrollo</v-card-subtitle>
    </v-card-item>
    <v-card-text>
   1. Model
   2. Controller
   3. Pages
   4. Route
   5. Component
   6. Validaciones
    </v-card-text>
  </v-card>
  </v-col>
      </v-row>
    </div>

      <!-- /////////////////////////////////////////////////////////////////////////////////////-->
      <div id="section2">
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">PROCEDIMIENTOS ALMACENADOS </h2>
  </v-col>
  <!-- ****************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/data/sqlServer/procedure.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Color según Estado </v-card-title>
      <v-card-subtitle>Color de acuerdo al cambio de estado</v-card-subtitle>
    </v-card-item>
    <v-card-text>     Ver imagen
    </v-card-text>
  </v-card>
</v-col>

<!-- ********************************************************************** -->
</v-row>
</div>
<!-- ********************************************************************** -->
 <div id="section3">
<v-row class="bg-purple-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4 text-center">INNER JOIN</h2>
  </v-col>
  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/data/sqlServer/innerJoin.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> INNER JOINT </v-card-title>
      <v-card-subtitle> BUSCAR POR RANGO DE FECHA</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Y agrupar por elemento
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->

</v-row>
</div>
</template>
<!-- ******************************* -->
<script setup>
  import { ref } from 'vue';
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
// NAV

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


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
  