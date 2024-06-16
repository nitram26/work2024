<template>
<v-container :fluid="true" color="red">
  <h1 class="text-green-darken-4">FORM INPUTS AND CONTROLS </h1> <br><br>
  <h2 class="bg-teal-lighten-4">TEXT-FIELD</h2> <br>
  <v-row >
    <v-col cols="2">
      <h2>MODELO BASE </h2>
    </v-col>
    <v-col cols="4">
        <v-text-field 
        width="400"
        clearable 
        label="Label" 
        prepend-icon="$vuetify">
    </v-text-field>
    </v-col>
    <v-col cols="2">
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
    <v-col cols="2">
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
  </v-row>
  <v-row >
    <v-col cols="2">
      <h2>ONCLICK <br>+ SCRIPT </h2>
    </v-col>
    <v-col cols="4">
      <v-text-field
        clearable
        label="Last name"
        placeholder="Doe"
        persistent-clear
        @click:clear="onClear"
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <h2 class="bg-cyan-darken-1">RULES  SCRIPT </h2>
      <h6 class="bg-cyan-darken-1">CAMPO REQUERIDO <br> AVISO Y COLOR</h6>
    </v-col>
    <v-col cols="4">
      <v-responsive
        class="mx-auto"
        max-width="344"
      >
      <v-text-field
        :rules="[rules1.required]"
        label="Last name"
        clearable
      ></v-text-field>
</v-responsive>
    </v-col>
  </v-row>
  <v-divider vertical></v-divider>
  <h2 class="ma-4">ATRIBUTOS PARA EL TEXT-FIELD</h2>
  <v-divider vertical></v-divider>
  <v-row>
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
</v-row>
  <!-- FORMULARIOS///////////////////////////////// -->
  <!-- BASIC -->
   <v-divider vertical></v-divider>
  <h2 class="bg-teal-darken-3 pt-4">FORMULARIOS</h2>
   <v-divider vertical></v-divider>
  <v-row>
    <v-col cols="12">
      <v-sheet  class="bg-deep-purple pa-12" rounded>
        <v-card class="mx-auto px-6 py-8 " max-width="344">
          <v-form
          v-model="form"
          @submit.prevent="onSubmit"
          >
          <v-text-field
          v-model="emails"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>
        <br>
        <v-btn
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Sign in 
        </v-btn>
          </v-form>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
  <h2 class="ma-6">HINT /INDICACIÓN</h2>
  <v-row>
    <v-col
        cols="12"
        sm="6"
      ><v-text-field
        hint="For example, flowers or used cars"
        label="Your product or service"
        model-value="Grocery delivery"
      ></v-text-field>
    </v-col>
</v-row>
<h2 class="my-6  bg-brown pa-4">ICONOS</h2>
<v-row>
  <v-col>
    <v-text-field
            label="Prepend-icon"
            prepend-icon="mdi-map-marker"
          ></v-text-field>

          <v-text-field
            label="Prepend-inner-icon"
            prepend-inner-icon="mdi-map-marker"
          ></v-text-field>

          <v-text-field
            append-icon="mdi-map-marker"
            label="Append-icon"
          ></v-text-field>

          <v-text-field
            append-inner-icon="mdi-map-marker"
            label="Append-inner-icon"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            label="Prepend-icon"
            prepend-icon="mdi-map-marker"
            variant="solo"
          ></v-text-field>

          <v-text-field
            label="Prepend-inner-icon"
            prepend-inner-icon="mdi-map-marker"
            variant="solo"
          ></v-text-field>
  </v-col>
</v-row>
<h2 class="my-6  bg-pink pa-4">PREFIJOS Y SUFIJOS</h2>
<v-row>
  <v-col>
    <v-row>
      <v-col cols="4">
        <v-list-subheader>Prefijo para moneda</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="Amount"
          model-value="10.00"
          prefix="$"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>Sufijo para peso</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="Weight"
          model-value="28.00"
          suffix="lbs"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>Sufijo para correo</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="Email address"
          model-value="example"
          suffix="@gmail.com"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-list-subheader>Sufijo para zona horaria</v-list-subheader>
      </v-col>

      <v-col cols="8">
        <v-text-field
          label="Label Text"
          model-value="12:30:00"
          suffix="PST"
          type="time"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-col>
</v-row>
<h2 class="my-6  bg-purple pa-4">VALIDACIONES SCRIPT</h2>
 <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="title"
            :rules="[rules.required, rules.counter]"
            label="Title"
            maxlength="20"
            counter
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <H2 class="my-6  bg-blue pa-4">VARIANT PARA TEXT-FIELD</H2>
  <v-form>
    <v-row>     
        <v-col
          cols="4"
        >
          <v-text-field
            label="Regular"
            placeholder="Placeholder"
          ></v-text-field>
        </v-col>

        <v-col
          cols="4"
        >
          <v-text-field
            label="Solo"
            placeholder="Placeholder"
            variant="solo"
          ></v-text-field>
        </v-col>
   
        <v-col
          cols="4"
        >
          <v-text-field
            label="Filled"
            placeholder="Placeholder"
            variant="filled"
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-text-field
            label="Outlined"
            placeholder="Placeholder"
            variant="outlined"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-text-field
            label="Plain"
            placeholder="Placeholder"
            variant="plain"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
          sm="6"
        >
          <v-text-field
            label="Underlined"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            placeholder="Placeholder"
            variant="underlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
        </v-col>
    </v-row>
  </v-form>

</v-container>

  <v-container>
    <v-row>
      <v-col cols="4">
    <h2 class="bg-indigo-lighten-4 py-4">AUTOCOMPLETE</h2>
    <p class="bg-light-blue-lighten-4 py-4">CHIPS, da esa forma redondeada <br><br> MULTIPLE nos permite elegir varias opciones, si solo se quiere una se elimina esta palabra <br><br> :ITEMS, guarda los elementos para mostrar de manera directa</p>
    <v-autocomplete
  clearable
  chips
  label="Autocomplete"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  multiple
></v-autocomplete>
  </v-col>

  <v-col cols="4">
    <h2 class="bg-teal-lighten-4 pa-4">COMBOBOX</h2>
    <p class="bg-light-blue-lighten-4 pa-4">EXACTO AL ANTERIOR</p>
    <v-combobox
  clearable
  chips
  multiple
  label="Combobox"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
></v-combobox>
  </v-col>
  <v-col cols="4">
    <h2 class="bg-teal-lighten-4 pa-4">CHECK BOX <br>SCRIPT</h2>
    <p class="bg-light-blue-lighten-4 pa-4">Elegir un valor booleano</p>
    <v-checkbox label="Checkbox"></v-checkbox>
    <v-checkbox class="bg-lime"
        color="green"
        label="azul"
        value="azul"
        v-model="colores"
        >
        </v-checkbox>
        <v-checkbox class="bg-lime"
        color="green"
        label="cyan"
        value="cyan"
        v-model="colores"
        >
        </v-checkbox>
        <v-checkbox class="bg-lime"
        color="green"
        label="Rojo"
        value="Rojo"
        v-model="colores"
        >
        </v-checkbox>
        <span class="bg-cyan text-white ">COLORES</span>

<p v-for="(color, index) in colores" :key="index">{{ color }}</p> <br><br>
  </v-col>
</v-row>

<v-row>
  <v-col cols="4">
  <h2 class="bg-yellow-lighten-4 pa-4">SWITCH <br> SCRIPT</h2>
    <p class="bg-light-blue-lighten-4 pa-4">Elegir un valor booleano</p>
  <v-container fluid>
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
  </v-container>
    </v-col>

    <v-col cols="4">
      <h2 class="bg-yellow-lighten-4 pa-4">RADIO BUTTONS <br>SCRIPT</h2>
    <p class="bg-light-orange-lighten-4 pa-4">Elegir un valor de las opciones presentadas</p>
    <v-radio-group class="bg-deep-orange"
    label="Departamento"
    v-model="departamento">
      <v-radio
      color="green"
      label="San Salvador"
      value="San Salvador"
      ></v-radio>
      <v-radio
      color="green"
      label="San Miguel"
      value="San Miguel"
      ></v-radio>
      <v-radio
      color="green"
      label="Santa Teresa"
      value="Santa Teresa"
      ></v-radio>
    </v-radio-group>
    <h3>Datos</h3>
  <p>{{ departamento }}</p>
    </v-col>
    
    <v-col cols="4">
      <h2 class="bg-yellow-lighten-4 pa-4">FILE INPUTS <br>SCRIPT</h2>
    <p class="bg-orange-lighten-4 pa-4 mb-4">Guarda enlaces a archivos o imágenes</p>
    <v-file-input
    v-model="files"
    :show-size="1000"
    color="deep-purple-accent-4"
    label="File input"
    placeholder="Select your files"
    prepend-icon="mdi-paperclip"
    variant="outlined"
    counter
    multiple
  >
    <template v-slot:selection="{ fileNames }">
      <template v-for="(fileName, index) in fileNames" :key="fileName">
        <v-chip
          v-if="index < 2"
          class="me-2"
          color="deep-purple-accent-4"
          size="small"
          label
        >
          {{ fileName }}
        </v-chip>

        <span
          v-else-if="index === 2"
          class="text-overline text-grey-darken-3 mx-2"
        >
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </template>
  </v-file-input>
    </v-col> 
  </v-row>




















</v-container>
</template>
<!-- ************************************* -->
<script setup>
import { ref } from 'vue';

//CLEARABLE
let model= ref('Escribir aquí')

//ONCLICK
let onClear = ()=>{
  alert('User cleared the input')
}

//RULES
const rules1 = ref({
      required: value => !!value || 'El apellido es requerido',
    });
//FORMULARIOS////////////////////////////////////////    
///BASIC//////////
const form = ref(false);
const emails = ref(null);
const password = ref(null);
const loading = ref(false);

const onSubmit = () => {
  if (!form.value) return;

  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
};

const required = (v) => {
  return !!v || 'Field is required';
};

//VALIDACIONES
const title = 'Preliminary report';
const email = ref('');
const rules = {
  required: value => !!value || 'Required.',
  counter: value => value.length <= 20 || 'Max 20 characters',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },
};

//VARIANTE PARA TEXT-FIELD
const visible = ref(false);

//CHECK-BOX
let colores = ref([''])

//SWITCH
let people = ref([])

//RADIO BUTTONS
let departamento= ref('San Salvador')


//FILE INPUTS
let files=ref([])







</script>
<!-- ************************************* -->
<style scoped>

</style>