<template>
  <v-data-table
    :items="datum"
    class="elevation-2 text-h6"
  >
  </v-data-table>
  <v-row>
    <v-col cols="3">

      <h3 class="titulo">NOMBRE</h3>
      <ol>
        <li v-for="(item, index) in datum" :key="index">{{ item.NOMBRE }}</li>
      </ol>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const datum = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    datum.value = response.data.map(user => ({
      NOMBRE: user.name,
      ALIAS: user.username,
      CORREO: user.email,
      CIUDAD: user.address.city
    }));
  } catch (error) {
    console.error('Error fetching data:', error); 
  }
});
</script>

<style scoped>
.titulo{
  background-color: brown;
  color: white;
}
</style>
