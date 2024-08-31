<template>
  <v-row class="bg-purple-darken-4 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >JAVASCRIPT </h2>
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
        <!-- secciones++++++++++++++++++++++++++++++++++++++++ -->
        <v-list-item ><v-btn @click="scrollTo('tipoDatos')" prepend-icon="mdi-arrange-bring-to-front">TIPO DE DATOS</v-btn></v-list-item>
        <v-list-item ><v-btn @click="scrollTo('fecha')" prepend-icon="mdi-arrange-bring-to-front">FECHA Y HORA</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">OPTIONS</v-btn></v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!--///////////////////////////////////////////////////////////////////////// -->
    <div id="tipoDatos" class="mt-12" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">TIPO DE DATOS</h3>
    </v-col>
        <!-- ****************************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/front/javascript/datoString.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> INTRODUCCIÓN  </v-card-title>
      <v-card-subtitle>Escritura y Ordenamiento del Código</v-card-subtitle>
    </v-card-item>
    <v-card-text>
     Extensiones Recomendadas
    </v-card-text>
  </v-card>
  </v-col>
<!-- ************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/front/javascript/tipoString.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal"> STRING  </v-card-title>
      <v-card-subtitle>Cadenas de Texto</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Propiedades y Métodos  
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ************************************************************** -->

        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/front/javascript/datoNumber.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal"> NUMBER  </v-card-title>
      <v-card-subtitle>Cadenas de Texto</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Propiedades y Métodos  
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ************************************************************** -->

        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/front/javascript/funciones.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal"> FUNCIONES  </v-card-title>
      <v-card-subtitle>Tipos de funciones</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Características y usos
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ************************************************************** -->
      </v-row>
    </div>
      <!-- ////////////////////////////////////////////////////////-->
    <div id="fecha" class="mt-12" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">FECHA Y HORA</h3>
    </v-col>
        <!-- ****************************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/front/javascript/FechaActual.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-purple"> FECHA ACTUAL  </v-card-title>
      <v-card-subtitle>traer la fecha y hora actual</v-card-subtitle>
    </v-card-item>
    <v-card-text>
     Formatear para quedarse con la fecha DD/MM/YYYY
    </v-card-text>
  </v-card>
  </v-col>
      </v-row>
    </div>

      <!-- ////////////////////////////////////////////////////////-->
      <div id="section">
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">OPTIONS </h2>
  </v-col>
  <!-- ****************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/TemaMenu.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-blue"> Color según Estado </v-card-title>
      <v-card-subtitle>Color de acuerdo al cambio de estado</v-card-subtitle>
    </v-card-item>
    <v-card-text>     Ver imagen
    </v-card-text>
  </v-card>
</v-col>

<!-- ********************************************************************** -->
</v-row>
</div>
<!-- ////////////////////////////////////////////////////////////////////-->
 <div id="section">
<v-row class="bg-purple-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4 text-center">otro</h2>
  </v-col>
  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-green"> item </v-card-title>
      <v-card-subtitle> item</v-card-subtitle>
    </v-card-item>
    <v-card-text>
  item
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
  