<template>

    <v-data-table
      :items="datum"
      class="elevation-2 bg-teal text-white"
    >
      <template v-slot:top>
        <v-toolbar class="text-white text-center bg-blue-darken-4">
          <v-toolbar-title>Datos de la Tabla</v-toolbar-title> 
        </v-toolbar>
      </template>
    </v-data-table>

</template>
<script setup>
import {  } from 'vue';

let datum = [
    { nombre: 'Juan', apellidos: 'Pérez', edad: 30, estado: 'Activo', lugar: 'Lima' },
    { nombre: 'Carlos', apellidos: 'Cervera', edad: 65, estado: 'Activo', lugar: 'Lima' },
    { nombre: 'Ana', apellidos: 'Gómez', edad: 25, estado: 'Inactivo', lugar: 'Lima' }
  ];



// Función para obtener los datos de la base de datos local
// const fetchData = async () => {
  // Aquí iría la lógica para obtener datos de tu base de datos local
  // Por ejemplo, usando fetch si estás obteniendo datos de un endpoint local:
  // const response = await fetch('http://localhost:3000/data');
  // const data = await response.json();

  // Simulación de datos obtenidos
//   const data = [
//     { nombre: 'Juan', apellidos: 'Pérez', edad: 30, estado: 'Activo' },
//     { nombre: 'Ana', apellidos: 'Gómez', edad: 25, estado: 'Inactivo' }
//   ];

//   items.value = data;
// };

// onMounted(() => {
//   fetchData();
// });
</script>

<style scoped>

</style>
