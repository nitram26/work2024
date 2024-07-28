<template>
  <div class="fondo">
    <h1>PRACTICA JULIO 2024</h1>

<div
v-for="elm in name"
:key="elm.title"
>
<WorkComponent
:title="elm.title"
:content="elm.content"/> <br>
</div>

  </div>

</template>
<!-- ************************************* -->
<script setup>
import WorkComponent from '@/components/WorkComponent.vue';


let name = [
  {
    title: 'post1',
    content : 'Contenido uno'
  },
  {
    title: 'post2',
    content : 'Contenido uno'
  },
  {
    title: 'post3',
    content : 'Contenido uno'
  },
  {
    title: 'post4',
    content : 'Contenido uno'
  },
]
</script>
<!-- ************************************* -->
<style scoped>
.fondo{
  background-color: blanchedalmond;

 
}
.rojo{
color: darkcyan;
}
.verde{
color:white
}
    
</style>