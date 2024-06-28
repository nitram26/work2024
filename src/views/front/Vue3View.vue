

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
        <v-list-item link to="/front" title="Intro" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
        <v-list-item link to="/vue2" title="Componentes Básicos" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
        <v-list-item link to="/store" title="tres" prepend-icon="mdi-database-cog-outline"></v-list-item>
        <v-list-item link to="/backend" title="cuatro" prepend-icon="mdi-store"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- *********************************************** -->
<v-row>
  <!-- columna -->
  <v-col cols="12" class="bg-red-darken-2 text-center">
<h2>Vue3 Intro</h2>
  </v-col>
</v-row> 
<v-row>
  <v-col cols="3" class="bg-teal-lighten-5">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/CrearProyecto.html"
max-width="344" >
<v-card-item>
  <v-card-title> Crear Estructura </v-card-title>
  <v-card-subtitle>Vue.Cli - Vue.Vite</v-card-subtitle>
</v-card-item>
<v-card-text>
Árbol inicial de carpetas
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3" class="bg-teal-lighten-5">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/RelacionarComponentes.html"
max-width="344" >
<v-card-item>
  <v-card-title> LLamar un Componente </v-card-title>
  <v-card-subtitle>Relacionar 2 componentes</v-card-subtitle>
</v-card-item>
<v-card-text>
Forma de unir y relacionar Componentes
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3" class="bg-teal-lighten-5">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/Snippet.html"
max-width="344" >
<v-card-item>
  <v-card-title> Crear Snippet </v-card-title>
  <v-card-subtitle>link</v-card-subtitle>
</v-card-item>
<v-card-text>
Como instalarlo en VSCode
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3" class="bg-teal-lighten-5">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/InterpolarTexto.html"
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
  <v-col cols="3" class="bg-teal-lighten-5">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/ExampleSelective.html"
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
<!-- ********************************************************* -->
  <v-col cols="3" class="bg-teal-lighten-5">
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
  <v-col cols="3" class="bg-teal-lighten-5">
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
  <v-col cols="3" class="bg-teal-lighten-5">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/front/vue3/SelectCheckbox.html"
max-width="344" >
<v-card-item>
  <v-card-title>Select & Checkbox</v-card-title>
  <v-card-subtitle>Condicionales reactivas</v-card-subtitle>
</v-card-item>
<v-card-text>
Uso de Select y Checkbox con de vuetify
</v-card-text>
</v-card>
  </v-col>
<!-- ********************************************************* -->
  <v-col cols="3" class="bg-teal-lighten-5">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/CondicionalTernario.html"
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
  <v-col cols="3" class="bg-teal-lighten-5">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/IfShow.html"
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
<!-- //////////////////////////////////////////////////// -->
  <v-row class="bg-blue-darken-2 pa-2" >
    <v-col cols="11" class="text-center">
      <h2 >Componentes #1 </h2>
    </v-col>
  </v-row>
  <!-- *************************************************** -->
  <v-row>
    <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/Contador.html"
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
    <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/ReactividadBasica.html"
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
  <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/VforRecorrido.html"
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
  <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/VmodelUno.html"
max-width="344" >
<v-card-item>
  <v-card-title> V-MODEL </v-card-title>
  <v-card-subtitle>fUNCIONAMIENTO Básico</v-card-subtitle>
</v-card-item>
<v-card-text>
En v-text-field y v-checkbox
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
  </v-row>
  <!-- /////////////////////////////////////////////////////// -->
  <v-row class="bg-lime-darken-2 pa-2" >
    <v-col cols="11" class="text-center">
      <h2 >Componentes #2 </h2>
    </v-col>
  </v-row>
  <!-- *************************************************** -->
  <v-row>
    <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/PracticaUno.html"
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
  <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/CuestionarioVfor.html"
max-width="344" >
<v-card-item>
  <v-card-title>Cuestionario V-FOR </v-card-title>
  <v-card-subtitle>Recorrido de objeto y array</v-card-subtitle>
</v-card-item>
<v-card-text>
Preguntas y respuestas 
</v-card-text>
</v-card>
  </v-col>
  <!-- **************************************************** -->
    <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/OpcionVfor.html"
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
    <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/propsVuetres.html"
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
    <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/EmitVue.html"
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
    <v-col cols="3" class="bg-teal-lighten-4">
    <v-card
class="mx-auto my-8"
elevation="16"
target="_blank"
href="http://127.0.0.1:5501/src/assets/studium/vue3/Injection.html"
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
  </v-row>
  <!-- /////////////////////////////////////////////////////// -->
      </template>
<!-- ///////////////////////////////////////////////////// -->
  <script setup>
  import { ref } from 'vue';
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
  </script>
  <!-- ************************************************* -->
      
          
      
        