<template>
  <v-container>
    <v-row>
      <v-col
        v-for="exercise in exercises"
        :key="exercise.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="mx-auto" max-width="344">
          <v-card-title>{{ exercise.title }}</v-card-title>
          <v-card-subtitle>{{ exercise.description }}</v-card-subtitle>

          <v-card-text>
            <p>Tiempo restante: {{ exercise.remainingTime }} segundos</p>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="startExercise(exercise)" :disabled="exercise.intervalId" color="primary">
              Iniciar
            </v-btn>
            <v-btn @click="stopExercise(exercise)" :disabled="!exercise.intervalId" color="error">
              Detener
            </v-btn>
            <!-- Enlace estático con href -->
            <v-btn :href="exercise.link" target="_blank" color="info">
              Ver Descripción
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

    const exercises = ref([
      { id: 1, title: 'Ejercicio 1', description: 'Resolver problema A', time: 60, remainingTime: 60, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/front/vue3/CrearProyecto.html' },
      { id: 2, title: 'Ejercicio 2', description: 'Resolver problema B', time: 120, remainingTime: 120, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/front/vue3/ResolverProblema.html' },
      { id: 3, title: 'Ejercicio 3', description: 'Resolver problema C', time: 90, remainingTime: 90, intervalId: null, link: 'http://127.0.0.1:5501/src/assets/front/vue3/Detalles.html' },
      // Agrega más ejercicios aquí...
    ]);

    const startExercise = (exercise) => {
      if (exercise.intervalId) return;

      exercise.intervalId = setInterval(() => {
        if (exercise.remainingTime > 0) {
          exercise.remainingTime--;
        } else {
          clearInterval(exercise.intervalId);
          exercise.intervalId = null;
        }
      }, 1000);
    };

    const stopExercise = (exercise) => {
      clearInterval(exercise.intervalId);
      exercise.intervalId = null;
    };

</script>

<style scoped>
.v-card {
  margin-bottom: 16px;
}
</style>
