<template>
  <NavInterno>
    <template #main>STORE</template>
    <template #title1>GITHUB</template>
    <template #title2>PC & IMPRESORA</template>
    <template #title3>VSCODE</template>
    <template #title4>WINDOWS & CHROME</template>
  </NavInterno>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->
    <div id="section1" class="mt-12" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">GITHUB</h3>
    </v-col>
  </v-row>
<!-- ********************************************** -->
<div class="mt-12" id="section1">
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
    href="http://127.0.0.1:5502/src/assets/store/mantenimientoLogico.html"
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
    href="http://127.0.0.1:5502/src/assets/store/ImpresoraEpson.html"
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
    href="http://127.0.0.1:5502/src/assets/store/SettingJson.html"
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
    href="http://127.0.0.1:5502/src/assets/store/LiveServer.html"
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
<div id="section3">
<v-row class="bg-indigo-lighten-4">
  <v-col cols="12">
    <h2 class="bg-indigo-darken-1 pa-4 text-center">WINDOWS</h2>
  </v-col>
  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/store/ArchivoAtexto.html"
    max-width="344" >
    <v-card-item>
      <v-card-title>COPIAR NOMBRE </v-card-title>
      <v-card-subtitle>DE windows</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Títulos de archivos a Word
    </v-card-text>
  </v-card>
</v-col>

  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/store/Suspensi%C3%B3nPantalla.html"
    max-width="344" >
    <v-card-item>
      <v-card-title>Suspender o Invernar </v-card-title>
      <v-card-subtitle>Programar la pantalla de PC </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Suspender después de cierto tiempo
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/store/SegundaPantalla.html"
    max-width="344" >
    <v-card-item>
      <v-card-title>Audio-Video </v-card-title>
      <v-card-subtitle>No se proyectaba la 2da pantalla </v-card-subtitle>
    </v-card-item>
    <v-card-text>
     Problema: faltaba un controlador de video
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/store/CorreoYDrive.html"
    max-width="344" >
    <v-card-item>
      <v-card-title>GOOGLE DRIVE</v-card-title>
      <v-card-subtitle>Subir, editar y descargar archivos </v-card-subtitle>
    </v-card-item>
    <v-card-text>
     abrir correo en otra pc
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->

</v-row>
</div>
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
       { id: 6, title: 'ACCIONES', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5502/src/assets/store/IngresarDatos.html' },
       { id: 7, title: '', description: 'TIME:', time: 120, remainingTime: 120, intervalId: null, link: '' },
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
  