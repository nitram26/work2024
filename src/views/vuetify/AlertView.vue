<template>
    <div>
       <v-container :fluid="true">
          <h1 class="text-green-darken-4">Aviso </h1>
          <v-btn
          prepend-icon="mdi-bell-ring"
          color="indigo"
          rounded="xl"
          @click="alertState=true"
          >Mostrar Alerta</v-btn> <br><br>
          <v-alert
          closable
          v-model=alertState
          icon="mdi-information"
          title="Respuesta"
          text="El producto a sido guardado"
          type="info"
          ></v-alert>
       </v-container>
    </div>
</template>
<!-- ************************************* -->
<script setup>
import { ref } from 'vue';


let alertState = ref(false)
</script>
<!-- ************************************* -->
<style scoped>

</style>