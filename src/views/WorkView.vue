<template>
  
   
<v-row class="bg-teal-lighten-4">
  <v-col cols="3">
   <h2>INDETERMINADO</h2> 
   <v-switch label="Switch" indeterminate></v-switch>
  </v-col>
  <!-- ************************************** -->
  <v-col cols="3">
   <H2>COLOR</H2>
      <v-switch
        color="primary"
        label="COLOR primary"
        hide-details
      ></v-switch>
      <p>Para vue2 necesita script-data ver documentación</p>
    </v-col>
      <!-- ************************************** -->
<v-col cols="3">
      <h2>INSET</h2>
        <v-switch
          v-model="model"
          :label="`Switch: ${model.toString()}`"
          hide-details
          inset
        ></v-switch>
      </v-col>
        <!-- ************************************** -->
      <v-col cols="3">
        <h2>MODELO CON ARRAY</h2>
            <p>{{ people }}</p>
    <v-switch
      v-model="people"
      color="primary"
      label="John"
      value="John"
      hide-details
    ></v-switch>
    <v-switch
      v-model="people"
      color="primary"
      label="Jacob"
      value="Jacob"
      hide-details
    ></v-switch>
    <p>Con Script</p>
  </v-col>
</v-row>
<!-- ////////////////////////////////////////////// -->
<v-row class="bg-blue-lighten-4">
  <v-col cols="3">
    <h2>ON LOADING</h2>
      <v-switch
        :model-value="true"
        label="on loading"
        loading="warning"
      ></v-switch>
      <p>Sin script</p>
    </v-col>
      <!-- ************************************** -->
    <v-col cols="3">
  <h2>IN PROGRESS</h2>
  <v-switch v-model="switchMe">
    <template v-slot:label>
      Turn on the progress:
      <v-progress-circular
        :indeterminate="switchMe"
        class="ms-2"
        size="24"
      ></v-progress-circular>
    </template>
  </v-switch>
<P>Con Script</P>
</v-col>
</v-row>
</template>
<!-- ******************************* --> 
<script setup>
import { ref } from 'vue';

let model = ref(true) 
let people = ref('John')
let  switchMe = ref(false)
</script>
<!-- ******************************* -->
<style scoped>

</style>
