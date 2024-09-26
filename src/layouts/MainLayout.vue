<template>
     <v-row class="bg-teal-darken-2 pa-2" >
      <v-col cols="11" class="text-center">
          <slot name="main"></slot>
    </v-col>
    <v-col cols="1" >

<v-btn icon @click="toggleDrawer" >
    <v-img src="@/assets/image/CERVERA.png" alt="My Image2" class="img"/></v-btn>
    </v-col>
  </v-row>
  
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
    <div class="uno">
      <v-img
        src="@/assets/image/CERVERA.png"
        max-width="40"
        class="img"
      > <a href="/graph" class=""></a></v-img>
      <slot name="image"></slot>
    </div>
      <v-list>
        <v-list-item link to="/graph" title="GraphQL" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  
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
.img{
  width: 40px;
  border-radius: 10px;
}
.uno{
  margin: 1em;
}
</style>