<template>
  <div>
   <h1 class="mb-12">VUE3</h1> 
    <h2 :class="color">Este es una etiqueta que cambia de color </h2>

    <v-btn @click="cambio">PULSAR</v-btn>
   <br><br><br>
  
  </div>
</template>
<!-- ******************************* --> 
<script setup>
import { ref } from 'vue';


let color = ref('red')
let cambio= ()=>{
  color.value= 'danger' 
}

</script>
<!-- ******************************* -->
<style scoped>
.danger{
  color: red;
}
.red {
  color: blue;
}
</style>

