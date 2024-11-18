    <template>
  <NavInterno>
    <template #main>VUE2</template>
    <template #title1><h4>MODELOS </h4></template>
    <template #title2><h4> OPTIONS</h4></template>
    <template #title3><h4>FECHA </h4></template>
  </NavInterno>
 
      <!-- fin de navegador derecho -->
<!-- ////////////////////////////////////////////////////////// -->
<div id="section1">
     <v-row class=" text-center bg-purple-lighten-4">
 <v-col cols="12">
   <h2 class="bg-pink-darken-4 pa-4">MODELOS </h2>
 </v-col>
</v-row>

<!-- *************************************************************** -->
<div class="">
    <v-row class="bg-purple-lighten-4">
       <v-col
        v-for="exercise1 in exercises1"
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
  </div>

 <!-- ///////////////////////////////////////////////// -->
      <div id="section2" class="" >
      <v-row class=" text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">OPTIONS  </h2>
  </v-col>
</v-row>
    
  <!-- ****************************************** -->
  <div class="">
    <v-row class="bg-purple-lighten-4">
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
     <v-card-title class="text-purple">{{ exercise2.title }} </v-card-title>
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
  </div>
<!-- *************************************************** -->
<div id="section3" class="" >
<v-row class="bg-purple-lighten-4 text-center">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">FECHA </h2>
  </v-col>
</v-row>
  <!-- ************************************************* -->
  <div class="">
    <v-row class="bg-purple-lighten-4">
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
     <v-card-title class="text-purple">{{ exercise3.title }} </v-card-title>
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
</div>
</template>
<!-- ///////////////////////////////////////////////////////////// -->
<script setup>
  import NavInterno from '@/layouts/NavInterno.vue';
import { ref } from 'vue';
// 01/////////////////////////////////////////////////////
const exercises1 = ref([
       { id: 1, title: 'CREACIÓN', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link:'http://127.0.0.1:5502/src/assets/front/vue2/ModelVue2.html' },
       { id: 2, title: 'MODEL', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/ModelVue2.html' },
       { id: 3, title: ' VALIDACIONES', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/ValidacionesVue2.html' },
       { id: 4, title: 'CONTROLLER', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/ControladorVue2.html' },
       { id: 5, title: 'PAGES', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/PagesVue2.html' },
       { id: 6, title: 'COMPONENT', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/ComponentVue2.html' },
       { id: 7, title: 'AXIOS', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/Axios.html' },
       { id: 8, title: 'ACTUALIZAR DATOS SURSA', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/ActualizarDatos.html' },
       { id: 9, title: 'COLOR DINÁMICO EN TABLA', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/ColorEstado.html' },
       { id: 10, title: '', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: '' },
 
     
     ]);
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
    //  02 ///////////////////////////////////////////////////
    const exercises2 = ref([
       { id: 1, title: ' Color según Estado ', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/TemaMenu.html' },
       { id: 2, title: 'Botón refrescar', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/BotonRefrescar.html' },
       { id: 3, title: '  Ver N° de Registros', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/numRegistro.html' },
       { id: 4, title: 'Registros por Estado y Categoria ', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/TextfieldStatus.html' },
       { id: 5, title: 'Listar por Nombre ', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/ListarporNombre.html' },
       { id: 6, title: 'Seleccionar Campo ', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/SeleccionarCampo.html' },
       { id: 7, title: ' PREFIJO', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/Prefijo.html' },
       { id: 8, title: 'SELECT ', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/Prefijo.html' },
       { id: 9, title: 'MONGO', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/ModificarRegistro.html' },
       { id: 10, title: ' ', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: '' },
     
     ]);
     const startExercise2 = (exercise2) => {
       if (exercise2.intervalId) return;
 
       exercise1.intervalId = setInterval(() => {
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
    //  03 ///////////////////////////////////////////////////
    const exercises3 = ref([
       { id: 1, title: 'FECHA SIN HORA', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/front/vue2/FechaSinhora.html' },
       { id: 2, title: '', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: '' },
  
     
     ]);
     const startExercise3 = (exercise3) => {
       if (exercise3.intervalId) return;
 
       exercise1.intervalId = setInterval(() => {
         if (exercise3.remainingTime > 0) {
           exercise3.remainingTime--
         } else {
           clearInterval(exercise3.intervalId);
           exercise3.intervalId = null;
         }
       }, 1000);
     };
     const stopExercise3 = (exercise3) => {
       clearInterval(exercise3.intervalId);
       exercise3.intervalId = null;
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
   

  