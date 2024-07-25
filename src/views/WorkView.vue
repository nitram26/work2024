<template>
    <div>
        <h1>VUE3</h1>
        {{ fecha }}
     
    </div>
</template>
<!-- ************************************* -->
<script setup>
const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11
const año = fechaActual.getFullYear();
let fecha = `${dia}/${mes}/${año}`;

</script>
<!-- ************************************* -->
<style scoped>

</style>