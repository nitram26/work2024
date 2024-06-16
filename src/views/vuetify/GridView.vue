<template>
       <v-container :fluid="true">
          <h1 class="text-green-darken-4">HOME </h1>
       
  <v-navigation-drawer class="br-teal-darken-4" theme="dark" >
        <v-list-item
         link to="/" 
         title="Grid"
        prepend-icon="mdi-grid"
         >
        </v-list-item>
        <v-list-item
         link to="/content" 
         title="Content"
        prepend-icon="mdi-table-of-contents"
         >
        </v-list-item>
        <v-list-item
         link to="/navigation" 
         title="Navigation"
        prepend-icon="mdi-navigation"
         >
        </v-list-item>
        <v-list-item
         link to="/form" 
         title="Form Inputs/Controls"
        prepend-icon="mdi-form-textbox"
         >
        </v-list-item>
        <v-list-item
         link to="/alert" 
         title="Alert"
        prepend-icon="mdi-bell"
         >
        </v-list-item>
        <v-list-item
         link to="/tabs" 
         title="Tabs"
        prepend-icon="mdi-tab"
         >
        </v-list-item>
        <v-list-item
         link to="/table" 
         title="Table"
        prepend-icon="mdi-table"
         >
        </v-list-item>
        <v-list-item
         link to="/card" 
         title="Card"
        prepend-icon="mdi-card"
         >
        </v-list-item>
    </v-navigation-drawer>
    <v-row>
        <v-col class="">Columna 1</v-col>
        <v-col>Columna 2</v-col>
        <v-col>Columna 3</v-col>
    </v-row>
    <v-row>
        <v-col class="bg-blue-darken-3 text-white">Columna 4</v-col>
        <v-col cols="7" class="bg-red-lighten-3">Columna 5</v-col>
        <v-col cols="3" class="bg-purple-lighten-2">Columna 5</v-col>
     
    </v-row>
    <v-row>
        <v-col>Columna 6</v-col>
      
    </v-row>
  </v-container>
</template>
<!-- ************************************* -->
<script setup>

</script>
<!-- ************************************* -->
<style scoped>

</style>
    

