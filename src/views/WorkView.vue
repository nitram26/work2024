<template>
    <div>
        <h1>Septiembre 18</h1>
   <h2 :class="color">Esta es una etiqueta que cambia de color</h2>

   <v-btn @click="cambio()">push</v-btn>
    </div>
</template>
<!-- ************************************* -->
<script setup>
import { ref } from 'vue';



let color= ref('green')
let cambio = ()=>{
  color.value='red'
  setTimeout(() => {
    color.value='green'
  }, 2000);
}

</script>
<!-- ************************************* -->
<style scoped>
.green{
  color: white;
  background-color: green;
}
.red{
  color: white;
  background-color: red;
}
</style>