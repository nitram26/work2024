<template>
  <v-row class="bg-purple-darken-4 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >VUE2 </h2>
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
        <v-list-item link to="/vue2" title="dos" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
        <v-list-item link to="/store" title="tres" prepend-icon="mdi-database-cog-outline"></v-list-item>
        <v-list-item link to="/backend" title="cuatro" prepend-icon="mdi-store"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  <v-row class="mt-12">
    <v-col class="mt-4">
      <h3 class="bg-blue pa-4  text-center">MODELOS DE PAGINAS COMPLETAS</h3>
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
    href="http://127.0.0.1:5500/src/assets/vue2/ModelVue2.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> CREACIÓN  </v-card-title>
      <v-card-subtitle>Secuencia de Desarrollo</v-card-subtitle>
    </v-card-item>
    <v-card-text>
   1. Model
   2. Controller
   3. Pages
   4. Route
   5. Component
   6. Validaciones
    </v-card-text>
  </v-card>
  </v-col>
<!-- ****************************************************************************** -->
 <v-col cols="3">
        <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/ModelVue2.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Model </v-card-title>
      <v-card-subtitle>Proyectos Sursa</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Modelo básico para los model de Vue2
    </v-card-text>
  </v-card>
      </v-col>
<!-- ****************************************************************************** -->
      <v-col cols="3">
        <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/ValidacionesVue2.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Validaciones </v-card-title>
      <v-card-subtitle>Proyectos Sursa</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Validaciones para el Front y Back
    </v-card-text>
  </v-card>
</v-col>
<!-- ****************************************************************************** -->
      <v-col cols="3">
        <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/ControladorVue2.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Controller </v-card-title>
      <v-card-subtitle>Página completa</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Código total de una página
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
      <v-col cols="3">
        <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/PagesVue2.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Pages </v-card-title>
      <v-card-subtitle>Página completa</v-card-subtitle>
    </v-card-item>
    <v-card-text>
1.	Creada la pagina la podemos llamar en la PC <br>
2.	La ruta de llamada debe coincidir con la ruta<br>
3.	En el headers adecuar los nombres de acuerdo al modelo y la bd<br>
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
      <v-col cols="3">
        <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/ComponentVue2.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Component </v-card-title>
      <v-card-subtitle>Página completa</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      1.	Cambiar mayúsculas y minúsculas <br>
      2.	En los model las rutas y los nombres, línea 20 <br>
      3.	Cambiar la ruta en controlador líneas 45 y 47<br>
    </v-card-text>
  </v-card>
</v-col>
<!-- ****************************************************************************** -->
<v-col cols="3">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/vue2/Axios.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> AXIOS </v-card-title>
        <v-card-subtitle>Para obtener el enlace a la base de datos</v-card-subtitle>
      </v-card-item>
      <v-card-text>
      axios básico con el ojeto de hacer una prueba inicial
      </v-card-text>
    </v-card>
        </v-col>
      </v-row>
      <!-- /////////////////////////////////////////////////////////////////////////////////////-->
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">Vue2 OPTIONS -TEXT HTML</h2>
  </v-col>
  <!-- ****************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/TemaMenu.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Tema al menu  </v-card-title>
      <v-card-subtitle>Color de acuerdo al cambio de estado</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      1.	En la pagina(pages) el color del botón cambiará de acuerdo al estado <br>
      2. Ver imagen
    </v-card-text>
  </v-card>
</v-col>
</v-row>
<!-- ********************************************************************** -->
<v-row class="bg-purple-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">titulo</h2>
  </v-col>
  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/TemaMenu.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> titulo </v-card-title>
      <v-card-subtitle>detalle</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      explicación
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
</v-row>

</template>
<!-- ******************************* -->
<script setup>
  import { ref } from 'vue';
const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
}
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