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
   <!-- ********************************************* -->
   <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
      <v-list>
        <v-list-item link to="/" title="TEMAS" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item link to="/front" title="Vue2" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ********************************** -->
</template>
<!-- ************************************* -->
<script setup>
import { ref } from 'vue';
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
</script>
<!-- ************************************* -->
<style scoped>

</style>