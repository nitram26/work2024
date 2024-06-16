<template>
    <div>
       <v-container :fluid="true">
          <h1 class="text-green-darken-4">Pestaña </h1>
          
          <v-tabs
          v-model="tabs"
          bg-color="purple-darken-1"
          >
            <v-tab value="1">Tab 01</v-tab>
            <v-tab value="2">Tab 02</v-tab>
            <v-tab value="3">Tab 03</v-tab>
         </v-tabs>
         <!-- contenido de ventanas -->
         <v-window v-model="tabs">
            <v-window-item value="1">
               Contenido de Pestaña 1
            </v-window-item>
            <v-window-item value="2">
               Contenido de Pestaña 2
            </v-window-item>
            <v-window-item value="3">
               Contenido de Pestaña 3
            </v-window-item>
         </v-window>
       </v-container>
    </div>
</template>
<!-- ************************************* -->
<script setup>
import { ref } from 'vue';

let tabs = ref('')
</script>
<!-- ************************************* -->
<style scoped>

</style>