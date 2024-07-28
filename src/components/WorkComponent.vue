<template>
    <div>
        <h1>hijo</h1>
    </div>
    <h2>{{ mostrar }}</h2>

    <v-btn @click="saludo">botones</v-btn>
</template>
<!-- ************************************* -->
<script setup>
import { inject } from 'vue';


let mostrar = inject('viene')

let saludo = ()=>{
  mostrar.value = 'Buenas tardes'
}
</script>
<!-- ************************************* -->
<style scoped>

</style>