

<template>
  <v-row class="bg-teal-darken-2 pa-2" >
      <v-col cols="11" class="text-center">
          <h2 >VUE3 COMPONENT  </h2>
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
        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front">Vue3 INTRO</v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">Componentes 1</v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store">Componentes 2</v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section4')" prepend-icon="mdi-store">ESTILOS</v-btn></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->
  
    <!-- //////////////////////////////////////////////// -->
    <div id="section1" class="mt-12" >
<v-row>
  <!-- columna -->
  <v-col cols="12" class="bg-red-darken-2 text-center">
<h2>Vue3 Intro</h2>
  </v-col>
</v-row> 
<!-- **************************************************** -->
<v-row class="bg-indigo-lighten-3">
  <v-col cols="3" >
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/CrearProyecto.html"
max-width="344" >
<v-card-item>
  <v-card-title class="text-red"> Crear Estructura </v-card-title>
  <v-card-subtitle>Vue.Cli - Vue.Vite</v-card-subtitle>
</v-card-item>
<v-card-text>
Árbol inicial de carpetas
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
<v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/Snippet.html"
max-width="344" >
<v-card-item>
  <v-card-title class="text-red"> Crear Snippet </v-card-title>
  <v-card-subtitle>link</v-card-subtitle>
</v-card-item>
<v-card-text>
Como instalarlo en VSCode
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/RelacionarComponentes.html"
max-width="344" >
<v-card-item>
  <v-card-title class="text-red"> LLamar un Componente </v-card-title>
  <v-card-subtitle>Relacionar 2 componentes</v-card-subtitle>
</v-card-item>
<v-card-text>
Forma de unir y relacionar Componentes
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->

  <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/InterpolarTexto.html"
max-width="344" >
<v-card-item>
  <v-card-title> Interpolar Texto</v-card-title>
  <v-card-subtitle>link</v-card-subtitle>
</v-card-item>
<v-card-text>
Llamado estático
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/ExampleSelective.html"
max-width="344" >
<v-card-item>
  <v-card-title> ExampleSelective </v-card-title>
  <v-card-subtitle>Condicionales</v-card-subtitle>
</v-card-item>
<v-card-text>
Uso de If y/o Show
</v-card-text>
</v-card>
  </v-col>

<!-- ********************************************************* -->
  <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/Bind.html"
max-width="344" >
<v-card-item>
  <v-card-title>V-BIND </v-card-title>
  <v-card-subtitle>Condicionales reactivas</v-card-subtitle>
</v-card-item>
<v-card-text>
Uso de Bind
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/Model.html"
max-width="344" >
<v-card-item>
  <v-card-title>V-MODEL </v-card-title>
  <v-card-subtitle>Condicionales reactivas</v-card-subtitle>
</v-card-item>
<v-card-text>
Uso de MODEL
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3" >
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/SelectCheckbox.html"
max-width="344" >
<v-card-item>
  <v-card-title>Checkbox</v-card-title>
  <v-card-subtitle>Condicionales reactivas</v-card-subtitle>
</v-card-item>
<v-card-text>
Si no acepta cambia de color y mensaje de no acepta
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/SelectNuevo.html"
max-width="344" >
<v-card-item>
  <v-card-title>Select</v-card-title>
  <v-card-subtitle>Condicionales reactivas</v-card-subtitle>
</v-card-item>
<v-card-text>
Si no acepta cambia de color y mensaje de no acepta
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3" >
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/CondicionalTernario.html"
max-width="344" >
<v-card-item>
  <v-card-title> Condicional Ternaria</v-card-title>
  <v-card-subtitle>Bindear estilos desde style  no ref</v-card-subtitle>
</v-card-item>
<v-card-text>
  &lt;div :class="ahorro >= 500 ? 'azul' : 'rojo'">
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/IfShow.html"
max-width="344" >
<v-card-item>
  <v-card-title> If & Show </v-card-title>
  <v-card-subtitle>Condicionales</v-card-subtitle>
</v-card-item>
<v-card-text>
Características de uso de cada uno
</v-card-text>
</v-card>
  </v-col>
</v-row>
</div>
<!-- //////////////////////////////////////////////////// -->
<div id="section2">
  <v-row class="bg-blue-darken-2 pa-2" >
    <v-col cols="11" class="text-center">
      <h2 >Componentes #1 </h2>
    </v-col>
  </v-row>
  <!-- *************************************************** -->
  <v-row class="bg-cyan-lighten-4">
    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/Contador.html"
max-width="344" >
<v-card-item>
  <v-card-title> Contador </v-card-title>
  <v-card-subtitle>uso de if-show, imagen referencial</v-card-subtitle>
</v-card-item>
<v-card-text>
Que aumente y disminuya +-1
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/ReactividadBasica.html"
max-width="344" >
<v-card-item>
  <v-card-title>Reactividad Básica </v-card-title>
  <v-card-subtitle>Ejemplo con ref</v-card-subtitle>
</v-card-item>
<v-card-text>
Introducción a la reactividad
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
  <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/VforRecorrido.html"
max-width="344" >
<v-card-item>
  <v-card-title> V-FOR </v-card-title>
  <v-card-subtitle>Recorrido Básico</v-card-subtitle>
</v-card-item>
<v-card-text>
Números, palabras, arrays, objetos
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->

  </v-row>
</div>
  <!-- /////////////////////////////////////////////////////// -->
  <div id="section3" class="mt-12" >
  <v-row class="bg-lime-darken-2 pa-2" >
    <v-col cols="11" class="text-center">
      <h2 >Componentes #2 </h2>
    </v-col>
  </v-row>
  <!-- *************************************************** -->
  <v-row class="bg-blue-lighten-4">
    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/PracticaUno.html"
max-width="344" >
<v-card-item>
  <v-card-title> Practica Uno </v-card-title>
  <v-card-subtitle>Uso de nivel1</v-card-subtitle>
</v-card-item>
<v-card-text>
Repaso General
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/OpcionVfor.html"
max-width="344" >
<v-card-item>
  <v-card-title> Opciones con V-for </v-card-title>
  <v-card-subtitle>Cuestionario en Tarjetas</v-card-subtitle>
</v-card-item>
<v-card-text>
  Visor temporal de respuesta usando setTimeout
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/propsVuetres.html"
max-width="344" >
<v-card-item>
  <v-card-title>PROPS </v-card-title>
  <v-card-subtitle>Básico</v-card-subtitle>
</v-card-item>
<v-card-text>
 Interacción de componentes
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
  <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/EmitVue.html"
max-width="344" >
<v-card-item>
  <v-card-title>EMITS </v-card-title>
  <v-card-subtitle>Básico</v-card-subtitle>
</v-card-item>
<v-card-text>
  interacción mediante función
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/PrpsArray.html"
max-width="344" >
<v-card-item>
  <v-card-title>PROPS EN ARRAY </v-card-title>
  <v-card-subtitle>Básico</v-card-subtitle>
</v-card-item>
<v-card-text>
 Interacción de componentes
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->

    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/Injection.html"
max-width="344" >
<v-card-item>
  <v-card-title>INJECTION </v-card-title>
  <v-card-subtitle>Hace el trabajo de Props y Emits</v-card-subtitle>
</v-card-item>
<v-card-text>
 Envía con provide, recibe con injection
</v-card-text>
</v-card>
  </v-col>

<!-- **************************************************** -->
    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/ServicePlaceholder.html"
max-width="344" >
<v-card-item>
  <v-card-title>PLACEHOLDER </v-card-title>
  <v-card-subtitle>Api llamarla desde un componente </v-card-subtitle>
</v-card-item>
<v-card-text>
Reenviar la data a otro componente 
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/Enrutado.html"
max-width="344" >
<v-card-item>
  <v-card-title>ENRUTADO </v-card-title>
  <v-card-subtitle>Uso Path y Name </v-card-subtitle>
</v-card-item>
<v-card-text>
Rutas fijas, dinámicas
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
</v-row>
</div>

  <!-- /////////////////////////////////////////////////////// -->
   <div class="mt-12" id="section4">

  <v-row class="bg-lime-darken-2 pa-2" >
    <v-col cols="11" class="text-center">
      <h2 >ESTILOS </h2>
    </v-col>
  </v-row>
  <!-- *************************************************** -->
  <v-row class="bg-purple-lighten-4">
    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/framework.html"
max-width="344" >
<v-card-item>
  <v-card-title class="text-red"> FRAMEWORKS Y PREPROCESADORES</v-card-title>
  <v-card-subtitle>scss y bootstrap</v-card-subtitle>
</v-card-item>
<v-card-text>
Instalciones y configuraciones
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->

    <v-col cols="3">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href=""
max-width="344" >
<v-card-item>
  <v-card-title>TITLE </v-card-title>
  <v-card-subtitle>subtitle</v-card-subtitle>
</v-card-item>
<v-card-text>
 párrafosss
</v-card-text>
</v-card>
  </v-col>
</v-row>
</div>
<!-- **************************************************** -->
  <!-- /////////////////////////////////////////////////////// -->
      </template>
<!-- ///////////////////////////////////////////////////// -->
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
}
  </script>
  <!-- ************************************************* -->
      
          
      
        