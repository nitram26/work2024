<template>
  <v-data-table
    :items="datum"
    class="elevation-2 text-h6"
   
  >
  </v-data-table>
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
.custom-header {
  background-color: red; /* Cambia el color según tu preferencia */
  color: white;
  padding: 10px;
  font-weight: bold;
}
</style>
