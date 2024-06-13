<template>
  <v-data-table
    :headers="headers"
    :items="datum"
    class="elevation-2 text-h6"
  >
    <template v-slot:top>
      <v-row>
        <v-col cols="2" class="bg-blue-darken-1 text-center">
          <span>PLACEHOLDER</span>
        </v-col>
        <v-col cols="1" class="mt-2">
          <v-text-field
            variant="outlined"
            :value="cantidadRegistros"
            readonly
          />
        </v-col>
      </v-row>
      <v-row class="bg-cyan text-h6 pl-4">
        <v-col cols="3">
          APELLIDOS
        </v-col>
        <v-col cols="3" class="pl-8">
          NOMBRE
        </v-col>
        <v-col cols="3">
          CORREO
        </v-col>
        <v-col cols="3" class="pl-10">
          <span class="pl-8">CIUDAD</span>
        </v-col>
      </v-row>
    </template>
  </v-data-table>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const datum = ref([]);
const headers = [
  { text: 'Name', value: 'name' },
  { text: 'Username', value: 'username' },
  { text: 'Email', value: 'email' },
  { text: 'City', value: 'city' }
];

const cantidadRegistros = computed(() => datum.value.length);

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    datum.value = response.data.map(user => ({
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
/* Puedes agregar tus estilos aquí */
</style>
