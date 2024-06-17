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
        <v-list-item link to="/" title="HOME" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front">MODELOS DE PAG</v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">OPTIONS</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-database-cog-outline">FECHAS</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section4')" prepend-icon="mdi-arrange-bring-to-front">uno</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section5')" prepend-icon="mdi-arrange-send-to-back">dos</v-btn></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->
    <div id="section1" class="mt-12" style="height: 100vh;" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">MODELOS DE PAGINAS COMPLETAS</h3>
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
    href="http://127.0.0.1:5502/src/assets/vue2/ControladorVue2.html"
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
      axios básico con el objeto de hacer una prueba inicial
      </v-card-text>
    </v-card>
        </v-col>
      </v-row>
    </div>

      <!-- /////////////////////////////////////////////////////////////////////////////////////-->
      <div id="section2" style="height: 100vh;">
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">Vue2 OPTIONS </h2>
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
      <v-card-title> Color según Estado </v-card-title>
      <v-card-subtitle>Color de acuerdo al cambio de estado</v-card-subtitle>
    </v-card-item>
    <v-card-text>     Ver imagen
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/BotonRefrescar.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Botón refrescar </v-card-title>
      <v-card-subtitle>Ver imagen</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      El botón refrescará la pagina
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/numRegistro.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Ver N° de Registros</v-card-title>
      <v-card-subtitle>Ver imagen</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Cantidad de registros de una Página
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/TextfieldStatus.html"
    max-width="344" >
    <v-card-item>
      <v-card-title>Registros por Estado y Categoria</v-card-title>
      <v-card-subtitle>Incluye Iconos con color</v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Ver por consola o en Pantalla
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/ListarporNombre.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Listar por Nombre</v-card-title>
      <v-card-subtitle>En Add</v-card-subtitle>
    </v-card-item>
    <v-card-text>
     Traer registros de BD de acuerdo a selección
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/SeleccionarCampo.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> Seleccionar Campo</v-card-title>
      <v-card-subtitle>En la tabla</v-card-subtitle>
    </v-card-item>
    <v-card-text>
     Traer registros de acuerdo a selección
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
</v-row>
</div>
<!-- ********************************************************************** -->
 <div id="section3" style="height: 100vh;">
<v-row class="bg-purple-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4 text-center">FECHA</h2>
  </v-col>
  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vue2/FechaSinhora.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> FECHA SIN HORA </v-card-title>
      <v-card-subtitle> Eliminar la hora</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    fecha sin hora
    </v-card-text>
  </v-card>
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
</div>
</template>
<!-- ******************************* -->
<script setup>
  import { ref } from 'vue';
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