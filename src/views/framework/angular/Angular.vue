<template>
  <v-row class="bg-purple-darken-4 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >ANGULAR </h2>
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
    <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">ESTUDIO</v-btn></v-list-item>
        
    <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store">TRES</v-btn></v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->
    <div id="section1" class="mt-12" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">INTRODUCCIÓN </h3>
    </v-col>
        <!-- ****************************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/instalacion.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> INSTALACIÓN  </v-card-title>
      <v-card-subtitle>Requisitos y Procesos</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Nide JS, CLI de Angular
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ********************************************************* -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/DescripcionDeComponente.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> COMPONENTES  </v-card-title>
      <v-card-subtitle>Descripción de App</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Explicación de los archivos
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ********************************************************* -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/CrearComponente.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> CREAR UN COMPONENTE  </v-card-title>
      <v-card-subtitle>Pasos para crear componentes</v-card-subtitle>
    </v-card-item>
    <v-card-text>
   Forma Rápida de hacerlo
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ********************************************************* -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/interpolacion.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> INTERPOLACIÓN  </v-card-title>
      <v-card-subtitle>Básico</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      llamado desde el TS
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ********************************************************* -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/TipadoDDatos.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> TIPADO DE DATOS  </v-card-title>
      <v-card-subtitle>TYPESCRIPT</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Secuencia en diferentes carpetas
    </v-card-text>
  </v-card>
  </v-col>
  <!-- ********************************************************* -->
      </v-row>
    </div>

      <!-- /////////////////////////////////////////////////////////////////////////////////////-->
      <div id="section2">
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">ESTUDIO  </h2>
  </v-col>
  <!-- ****************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/binding.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal"> CONTADOR </v-card-title>
      <v-card-subtitle>QUE AUMENTE Y DISMINUYA</v-card-subtitle>
    </v-card-item>
    <v-card-text> 
      Practica básica de uso 
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/bindingClass.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal"> BINDING </v-card-title>
      <v-card-subtitle>CLASES </v-card-subtitle>
    </v-card-item>
    <v-card-text> 
     Uso de botones para cambiar clases
    </v-card-text>
  </v-card>
</v-col>
<!-- **************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/InputSimple.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal"> INPUT SIMPLE </v-card-title>
      <v-card-subtitle>UNIDO A UN BOTÓN </v-card-subtitle>
    </v-card-item>
    <v-card-text> 
    Lo escrito en el input se vea en consola
    </v-card-text>
  </v-card>
</v-col>
<!-- **************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/condicionalIf.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal"> *ngIf </v-card-title>
      <v-card-subtitle>Uso de If y If-else</v-card-subtitle>
    </v-card-item>
    <v-card-text> 
    Trabajo con las condicionales
    </v-card-text>
  </v-card>
</v-col>
<!-- **************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/ngFor.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal"> *ngFor </v-card-title>
      <v-card-subtitle>Sintaxis del ngFor</v-card-subtitle>
    </v-card-item>
    <v-card-text> 
    Recorrido de un array u objeto
    </v-card-text>
  </v-card>
</v-col>
<!-- **************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/formulario.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal">Formularios </v-card-title>
      <v-card-subtitle>[(ngModel)] </v-card-subtitle>
    </v-card-item>
    <v-card-text> 
    Ejemplo Básico
    </v-card-text>
  </v-card>
</v-col>
<!-- **************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/framework/angular/validaciones.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-teal">Validaciones </v-card-title>
      <v-card-subtitle>Formulario</v-card-subtitle>
    </v-card-item>
    <v-card-text> 
    Con condicional if
    </v-card-text>
  </v-card>
</v-col>
<!-- **************************************************************** -->
</v-row>
</div>
<!-- **************************************************************** -->
 <div id="section3">
<v-row class="bg-purple-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4 text-center">TITLE</h2>
  </v-col>
  <!-- **************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href=""
    max-width="344" >
    <v-card-item>
      <v-card-title> TITLE </v-card-title>
      <v-card-subtitle> SUB TITLE</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    TEXT
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
  