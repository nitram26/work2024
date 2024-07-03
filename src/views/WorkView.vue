<template>
  <div>
    <h1>VUE3</h1>
    <v-switch
      v-model="isSwitchOn"
      :label="!isSwitchOn ? 'Cierre Caja' : 'Caja Cerrada'"
      color="blue-darken-4"
      hide-details
      @change="handleSwitchChange"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Swal from 'sweetalert2';

let isSwitchOn = ref(true);

const handleSwitchChange = async (value) => {
  if (!value) {
    const { value: password } = await Swal.fire({
      title: 'Ingrese la clave',
      input: 'password',
      inputLabel: 'Clave',
      inputPlaceholder: 'Ingrese su clave',
      inputAttributes: {
        maxlength: 10,
        autocapitalize: 'off',
        autocorrect: 'off'
      },
      showCancelButton: true,
    });

    if (password === '123') {
      isSwitchOn.value = false;
    } else {
      isSwitchOn.value = true;
      Swal.fire({
        icon: 'error',
        title: 'Clave incorrecta',
        text: 'Por favor, inténtelo de nuevo.',
      });
    }
  } else {
    isSwitchOn.value = true;
  }
};

// Esta atento a los cambios en isSwitchOn para garantizar que el cuadro de diálogo aparezca correctamente
watch(isSwitchOn, (newVal) => {
  handleSwitchChange(newVal);
  console.log(newVal);
});
</script>

<style scoped>
div{
  margin:2em;
}
</style>
