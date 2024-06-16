<template>
    <div>
       <v-container :fluid="true">
          <h1 class="text-green-darken-4">Tablero </h1>
          <v-table hover>
            <thead>
               <tr>
                  <th>NOMBRE</th>
                  <th>APELLIDO</th>
                  <th>ACCIONES</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Carlos</td>
                  <td>Cervera</td>
                  <td><v-btn icon="mdi-close" size="md-2" color="red" ></v-btn></td>
               </tr>
               <tr>
                  <td>Sofia</td>
                  <td>Cobeñas</td>
                  <td><v-btn icon="mdi-pencil" size="md-2" color="indigo" ></v-btn></td>
               </tr>
            </tbody>
          </v-table>
       </v-container>
    </div>
</template>
<!-- ************************************* -->
<script setup>

</script>
<!-- ************************************* -->
<style scoped>

</style>