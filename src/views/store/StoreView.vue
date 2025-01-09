<template>
  <NavInterno>
    <template #main>STORE</template>
    <template #title1>GITHUB</template>
    <template #title2>PC & IMPRESORA</template>
    <template #title3>VSCODE</template>
    <template #title4>WINDOWS & CHROME</template>
  </NavInterno>
    <!-- fin de navegador derecho -->
    <!-- ////////////////////////////////////////////////////// -->
    <div id="section1" class="mt-1" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">GITHUB</h3>
    </v-col>
  </v-row>

<!-- ********************************************** -->
<div class="mt-1" id="section1">
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
    </div>
<!-- ////////////////////////////////////////////////////////////-->
      <div id="section2">
      <v-row class="my-1 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">PC & IMPRESORA</h2>
  </v-col>
  </v-row>
  <!-- ****************************************** -->
  <div class="mt-1">
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
<div id="section3" class="mt-1" >
<v-row class="bg-purple-lighten-4 text-center">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">VSCODE </h2>
  </v-col>
</v-row>
  <!-- ************************************************* -->
  <div class="mt-1">
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
   <!-- ///////////////////////////////////////////////////////// -->
<div id="section4" class="mt-1" >
<v-row class="bg-purple-lighten-4 text-center">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">WINDOWS </h2>
  </v-col>
</v-row>
  <!-- ************************************************* -->
  <div class="mt-1">
    <v-row class="bg-purple-lighten-4">
       <v-col
        v-for="exercise4 in exercises4"
       :key="exercise4.id"
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
     <v-card-title class="text-purple">{{ exercise4.title }} </v-card-title>
     <v-card-subtitle class="">{{ exercise4.description }}</v-card-subtitle>
     </v-card-item>
     <v-card-text>
     <p><b>Tiempo restante: {{ exercise4.remainingTime }} segundos</b></p>
     </v-card-text>
     <v-card-actions>
     <v-btn @click="startExercise4(exercise4)" :disabled="exercise4.intervalId" class="bg-blue text-white pa-2">
       Iniciar
     </v-btn>
     <v-btn @click="stopExercise4(exercise4)" :disabled="!exercise4.intervalId" class="bg-red text-white">
       Detener
     </v-btn>
     <v-btn :href="exercise4.link" target="_blank" class="bg-teal text-white">
       Ver 
     </v-btn>
     </v-card-actions>
     </v-card>
     </v-col>
     </v-row>
     </div>
</div>
   <!-- ///////////////////////////////////////////////////////// -->


</template>
<!-- ******************************* -->
<script setup>
  import NavInterno from '@/layouts/NavInterno.vue';
import { ref } from 'vue';

//v-for
const exercises = ref([
       { id: 1, title: 'TERMINAL DE COMANDOS', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/TerminalComandos.html' },
       { id: 2, title: 'ASII', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/ASCII.html' },
       { id: 3, title: 'COMMITS', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/GitCommit.html' },
       { id: 4, title: 'INVITAR COLABORADOR', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/InvitarColaborador.html' },
       { id: 5, title: 'CAMBIO DE CORREO', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/cambioCorreo.html' },
       { id: 6, title: 'ACCESOS', description: 'TIME: PARA SOFIA', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/IngresarDatos.html' },
       { id: 7, title: 'DEPLOY GITHUB', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/DeployGithub.html' },
       { id: 8, title: 'SUBIR PROYECTO A GITHUB', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/crearProyecto.html' },
       { id: 9, title: '', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: '' },
       { id: 9, title: 'Cuenta en GitHub', description: 'Crear una Cuenta', time: 600, remainingTime: 600, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/cuentaGithub.html' },
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
       { id: 1, title: 'MANTENIMIENTO LÓGICO ', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/mantenimientoLogico.html' },
       { id: 2, title: 'LIMPIEZA DE CABEZALES', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/ImpresoraEpson.html' },
       { id: 3, title: ' EXTENDER PANTALLA', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/pantalla.html' },
       { id: 4, title: ' ', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: '' },
     
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
       { id: 1, title: 'SETTING.JSON VSCODE', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/SettingJson.html' },
       { id: 2, title: 'LIVE SERVER', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/LiveServer.html' },
       { id: 3, title: '', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: '' },
  
     
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
    //  03 ///////////////////////////////////////////////////
    const exercises4 = ref([
       { id: 1, title: 'COPIAR NOMBRE', description: 'TIME:', time: 160, remainingTime: 160, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/ArchivoAtexto.html' },
       { id: 2, title: 'SUSPENDER O INVERNAR', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/Suspensi%C3%B3nPantalla.html' },
       { id: 3, title: 'AUDIO VIDEO', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/SegundaPantalla.html' },
       { id: 4, title: 'GOOGLE DRIVE', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/CorreoYDrive.html' },
       { id: 5, title: 'BORRAR DATOS DE CACHÉ', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/BorrarDatos.html' },
       { id: 6, title: 'YouTube', description: 'Traducción automática', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/youtube.html' },
       { id: 7, title: '', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: '' },
  
     
     ]);
     const startExercise4 = (exercise4) => {
       if (exercise4.intervalId) return;
 
       exercise1.intervalId = setInterval(() => {
         if (exercise4.remainingTime > 0) {
           exercise4.remainingTime--
         } else {
           clearInterval(exercise4.intervalId);
           exercise4.intervalId = null;
         }
       }, 1000);
     };
     const stopExercise4 = (exercise4) => {
       clearInterval(exercise4.intervalId);
       exercise4.intervalId = null;
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
  