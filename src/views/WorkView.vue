<template>

    <h1>VALORES COMPUTADOS</h1>
<v-row>
  <v-col cols="2">

<v-text-field
  v-model="input"
  placeholder="Escriba aquí"
  outlined
  dense

/>
<h2>{{ input }}</h2>
</v-col>
</v-row>



</template>
<!-- ******************************* -->
<script setup>
import { ref } from 'vue';


let input = ref('')

</script>
<!-- ******************************* -->
<style scoped>
div{
  background-color: antiquewhite;

}
</style>