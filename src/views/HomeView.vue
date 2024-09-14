<template>
  <v-row class="bg-cyan-darken-1 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >HOME </h2>
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
        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front">MODELOS DE PAG</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">OPTIONS</v-btn></v-list-item>
        <v-list-item ><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store">PROCESSUS</v-btn></v-list-item>
      </v-list>
    </v-navigation-drawer>
  <v-row class="mt-12">
    <v-col class="mt-4">
      <h3 class="bg-green-darken-4 pa-4  text-center"> MODELOS</h3>
    </v-col>
     
      </v-row>
      <!-- fin de navegador derecho -->
     <div id="section1" class="mt-12" >
      <v-row class="bg-red-lighten-4">
        <!-- ****************************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/home/ElementosRapidos.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-purple"> HTML  </v-card-title>
      <v-card-subtitle>Plantilla para Enlaces</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Plantilla para referencia a HTML
    </v-card-text>
  </v-card>
  </v-col>
<!-- *************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/home/PaginaPrincipal.html"
    max-width="344" >
    <v-card-item>
      <v-card-title  class="text-purple"> Navegador Principal  </v-card-title>
      <v-card-subtitle>Header del App</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Plantilla para iniciar
    </v-card-text>
  </v-card>
  </v-col>
<!-- *************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/home/MenuPrimario.html"
    max-width="344" >
    <v-card-item>
      <v-card-title  class="text-purple"> Menu Primario  </v-card-title>
      <v-card-subtitle>Para sub-página principal</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Antes del navegador interno
    </v-card-text>
  </v-card>
  </v-col>
<!-- *************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/home/MenuSecundario.html"
    max-width="344" >
    <v-card-item>
      <v-card-title  class="text-purple"> Menu Secundario  </v-card-title>
      <v-card-subtitle>Plantilla para páginas</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Para navegador dentro de página
    </v-card-text>
  </v-card>
  </v-col>
<!-- *************************************************************** -->
 
 
      </v-row>
    </div>
      <!-- *****************************************************************-->
      <div id="section2" class="mt-12" >
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4"> OPTIONS </h2>
  </v-col>
  <!-- ****************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/home/ManagerNvm.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-indigo"> NVM </v-card-title>
      <v-card-subtitle>Manager de NODE</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      INSTACIÓN Y USO
    </v-card-text>
  </v-card>
</v-col>
<!-- ************************************************************ -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/home/ColoresVuetify.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-indigo"> COLORES </v-card-title>
      <v-card-subtitle>VUETIFY</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Paleta de Colores 
    </v-card-text>
  </v-card>
</v-col>
<!-- ************************************************************ -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/home/EnlacesReferencias.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-indigo"> TUTORIALES </v-card-title>
      <v-card-subtitle>REFERENCIAS</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Enlaces 
    </v-card-text>
  </v-card>
</v-col>
<!-- ************************************************************ -->
</v-row>
  </div>
<!-- ************************************************************ -->
<div id="section3" class="mt-12" >
<v-row class="bg-purple-lighten-4 text-center">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">PROCESSUS</h2>
  </v-col>
  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/home/ProcesoHora.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-blue"> ITER CONVERSIONIS </v-card-title>
      <v-card-subtitle>detalle HORA</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Alarma, reflexión y tarea.
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
</v-row>
</div>
</template>
<!-- ///////////////////////////////////////////////////////////// -->
<script setup>
  import { ref } from 'vue';
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}

// NAV interno
const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
<!-- /////////////////////////////////////////////////////////// -->
<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 101%;
  z-index: 1000
}

</style>