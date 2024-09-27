<template>
 <MainLayout>
    <template #main> <h1>BACK</h1> </template>
 </MainLayout>
  <!-- ********************************************* -->
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
      <v-list>
        <v-list-item link to="/" title="TEMAS" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item link to="/front" title="Vue2" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
        <v-list-item link to="/vue2" title="dos" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
        <v-list-item link to="/store" title="tres" prepend-icon="mdi-database-cog-outline"></v-list-item>
        <v-list-item link to="/backend" title="cuatro" prepend-icon="mdi-store"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ********************************** -->
  <v-row class="mt-12">
    <v-col class="mt-4">
      <h3 class="bg-blue pa-4  text-center">MODELOS </h3>
    </v-col>
     
      </v-row>
      <!-- fin de navegador derecho -->
      <v-row class="bg-red-lighten-4">
        <!-- ****************************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/vue2/ModelVue2.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> CREACIÓN  </v-card-title>
      <v-card-subtitle>Secuencia de Desarrollo</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Model
    </v-card-text>
  </v-card>
  </v-col>
  </v-row>
</template>
<!-- /////////////////////////////////////////////////////////////////////////////////////-->

<script setup>
  import MainLayout from '@/layouts/MainLayout.vue';

</script>
<!-- ******************************* -->
<style scoped>
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 101%;
  z-index: 1000
}

</style>
  