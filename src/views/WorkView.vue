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
<!-- ************************************* -->
<script setup>
import { ref } from 'vue';

let isSwitchOn = ref(true)
</script>
<!-- ************************************* -->
<style scoped>

</style>