  <template>
    <v-row class="bg-purple-darken-4 pa-2 mt-12 fixed-top" >
        <v-col cols="11" class="text-center">
            <h2 >FRONT view</h2>
      </v-col>
      <v-col cols="1" >
  
  <v-btn icon @click="toggleDrawer" >
      <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
      </v-col>
    </v-row>
    <!-- ********************************************* -->
    <v-navigation-drawer v-model="drawer" class="br-teal-darken-4" theme="dark">
        <v-list>
          <v-list-item link to="/" title="Carlos" prepend-icon="mdi-grid"></v-list-item>
          <v-list-item link to="/front" title="Vue2" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
          <v-list-item link to="/vue2" title="dos" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
          <v-list-item link to="/store" title="tres" prepend-icon="mdi-database-cog-outline"></v-list-item>
          <v-list-item link to="/backend" title="cuatro" prepend-icon="mdi-store"></v-list-item>
        </v-list>
      </v-navigation-drawer>
<!-- ******************************* -->
    <v-row class="mt-12">
      <v-col class="mt-4">
        <h3 class="bg-blue pa-4  text-center">FECHA</h3>
      </v-col>
      
        </v-row>
        <!-- fin de navegador derecho -->
     
<!-- ********************************************************************** -->
<v-row class="bg-purple-lighten-4">

  <!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5501/src/assets/vue2/FechaSinhora.html"
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
    href="http://127.0.0.1:5501/src/assets/vue2/TemaMenu.html"
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
<!-- //////////////////////////////////////////////////////////////// -->
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
   
  
    