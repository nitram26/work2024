<template>
     <v-row class="bg-teal-darken-2 pa-2" >
      <v-col cols="11" class="text-center">
          <slot name="main"></slot>
    </v-col>
    <v-col cols="1" >

<v-btn icon @click="toggleDrawer" >
    <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
    </v-col>
  </v-row>
</template>
<!-- ************************************* -->
<script setup>

</script>
<!-- ************************************* -->
<style scoped>

</style>