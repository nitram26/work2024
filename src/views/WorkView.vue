<template>
  <div>
   <h1>HIJO MÉTODO INJECTION</h1> 
  <h2>{{ canalHijo }}</h2> <br><br>
<v-btn @click="modificar">Cambiar</v-btn>
</div>
</template>
<!-- ******************************* --> 
<script setup>
import { inject } from 'vue';

let canalHijo = inject('mi canal')

const modificar = () =>{
  canalHijo.value = 'Ingrid'
}

</script>
<!-- ******************************* -->
<style scoped>
div{
  background-color: antiquewhite;
  padding: 4em;
}
</style>