<template>
  <v-row class="bg-purple-darken-4 pa-2 mt-12 fixed-top" >
      <v-col cols="11" class="text-center">
          <h2 >FORM & INPUT CONTROLS </h2>
    </v-col>
    <v-col cols="1" >

<v-btn icon @click="toggleDrawer" >
    <v-img src="@/assets/image/CERVERA.png" alt="My Image2" style="width: 39px; border-radius: 1em;"/></v-btn>
    </v-col>
  </v-row>
  <!-- ********************************************* -->
  <v-navigation-drawer v-model="drawer" class="br-teal-darken-4 " theme="dark">
      <v-list>
        <v-list-item link to="/" title="HOME" prepend-icon="mdi-grid"></v-list-item>
        <v-list-item ><v-btn @click="scrollTo('section1')" prepend-icon="mdi-arrange-bring-to-front">TEXT FIELD</v-btn></v-list-item>
        <v-list-item><v-btn @click="scrollTo('section2')" prepend-icon="mdi-store">AUTOCOMPLETE</v-btn></v-list-item>

        <v-list-item><v-btn @click="scrollTo('section3')" prepend-icon="mdi-store">SWITCH</v-btn></v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <!-- fin de navegador derecho -->
    <!-- ********************************** -->
    <div id="section1" class="mt-12" >
      <v-row class="bg-green-lighten-3 ">
    <v-col cols="12" class="mt-6">
      <h3 class="bg-blue pa-4  text-center">TEXT FIELD</h3>
    </v-col>
<!-- ************************************************************* -->
<v-col cols="2" class="pl-4">
      <h2>MODELO BASE </h2>
    </v-col>
    <v-col cols="4">
        <v-text-field
        width="400"
        clearable
        label="Titulo"
        prepend-icon="$vuetify">
    </v-text-field>
    </v-col>
    <v-col cols="2" >
      <h2>MODELO PLACEHOLDER </h2>
    </v-col>
      <v-col cols="4">
        <v-text-field
          label="Email address"
          placeholder="johndoe@gmail.com"
          type="email"
      ></v-text-field>
    </v-col>
  </v-row>
  <v-row >
    <v-col cols="2" class="pl-5">
      <h2 class="bg-purple-lighten-2">HINTS & MESSAGES </h2>
    </v-col>
    <v-col cols="4">
      <v-responsive
        class="mx-auto"
        max-width="344">
        <v-text-field
          hint="Ingrese su clave para tener acceso"
          label="Password"
          type="input"
        ></v-text-field>
  </v-responsive>
    </v-col>
    <v-col cols="2">
      <h2>CLEARABLE <br> + SCRIPT </h2>
    </v-col>
      <v-col cols="4">
        <v-responsive
          class="mx-auto"
          max-width="344">
          <v-text-field
          v-model="model"
          hide-details="auto"
          label="Last name"
          clearable
        ></v-text-field>
    </v-responsive>
    </v-col>
<!-- ************************************************************* -->
<v-divider vertical></v-divider>
  <h2 class="ma-4">ATRIBUTOS PARA EL TEXT-FIELD</h2>
  <v-divider vertical></v-divider>
 
  <v-table hover>
    <thead>
        <tr>
          <th>ATRIBUTO</th>
          <th>DESCRIPCIÓN</th>
        
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>auto-grow</td>
          <td> Hace que el área de texto crezca automáticamente según el contenido.</td>
        </tr>
          <tr>
          <td>clearable</td>
          <td>Booleano para mostrar un botón de limpieza.</td>
        </tr>
         <tr>
          <td>counter</td>
          <td>Booleano para mostrar un contador de caracteres.</td>
        </tr>
        <tr>
          <td>Density</td>
          <td>La propiedad de densidad disminuye la altura del campo de texto según 1 de 3 niveles de densidad; default, comfortable, and compact.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Booleano para deshabilitar el campo.</td>
        </tr>
          <tr>
          <td>error-messages</td>
          <td>Array de mensajes de error personalizados</td>
        </tr>
         <tr>
          <td>hide-details</td>
          <td>Controla cuándo ocultar los detalles de validación</td>
        </tr>
         <tr>
          <td>hint</td>
          <td>Texto de ayuda.</td>
        </tr>
         <tr>
          <td>label</td>
          <td> Etiqueta del nombre campo.</td>
        </tr>
        <tr>
          <td>persistent-hint</td>
          <td>Booleano para mostrar la ayuda incluso cuando el campo está enfocado.</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>Texto de marcador de posición.</td>
        </tr>
        <tr>
          <td>prefix</td>
          <td>Texto que se muestra antes del valor del campo.</td>
        </tr>
        <tr>
          <td>prepend-icon y append-icon</td>
          <td>Íconos que se muestran antes y después del campo, respectivamente.</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>Booleano para establecer el campo como de solo lectura.</td>
        </tr>
        <tr>
          <td>required</td>
          <td>Booleano para requerir que se complete el campo.</td>
        </tr>
        <tr>
          <td>rows</td>
          <td>Número de filas para un área de texto</td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>Texto que se muestra después del valor del campo</td>
        </tr>
        <tr>
          <td>type</td>
          <td>Tipo de campo de entrada (por ejemplo, 'text', 'password', 'email', etc.).</td>
        </tr>
        <tr>
          <td>v-model</td>
          <td> Propiedad para vincular datos bi direccionalmente.</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
    </tbody>
  </v-table>
<!-- ************************************************************* -->
        <v-col cols="3">
      <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/vuetify/TextField.html"
    max-width="344" >
    <v-card-item>
      <v-card-title class="text-red"> V-Text_field  </v-card-title>
      <v-card-subtitle>Códigos</v-card-subtitle>
    </v-card-item>
    <v-card-text>
  Necesita Script
    </v-card-text>
  </v-card>
  </v-col>
      </v-row>
    </div>

      <!-- //////////////////////////////////////////////////////////////-->
      <div id="section2" >
      <v-row class="my-14 text-center bg-teal-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4">AUTOCOMPLETE</h2>
  </v-col>
  <!-- ****************************************** -->

  <!-- ****************************************** -->
  <v-col cols="3">
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/vue2/TemaMenu.html"
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
</v-row>
</div>
<!-- ********************************************************************** -->
 <div id="section3" style="height: 100vh;">
<v-row class="bg-purple-lighten-4">
  <v-col cols="12">
    <h2 class="bg-pink-darken-4 pa-4 text-center">SWITCH</h2>
  </v-col>
 
     <!-- *************************************************************** -->
    <v-col cols="3">
   <h2>INDETERMINADO</h2> 
   <v-switch label="Switch" indeterminate></v-switch>
  </v-col>
  <!-- ************************************** -->
  <v-col cols="3">
   <H2>COLOR</H2>
      <v-switch
        color="primary"
        label="COLOR primary"
        hide-details
      ></v-switch>
      <p>Para vue2 necesita script-data ver documentación</p>
    </v-col>
      <!-- ************************************** -->
      <v-col cols="3">
      <h2>INSET</h2>
        <v-switch
          v-model="model"
          :label="`Switch: ${model.toString()}`"
          hide-details
          inset
        ></v-switch>
      </v-col>
        <!-- ************************************** -->

<v-col cols="3">
        <h2>MODELO CON ARRAY</h2>
            <p>{{ people }}</p>
    <v-switch
      v-model="people"
      color="primary"
      label="John"
      value="John"
      hide-details
    ></v-switch>
    <v-switch
      v-model="people"
      color="primary"
      label="Jacob"
      value="Jacob"
      hide-details
    ></v-switch>
    <p>Con Script</p>
  </v-col>
  <!-- ********************************** -->
  <v-col cols="3">
    <h2>ON LOADING</h2>
      <v-switch
        :model-value="true"
        label="on loading"
        loading="warning"
      ></v-switch>
      <p>Sin script</p>
    </v-col>
      <!-- ************************************** -->
      <v-col cols="3">
  <h2>IN PROGRESS</h2>
  <v-switch v-model="switchMe">
    <template v-slot:label>
      Turn on the progress:
      <v-progress-circular
        :indeterminate="switchMe"
        class="ms-2"
        size="24"
      ></v-progress-circular>
    </template>
  </v-switch>
<P>Con Script</P>
</v-col>
      <!-- ************************************** -->
  <!-- //////////////////////////////////////////////////// -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/vuetify/Switch.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> SWITCH </v-card-title>
      <v-card-subtitle> Modelos</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Códigos
    </v-card-text>
  </v-card>
</v-col>
<!-- ********************************************************************** -->
  <v-col cols="3" >
    <v-card
    class="mx-auto my-8"
    elevation="16"
    target="_blank"
    href="http://127.0.0.1:5502/src/assets/vuetify/SwitchCwal.html"
    max-width="344" >
    <v-card-item>
      <v-card-title> SWITCH </v-card-title>
      <v-card-subtitle> Swal.fire</v-card-subtitle>
    </v-card-item>
    <v-card-text>
    Necesita clave para moverse
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
// switch
let model = ref(true) 
let people = ref('John')
let  switchMe = ref(false)

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
  