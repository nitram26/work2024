<template>
    <div>
       <v-container :fluid="true">
          <h1 class="text-green-darken-4">Tarjeta </h1>
          <h2>3 Maneras de hacer lo mismo</h2>
          <v-col cols="12" md="4">
      <v-card
         title="This is a title"
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
      ></v-card>

      <div class="text-center text-caption">Using Props Only</div>
    </v-col>
    
    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>

      <div class="text-center text-caption">Using Slots Only</div>
    </v-col>
     <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
       </v-container>
    </div>
</template>
<!-- ************************************* -->
<script setup>

</script>
<!-- ************************************* -->
<style scoped>

</style>