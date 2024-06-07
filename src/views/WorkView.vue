<template>
  <div class="bg-teal-lighten-3">
   <h1>v-for 1438</h1> 
   <div>
    <h2>Números del 1 al 10</h2>
  <ul>
    <li v-for="(num, index) in 10" :key="index">{{ num }}</li>
  </ul>
</div>

<div class="uno">
  <h2>Palabra</h2>
  <ul>
    <li v-for="(letra, index) in 'hola'" :key="index">{{ letra }}</li>
  </ul>
</div>


  <div class="dos">
    <h2>Array</h2>
    <ul>
      <li v-for="(num, index) in numeros" :key="index">{{ num }}</li>
    </ul>
  </div>
  <div class="tres">
    <h2>Objetos</h2>
    <ol>
      <li v-for="(object, index) in objetos" :key="index">{{ object.nombre }} {{ object.apellido }} su edad es {{ object.age }}</li>
    </ol>
  </div>
</div>
</template>
<!-- ******************************* --> 
<script setup>

let numeros = [1,2,3,9,8,7,6,5,4]

let objetos = [
  {
    nombre:"Carlos",
    apellido: "Cervera",
    age : 15
  },
  {
    nombre:"Sofia",
    apellido: "Cobeñas",
    age : 16
  },
  {
    nombre:"Ingrid",
    apellido: "Rebeca",
    age : 17
  }
]
</script>
<!-- ******************************* -->
<style scoped>
li{
  margin-left: 2em;
}
div{
  display: flex;
  margin: 2em;
}
</style>