    

      <template>
        <v-row class="bg-purple-darken-4 pa-2" >
            <v-col cols="11" class="text-center">
                <h2 >PROYECTOS </h2>
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
              <v-list-item link to="/work" title="Work24" prepend-icon="mdi-arrange-bring-to-front"></v-list-item>
              <v-list-item link to="/vue2" title="dos" prepend-icon="mdi-arrange-send-to-back"></v-list-item>
              <v-list-item link to="/store" title="tres" prepend-icon="mdi-database-cog-outline"></v-list-item>
              <v-list-item link to="/backend" title="cuatro" prepend-icon="mdi-store"></v-list-item>
            </v-list>
          </v-navigation-drawer>
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
      
          
      
        