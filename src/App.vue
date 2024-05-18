<template>
  <v-app>
    <v-main>
      <v-app-bar scroll-behavior="hide" color="teal-darken-4" >
  <v-app-bar-nav-icon><v-btn to="/">
    <v-img src="@/assets/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
  </v-app-bar-nav-icon>
  <v-app-bar-title>OPUS</v-app-bar-title>

  <v-app-bar-nav-icon class="ma-12"><v-btn icon="mdi-arrange-bring-to-front" to="/front"></v-btn>Front</v-app-bar-nav-icon>

  <v-app-bar-nav-icon class="ma-12"><v-btn icon="mdi-arrange-send-to-back" to="/backend"></v-btn>
    
    Back</v-app-bar-nav-icon>
  
  <v-app-bar-nav-icon class="ma-12"><v-btn icon="mdi-database-cog-outline" to="/data"></v-btn>Data</v-app-bar-nav-icon>
  
  <v-app-bar-nav-icon class="ma-12"><v-btn icon="mdi-store" to="/store"></v-btn>Store</v-app-bar-nav-icon>

 </v-app-bar>
      <router-view/>
    </v-main>
  </v-app>
</template>
<!-- ********************************************************* -->
<script setup>



</script>
