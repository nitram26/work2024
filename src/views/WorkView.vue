<template>
  
  <h2 class="bg-yellow-lighten-4 pa-4">NAVIGATION DRAWER <br>SCRIPT</h2>
    <p class="bg-orange-lighten-4 pa-4 mb-4">Desaparece el listado de enlaces</p>
  <v-card>
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>ARCHIVOS</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px;">
        <v-card-text>
          El cajón de navegación aparecerá desde la parte inferior en pantallas de menor tamaño. 
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
  <v-row>
    <v-col cols="12" class="mt-8">
      <h2 class="bg-yellow-lighten-4 pa-4">EXPANDED ON HOVER <br>NO SCRIPT</h2>
      <p class="bg-orange-lighten-4 pa-4 mb-4">Se reduce el listado de enlaces</p>
    </v-col>
  </v-row>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
  <!-- FOOTER /////////////////////////////////////////-->
  <v-row >
    <v-col cols="12" class="mt-8">
      <h2 class="bg-yellow-lighten-4 pa-4">FOOTER <br> SCRIPT</h2>
      <p class="bg-orange-lighten-4 pa-4 mb-4">Se reduce el listado de enlaces</p>
    </v-col>
  </v-row>
  <v-row>
     <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>CONEXIÓN A REDES SOCIALES </strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        size="small"
        variant="plain"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
  </v-row>
</template>
<!-- ******************************* --> 
<script setup>
// BOTTOM DRAWER
import { ref, watch } from 'vue';

const drawer = ref(false);
const group = ref(null);
const items = [
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
];

watch(group, () => {
  drawer.value = false;
});

//FOOTER
const icons = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
])
</script>

<!-- ******************************* -->
<style scoped>

</style>