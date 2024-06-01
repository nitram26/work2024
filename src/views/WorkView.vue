      <template>
        <v-row class="bg-purple-darken-4 pa-2" >
            <v-col cols="11" class="text-center">
                <h2 >WORK24 </h2>
          </v-col>
          <v-col cols="1" >
      
      <v-btn icon @click="toggleDrawer" >
          <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
          </v-col>
        </v-row>
        <!-- ********************************************* -->
        <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
            <v-list>
              <v-list-item link to="/" title="INICIO" prepend-icon="mdi-grid"></v-list-item>
              <v-list-item link to="/work" title="Estructura" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
              <v-list-item link to="/vue2" title="dos" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
              <v-list-item link to="/store" title="tres" prepend-icon="mdi-database-cog-outline"></v-list-item>
              <v-list-item link to="/backend" title="cuatro" prepend-icon="mdi-store"></v-list-item>
            </v-list>
          </v-navigation-drawer>
<!-- *********************************************** -->
          <v-row>
            <v-col cols="12">
              <h2 class="bg-teal text-center pa-2">Estructuras</h2>
            </v-col>
            <v-col cols="3" class="bg-teal-lighten-5">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/proyectos/HomeFront.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> Navegador de Página </v-card-title>
        <v-card-subtitle>Código para este navegador</v-card-subtitle>
      </v-card-item>
      <v-card-text>
     Navegador con botón para abrir el 2° drawer
      </v-card-text>
    </v-card>
        </v-col>
  <!-- ****************************************************************** -->
            <v-col cols="3" class="bg-teal-lighten-5">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/proyectos/Tarjeta.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> Tarjeta </v-card-title>
        <v-card-subtitle>Código para este navegador</v-card-subtitle>
      </v-card-item>
      <v-card-text>
     Plantilla para agregar tarjetas
      </v-card-text>
    </v-card>
        </v-col>
  <!-- ****************************************************************** -->
  
      <v-col cols="3" class="bg-teal-lighten-5">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/origin/PaginaPrincipal.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> PÁGINA App.vue </v-card-title>
        <v-card-subtitle>Menu principal y lateral</v-card-subtitle>
      </v-card-item>
      <v-card-text>
    Menu navigation-drawer 
      </v-card-text>
    </v-card> 
        </v-col>
  <!-- ****************************************************************************** -->
      <v-col cols="3" class="bg-teal-lighten-5">
          <v-card
      class="mx-auto my-8"
      elevation="16"
      target="_blank"
      href="http://127.0.0.1:5500/src/assets/origin/MenuSecundario.html"
      max-width="344" >
      <v-card-item>
        <v-card-title> SUB TÍTULO  </v-card-title>
        <v-card-subtitle>Menu SECUNDARIO lateral</v-card-subtitle>
      </v-card-item>
      <v-card-text>
 uso de enlaces internos
      </v-card-text>
    </v-card> 
    </v-col>
  <!-- ************************************************************* -->
  </v-row>
</template>
        <!-- *********************************************** -->
        <script setup>
        import { ref } from 'vue';
      const drawer = ref(false);
      
      const toggleDrawer = () => {
        drawer.value = !drawer.value;
      }
        </script>
        <!-- ************************************************* -->
      