<template>
  <v-row class="bg-teal-darken-2 pa-2" >
      <v-col cols="11" class="text-center">
          <h2>VUE3 COMPONENT  </h2>
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

        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">COMPONENTES</v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store">ESTILOS</v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section4')" prepend-icon="mdi-store"></v-btn></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->  
  <!-- /////////////////////////////////////////////////////// -->
   <div class="mt-12" id="section1">

  <v-row class="bg-purple pa-2" >
    <v-col cols="11" class="text-center">
      <h2 >INTRODUCCIÓN </h2>
    </v-col>
  </v-row>
  <!-- *************************************************** -->
  <v-row class="bg-purple-lighten-4">
    <v-col
     v-for="exercise1 in exercises"
    :key="exercise1.id"
     cols="12"
     sm="6"
     md="4"
     lg="3"
     >
    <v-card
class="mx-auto my-8 bg-brown-lighten-4"
elevation="16"
max-width="344" >
<v-card-item>
  <v-card-title class="text-purple">{{ exercise1.title }} </v-card-title>
  <v-card-subtitle class="">{{ exercise1.description }}</v-card-subtitle>
</v-card-item>
<v-card-text>
  <p><b>Tiempo restante: {{ exercise1.remainingTime }} segundos</b></p>
</v-card-text>
<v-card-actions>
  <v-btn @click="startExercise1(exercise1)" :disabled="exercise1.intervalId" class="bg-blue text-white pa-2">
    Iniciar
  </v-btn>
  <v-btn @click="stopExercise1(exercise1)" :disabled="!exercise1.intervalId" class="bg-red text-white">
    Detener
  </v-btn>
  <v-btn :href="exercise1.link" target="_blank" class="bg-teal text-white">
    Ver 
  </v-btn>
  </v-card-actions>
</v-card>
  </v-col>
</v-row>
</div>
<!-- /////////////////////////////////////////////////////// -->

   <div class="mt-12" id="section2">

  <v-row class="bg-indigo pa-2" >
    <v-col cols="11" class="text-center">
      <h2 >COMPONENTES </h2>
    </v-col>
  </v-row>
  <!-- *************************************************** -->
  <v-row class="bg-indigo-lighten-4">
    <v-col
     v-for="exercise2 in exercises2"
    :key="exercise2.id"
     cols="12"
     sm="6"
     md="4"
     lg="3"
     >
    <v-card
class="mx-auto my-8 bg-brown-lighten-4"
elevation="16"
max-width="344" >
<v-card-item>
  <v-card-title class="text-indigo">{{ exercise2.title }} </v-card-title>
  <v-card-subtitle class="">{{ exercise2.description }}</v-card-subtitle>
</v-card-item>
<v-card-text>
  <p><b>Tiempo restante: {{ exercise2.remainingTime }} segundos</b></p>
</v-card-text>
<v-card-actions>
  <v-btn @click="startExercise2(exercise2)" :disabled="exercise2.intervalId" class="bg-blue text-white pa-2">
    Iniciar
  </v-btn>
  <v-btn @click="stopExercise2(exercise2)" :disabled="!exercise2.intervalId" class="bg-red text-white">
    Detener
  </v-btn>
  <v-btn :href="exercise2.link" target="_blank" class="bg-teal text-white">
    Ver 
  </v-btn>
  </v-card-actions>
</v-card>
  </v-col>
</v-row>
</div>
    <!-- /////////////////////////////////////////////////////// -->
   <div class="mt-12" id="section3">

  <v-row class="bg-blue pa-2" >
    <v-col cols="11" class="text-center">
      <h2 >ESTILOS </h2>
    </v-col>
  </v-row>
  <!-- *************************************************** -->
  <v-row class="bg-blue-lighten-4">
    <v-col
     v-for="exercise3 in exercises3"
    :key="exercise3.id"
     cols="12"
     sm="6"
     md="4"
     lg="3"
     >
    <v-card
class="mx-auto my-8 bg-brown-lighten-4"
elevation="16"
max-width="344" >
<v-card-item>
  <v-card-title class="text-blue">{{ exercise3.title }} </v-card-title>
  <v-card-subtitle class="">{{ exercise3.description }}</v-card-subtitle>
</v-card-item>
<v-card-text>
  <p><b>Tiempo restante: {{ exercise3.remainingTime }} segundos</b></p>
</v-card-text>
<v-card-actions>
  <v-btn @click="startExercise3(exercise3)" :disabled="exercise3.intervalId" class="bg-blue text-white pa-2">
    Iniciar
  </v-btn>
  <v-btn @click="stopExercise3(exercise3)" :disabled="!exercise3.intervalId" class="bg-red text-white">
    Detener
  </v-btn>
  <v-btn :href="exercise3.link" target="_blank" class="bg-teal text-white">
    Ver 
  </v-btn>
  </v-card-actions>
</v-card>
  </v-col>
</v-row>
</div>
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
// V-FOR
const exercises = ref([
      { id: 1, title: 'CREAR PROYECTO', description: 'VUE CLI - VUE VITE', time: 1, remainingTime: 1, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/CrearProyecto.html' },
      { id: 2, title: 'CREAR SNIPPET', description: 'LINK', time: 120, remainingTime: 1, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/Snippet.html' },
      { id: 3, title: 'LLAMAR UN COMPONENTE', description: 'RELACIONAR 2 COMPONENTES', time: 60, remainingTime: 60, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/RelacionarComponentes.html' },
      { id: 4, title: 'INTERPOLAR TEXTOS', description: 'BASIC', time: 60, remainingTime: 60, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/InterpolarTexto.html' },
      { id: 5, title: 'EXAMPLE SELECTIVE', description: 'REACTIVIDAD', time: 150, remainingTime: 150, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/ExampleSelective.html' },
      { id: 6, title: 'V-BIND', description: 'REACTIVIDAD', time: 335, remainingTime: 335, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/Bind.html' },
      { id: 7, title: 'V-MODEL', description: 'CONDICIONES REACTIVAS', time: 156, remainingTime: 156, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/Model.html' },
      { id: 8, title: 'CHECKBOX', description: 'REACTIVIDAD', time: 425, remainingTime: 425, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/SelectCheckbox.html' },
      { id: 9, title: 'SELECT', description: 'CON VUETIFY', time: 300, remainingTime: 300, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/SelectNuevo.html' },
      // /////////////////////////////////////////////////////////////////
      { id: 10, title: 'CONDICIONAL TERNARIO', description: 'CON :CLASS', time: 183, remainingTime: 183, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/CondicionalTernario.html' },
      { id: 11, title: 'V-IF & V-SHOW', description: 'CONDICIONALES', time: 302, remainingTime: 302, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/IfShow.html' },
    ]);
    //  ********************************************************************
const exercises2 = ref([
      { id: 1, title: 'CONTADOR', description: 'USO DE IF & SHOW', time: 375, remainingTime: 375, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/Contador.html' },
      { id: 2, title: 'REACTIVIDAD', description: 'USO DE ref', time: 198, remainingTime: 198, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/ReactividadBasica.html' },
      { id: 3, title: 'V-FOR', description: 'RECORRIDOS', time: 722, remainingTime: 722, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/VforRecorrido.html' },
      { id: 4, title: 'PRACTICA UNO', description: 'TIME:900 ', time: 1100, remainingTime: 1100, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/PracticaUno.html' },
      { id: 5, title: 'V-FOR', description: 'TIME:900', time: 1005, remainingTime: 1005, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/OpcionVfor.html' },
      { id: 6, title: 'PROPS', description: 'TIME:500', time: 535, remainingTime: 535, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/propsVuetres.html' },
      { id: 7, title: 'EMITS', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/EmitVue.html' },
      { id: 8, title: 'PROPS EN ARRAY', description: 'TIME:', time: 549, remainingTime: 549, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/PrpsArray.html' },
      { id: 9, title: 'INJECTION', description: 'TIME: 300', time: 411, remainingTime: 411, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/Injection.html' },
      { id: 10, title: 'PLACEHOLDER', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/ServicePlaceholder.html' },
      { id: 11, title: 'RUTAS', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/Enrutado.html' },
      { id: 12, title: 'LOGIN FIREBASE', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/LoginFirebase.html' },
      { id: 13, title: 'VUEX ', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/.html' },
      { id: 14, title: 'PINIA ', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/pinia.html' },
      { id: 15, title: 'LAYOUTS & COMPOSABLES ', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/layoutsComposables.html' },
      { id: 16, title: 'ANIMACIONES E ICONOS ', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/Animacion&Icono.html' },
 
    ]);
    //  ********************************************************************
const exercises3 = ref([
      { id: 1, title: 'PROCESADORES', description: 'BOOTSTRAP', time: 375, remainingTime: 375, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue3/framework.html' },
    ]);
    //  ********************************************************************
// ////////////////////////////////////////////////////////////////////////////////////////////
    const startExercise1 = (exercise1) => {
      if (exercise1.intervalId) return;

      exercise1.intervalId = setInterval(() => {
        if (exercise1.remainingTime > 0) {
          exercise1.remainingTime--
        } else {
          clearInterval(exercise1.intervalId);
          exercise1.intervalId = null;
        }
      }, 1000);
    };

    const stopExercise1 = (exercise1) => {
      clearInterval(exercise1.intervalId);
      exercise1.intervalId = null;
    };
    //  ********************************************************************

    const startExercise2 = (exercise2) => {
      if (exercise2.intervalId) return;

      exercise2.intervalId = setInterval(() => {
        if (exercise2.remainingTime > 0) {
          exercise2.remainingTime--
        } else {
          clearInterval(exercise2.intervalId);
          exercise2.intervalId = null;
        }
      }, 1000);
    };

    const stopExercise2 = (exercise2) => {
      clearInterval(exercise2.intervalId);
      exercise2.intervalId = null;
    };
    //  ********************************************************************
    const startExercise3 = (exercise3) => {
      if (exercise2.intervalId) return;

      exercise3.intervalId = setInterval(() => {
        if (exercise3.remainingTime > 0) {
          exercise3.remainingTime--
        } else {
          clearInterval(exercise3.intervalId);
          exercise2.intervalId = null;
        }
      }, 1000);
    };
    const stopExercise3 = (exercise3) => {
      clearInterval(exercise3.intervalId);
      exercise3.intervalId = null;
    };
    //  ********************************************************************
  </script>
  <!-- ************************************************* -->
  <style scope>
  .uno>img{
  width: 2em;
  margin: 1em;
  color: white
  }

  .uno{
    display: flex;
  }
  
  </style>