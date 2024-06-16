<template>
  <v-row class="bg-purple-darken-4 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >CONTAINMENT </h2>
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
        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front">Buttons</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">Cards</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store">Cards & Icono e Imagen</v-btn></v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->
    <div id="section1" class="mt-12" >
      <v-row class="bg-red-lighten-4">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">BUTTONS</h3>
    </v-col>
        <!-- ****************************************************************************** -->
        <v-col cols="6">
    <p class="bg-orange-lighten-4 pa-4 mb-4"><b>DENSIDAD</b> Tiene tres opciones => density="compact", density="comfortable", y  density="default"<br> <br>
      
      <b>TAMAÑO</b> se asigna usando => size="x-small",size="small",size="large",size="x-large", <br><br><b>BLOQUEO</b>  bloquear el botón se usa => block dentro de la etiqueta, solamente una palabra <br><br>
      
      <b>REDONDEAR</b> se usa => rounded ="0", xs, sm, lg, xl. <br><br>
      
      <b>ELEVACIÓN</b>se usa => elevation="4" , 8,12,16,20,24 <br><br>
      
      <b>ICONO</b> No acepta texto, se usa icon="mdi-plus"<br><br>
      
      <b>EN EL BAR</b> Botones con texto e imagen <br><br>
      
      <b>CONFIGURACIÓN GLOBALES</b> POSIBLE QUE DENTRO DE UN PROYECTO LOS BOTONES TENGAN CIERTAS CARACTERÍSTICA, PARA ESO VER BUTTONS EN VUETIFY</p>

  </v-col>
        <!-- ****************************************************************************** -->
        <v-col cols="6">
      
      <v-btn density="compact" class="ma-3">Compact Button</v-btn> 
      <v-btn density="comfortable" class="ma-3" >Comfortable Button</v-btn>
      <v-btn density="default" class="ma-3">Default Button</v-btn>
        <H3 class="ma-4">BOTÓN PARA BAR</H3>
      <div class="text-center">
      <v-btn
        append-icon="mdi-account-circle"
        prepend-icon="mdi-check-circle"
      >
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>
        Button
        <template v-slot:append>
          <v-icon color="warning"></v-icon>
        </template>
      </v-btn>
    </div>
    <H3 class="ma-4">BOTÓN DE NAVEGACIÓN</H3>
    <v-layout
      class="overflow-visible"
      style="height: 56px;"
    >
      <v-bottom-navigation
        v-model="cambio"
        active
      >
        <v-btn>Home</v-btn>
  
        <v-btn>recientes</v-btn>
  
        <v-btn>Favoritos</v-btn>
      </v-bottom-navigation>
    </v-layout>
      </v-col>
        <!-- ****************************************************************************** -->
    
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vuetify/Botones.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> BOTONES  </v-card-title>
      <v-card-subtitle>Modelos</v-card-subtitle>
    </v-card-item>
    <v-card-text>
   códigos
    </v-card-text>
  </v-card>
  </v-col>
      </v-row>
    </div>
      <!-- ////////////////////////////////////////////////////////////////////-->
    <div id="section2" style="height: 100vh;">
      <v-row class="my-12 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">CARD </h2>
  </v-col>
  <!-- ****************************************** -->
  <v-col cols="3">
      <h2 class="bg-blue-lighten-4 pa-4">Modelo Simple</h2>
      <v-card
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="340"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </v-card-text>
   </v-card>
  </v-col>
   <v-col cols="3">
    <h2 class="bg-green-lighten-4 pa-4">CON ELEVACIÓN</h2>
  <v-card
    class="mx-auto my-8"
    elevation="16"
    max-width="344"
  >
    <v-card-item>
      <v-card-title>
        Card title
      </v-card-title>

      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
  </v-card>
   </v-col>
<v-col cols="3">
  <h2 class="bg-lime-lighten-4 pa-4">FLOTANTE</h2>
  <v-card
    class="mx-auto"
    max-width="344"
    hover
  >
    <v-card-item>
      <v-card-title>
        Card title
      </v-card-title>

      <v-card-subtitle>
        Card subtitle secondary text
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
  </v-card>
</v-col>
<v-col cols="3">
<h2 class="bg-brown-lighten-3 pa-4">IMAGEN DE FONDO</h2>
  <v-card
    class="mx-auto"
    color="surface-variant"
    image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
    max-width="340"
    subtitle="Take a walk down the beach"
    title="Evening sunset"
  >
    <template v-slot:actions>
      <v-btn
        append-icon="mdi-chevron-right"
        color="red-lighten-2"
        text="Book Activity"
        variant="outlined"
        block
      ></v-btn>
    </template>
  </v-card>
</v-col>
  <!-- ****************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vuetify/Cards.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> CARDS </v-card-title>
      <v-card-subtitle>CÓDIGOS</v-card-subtitle>
    </v-card-item>
    <v-card-text> 
       Modelos básicos
    </v-card-text>
  </v-card>
</v-col>

<!-- ********************************************************************** -->
</v-row>
</div>
<!-- ********************************************************************** -->
 <div id="section3">
<v-row class="bg-purple-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4 text-center">CARDS CON ICONO E IMAGEN </h2>
  </v-col>
  <!-- ********************************************************************** -->
  <v-col cols="4">
    <h2 class="bg-orange-lighten-3 pa-4">ICONO E IMAGEN </h2>
    <v-card
      append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
      class="mx-auto"
      prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
      subtitle="prepend-avatar and append-avatar"
      title="Avatars"
    >
      <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
  </v-col>
  <!-- ***************************************************** -->
  <v-col cols="4">
    <h2 class="bg-brown-lighten-3 pa-4">REJILLAS <br>SCRIPT</h2>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="medium-emphasis"
                icon="mdi-heart"
                size="small"
              ></v-btn>

              <v-btn
                color="medium-emphasis"
                icon="mdi-bookmark"
                size="small"
              ></v-btn>

              <v-btn
                color="medium-emphasis"
                icon="mdi-share-variant"
                size="small"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  <!-- ******************************************************** -->
  </v-col>
  <v-col cols=" 4">
    <h2 class="bg-light-blue-lighten-3 pa-4 ma-6">IMAGEN Y TEXTO <br> SCRIPT </h2>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Number 10
    </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="Share"></v-btn>

      <v-btn color="orange" text="Explore"></v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  <!-- ***************************************************** -->
  <v-col cols="4">
    <h2 class="bg-yellow-lighten-3 pa-4 ma-6">TARJETA DE FINANCIACIÓN <br> SCRIPT </h2>
  <v-container>
    <v-card>
      <v-card-title class="text-overline">
        Progress

        <div class="text-green-darken-3 text-h3 font-weight-bold">90%</div>

        <div class="text-h6 text-medium-emphasis font-weight-regular">
          $2,938.00 remaining
        </div>
      </v-card-title>
      <br>
      <v-card-text>
        <div
          :style="`right: calc(${review} - 32px)`"
          class="position-absolute mt-n8 text-caption text-green-darken-3"
        >
          Eligibility review
        </div>
        <v-progress-linear
          color="green-darken-3"
          height="22"
          model-value="90"
          rounded="lg"
        >
          <v-badge
            :style="`right: ${review}`"
            class="position-absolute"
            color="white"
            dot
            inline
          ></v-badge>
        </v-progress-linear>

        <div class="d-flex justify-space-between py-3">
          <span class="text-green-darken-3 font-weight-medium">
            $26,442.00 remitted
          </span>

          <span class="text-medium-emphasis"> $29,380.00 total </span>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-list-item
        append-icon="mdi-chevron-right"
        lines="two"
        subtitle="Details and agreement"
        link
      ></v-list-item>
    </v-card>
  </v-container>
  </v-col>
  <!-- ********************************************************************** -->
</v-row>
   <v-row class="bg-purple-lighten-4">
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5500/src/assets/vuetify/CardIcon.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> CARDS CON ICONO E IMAGEN </v-card-title>
      <v-card-subtitle> Modelos</v-card-subtitle>
    </v-card-item>
    <v-card-text>
   Algunas trabajan con Script
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

let cambio = ref(0)

//card rejilla
const cards = ref([
  { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
  { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
])

//tarjeta de financiación
const review = ref('30%');

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
  