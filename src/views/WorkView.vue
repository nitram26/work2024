<template>
  <v-expansion-panels class="my-4" variant="inset">
    <v-expansion-panel
      v-for="(item, index) in items"
      :key="index"
    >
      <template #header>
        {{ item.title }}
      </template>
      <div>
        {{ item.text }}
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
  <!-- //////////////////////////////////// -->
  <v-expansion-panels class="my-4" variant="inset">
  <v-expansion-panel
    title="Carlos"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </v-expansion-panel>
  <v-expansion-panel
    title="Martin"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </v-expansion-panel>
  <v-expansion-panel
    title="Nestor"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </v-expansion-panel>
</v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    title: "Panel 1",
    text: "Contenido único para el primer panel.",
  },
  {
    title: "Panel 2",
    text: "Otro contenido para el segundo panel.",
  },
  {
    title: "Panel 3",
    text: "Más contenido diferente para el tercer panel.",
  },
])
</script>
