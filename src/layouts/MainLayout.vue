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
<<<<<<< HEAD
  
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
=======

  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
    <div class="container">
      <div class="dos">
      <v-img src="@/assets/image/CERVERA.png" class="img"></v-img>
      <slot name="image1"></slot>
    </div>
      <div class="dos">
      <v-img src="@/assets/image/CERVERA.png" class="img"></v-img>
      <slot name="image2"></slot>
    </div>
      <div class="dos">
      <v-img src="@/assets/image/CERVERA.png" class="img"></v-img>
      <slot name="image3"></slot>
    </div>
      <div class="dos">
      <v-img src="@/assets/image/CERVERA.png" class="img"></v-img>
      <slot name="image4"></slot>
    </div>
      <div class="dos">
      <v-img src="@/assets/image/CERVERA.png" class="img"></v-img>
      <slot name="image5"></slot>
    </div>
      <div class="dos">
      <v-img src="@/assets/image/CERVERA.png" class="img"></v-img>
      <slot name="image6"></slot>
    </div>
    </div>

>>>>>>> 1e040dd7d7ad7b4d49c0716edf426fc6ed57b091
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
<<<<<<< HEAD
  width: 40px;
  border-radius: 10px;
}
.uno{
  margin: 1em;
}
=======
  max-width: 40px;
  border-radius: 10px;
  margin-left: 1em;
  
}
.container{
display: block;

}
.dos{
  display: flex;
  padding: 1em;
}


>>>>>>> 1e040dd7d7ad7b4d49c0716edf426fc6ed57b091
</style>