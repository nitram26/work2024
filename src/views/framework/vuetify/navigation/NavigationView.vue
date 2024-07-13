<template>
  <v-row class="bg-purple-darken-4 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >NAVIGATION </h2>
    </v-col>
    <v-col cols="1" >

<v-btn icon @click="toggleDrawer" >
    <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
    </v-col>
  </v-row>
  <!-- ********************************************* -->
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
      <v-list>
        <v-list-item link to="/" title="HOME" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front">Drawer</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">Expanded & Hover</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store">Footer</v-btn></v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->
    <div id="section1" class="mt-12" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">NAVIGATION DRAWER & SCRIPT</h3>
    </v-col>
        <!-- ************************************************************** -->
      <v-col cols="12">
        <v-card>
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawers = !drawers"></v-app-bar-nav-icon>

        <v-toolbar-title>ARCHIVOS</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawers"
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
      </v-col>
        <!-- ************************************************************** -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vuetify/Drawer.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> DRAWER  </v-card-title>
      <v-card-subtitle>VARIABLES EN sCRIPT</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Barra lateral que aparece al accionar botón
    </v-card-text>
  </v-card>
  </v-col>
      </v-row>
    </div>
      <!-- /////////////////////////////////////////////////////////////////////////////////////-->
      <div id="section2" style="height: 100vh;">
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">EXPANDED & HOVER </h2>
  </v-col>
  <!-- ****************************************** -->
   <v-col cols="12">
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
   </v-col>
  <!-- ****************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vuetify/Expanded.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Expanded & Hover </v-card-title>
      <v-card-subtitle>Menu lateral </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Aparece al poner el puntero sobre el menu     
    </v-card-text>
  </v-card>
</v-col>

<!-- ********************************************************************** -->
</v-row>
</div>
<!-- ********************************************************************** -->
 <div id="section3" >
<v-row class="bg-purple-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4 text-center">FOOTER</h2>
  </v-col>
  <!-- ********************************************************************** -->
   <v-col cols="12">
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
   </v-col>
  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vuetify/Footer.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> FOOTER</v-card-title>
      <v-card-subtitle> Pie de página</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Con iconos y enlaces a redes sociales
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->

</v-row>
</div>
</template>
<!-- ******************************* -->
<script setup>
  import { ref, watch } from 'vue';
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
// NAV

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
//nav drawer
const drawers = ref(false);
const group = ref(null);
const items = [
  {
    title: 'Uno',
    value: 'uno',
  },
  {
    title: 'Dos',
    value: 'dos',
  },
  {
    title: 'Tres',
    value: 'tres',
  },
  {
    title: 'Cuatro',
    value: 'cuatro',
  },
];

watch(group, () => {
  drawer.value = false;
});

const icons = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
])
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
  