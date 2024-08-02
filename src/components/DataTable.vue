<template>
  <v-data-table
    :headers="headers"
    :items="datum"
    class="elevation-2 text-h6"
  >
   </v-data-table>
   <!-- otra forma-->
    <v-row>
      <v-col cols="3">
        <h5>NOMBRE</h5>
        <ol>
          <li v-for="(post, index) in datum" :key="index">{{ post.city}}</li>
        </ol>
      </v-col>
      <!-- ********************** -->
    </v-row>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const datum = ref([]);
const headers = [
  { name: 'Name', value: 'name' },
  { text: 'Username', value: 'username' },
  { text: 'Email', value: 'email' },
  { text: 'City', value: 'city' }
];


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

</style>
