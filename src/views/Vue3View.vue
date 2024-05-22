<template>
  <v-row class="bg-purple-darken-4 pa-1 mt-15 fixed-top">
    <v-col cols="11" class="text-center">
      <h2>
        VUE3 PRACTICA
        <v-btn icon @click="scrollToTop" class="mx-6">
          <v-img src="@/assets/image/logo.png" alt="My Image2" style="width: 39px; border-radius: 1em;" />  
        </v-btn>
      </h2>
    </v-col>
    <v-col cols="1">
      <v-btn icon @click="toggleDrawer">
        <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;" />
      </v-btn>
    </v-col>
  </v-row>
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
    <v-list>
      <v-list-item @click="() => scrollTo('section1')" title="Sección 1" prepend-icon="mdi-grid"></v-list-item>
      <v-list-item @click="() => scrollTo('section2')" title="Sección 2" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
      <v-list-item @click="() => scrollTo('section3')" title="Sección 3" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
      <v-list-item @click="() => scrollTo('section4')" title="Sección 4" prepend-icon="mdi-database-cog-outline"></v-list-item>
      <v-list-item @click="() => scrollTo('section5')" title="Sección 5" prepend-icon="mdi-store"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <div id="section1">
    <h3>Sección 1</h3>
    <p>Contenido de la sección 1..</p>
  </div>
  <div id="section2">
    <h3>Sección 2</h3>
    <p>Contenido de la sección 2...</p>
  </div>
  <div id="section3">
    <h3>Sección 3</h3>
    <p>Contenido de la sección 3..</p>
  </div>
  <div id="section4">
    <h3>Sección 4</h3>
    <p>Contenido de la sección 4...</p>
  </div>
  <div id="section5">
    <h3>Sección 5</h3>
    <p>Contenido de la sección 5...</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);


const scrollTo = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
  drawer.value = false; // Cierra el drawer después de hacer clic
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped>
/* Estilos adicionales */
#section1, #section2, #section3, #section4, #section5 {
  padding: 20px;
  margin: 20px 0;
}

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
}

v-icon {
  margin-left: 10px;
  cursor: pointer;
}
.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 101%;
  z-index: 1000
}

</style>

