<template>
  <v-row class="bg-purple-darken-4 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >STORE </h2>
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
        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front">GITHUB</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">PC & IMPRESORA</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store">VSCODE</v-btn></v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->
    <div id="section1" class="mt-12" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">GITHUB</h3>
    </v-col>
        <!-- ************************************************************ -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/store/TerminalComandos.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> TERMINAL DE COMANDOS  </v-card-title>
      <v-card-subtitle>COMANDOS PARA CARPETAS Y ARCHIVOS</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Sintaxis y ejemplos
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ******************************************************************* -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/store/ASCII.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> ASCII  </v-card-title>
      <v-card-subtitle>COMANDOS PARA SÍMBOLOS</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      CÓDIGOS 
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ******************************************************************* -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/store/GitCommit.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> COMMITS  </v-card-title>
      <v-card-subtitle>EMPLEO DE COMMITS</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Ver algún commit anterior
    </v-card-text>
  </v-card>
  </v-col>
  <!-- *************************************************************** -->
   
      </v-row>
    </div>

      <!-- /////////////////////////////////////////////////////////////////////////////////////-->
      <div id="section2">
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">PC & IMPRESORA</h2>
  </v-col>
  <!-- ****************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/store/mantenimientoLogico.html"
    max-width="344" >
    <v-card-item>
      <v-card-title>Mantenimiento Lógico</v-card-title>
      <v-card-subtitle>proceso</v-card-subtitle>
    </v-card-item>
    <v-card-text>     
      Para PC
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/store/ImpresoraEpson.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Limpieza de cabezales</v-card-title>
      <v-card-subtitle>Epson L3110</v-card-subtitle>
    </v-card-item>
    <v-card-text>     
      incluye link de apoyo
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
    <h2 class="bg-pink-darken-4 pa-4 text-center">VSCODE</h2>
  </v-col>
  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/store/SettingJson.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> SETTING JSON </v-card-title>
      <v-card-subtitle> CÓDIGOS</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Para configurar VSCODE
    </v-card-text>
  </v-card>
</v-col>

  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/store/LiveServer.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> LIVE SERVER </v-card-title>
      <v-card-subtitle> app de vscode</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Problemas con el puerto
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
  