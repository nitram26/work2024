<template>
  <div class="work">
   <h1>Practica Julio 2024</h1> 
    <v-select
    :items="select"
    v-model="item"
    label="País"
    width="15em"
    class="azul"
    />

   
  </div>
  
</template>
<!-- ******************************* --> 
<script setup>
import { ref } from 'vue';


let item = ref('')
let select = ref(['Peru', 'Brasil', 'Japón', 'India'])



</script>
<!-- ******************************* -->
<style scoped>
.work{
  background-color: burlywood;
  height: 5em;
  margin-left: 3em;
}
.rojo{
  color: red;
}
.azul {
  color: blue;
  border: 1px solid green;
}
</style>