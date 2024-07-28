<template>
    <div>
        <h1>Padre</h1>
        <WorkComponent/>
    </div>
</template>
<!-- ************************************* -->
<script setup>
import WorkComponent from '@/components/WorkComponent.vue';
import { provide, ref } from 'vue';

let envio = ref('Buenos dias')

provide('viene', envio)
</script>
<!-- ************************************* -->
<style scoped>

</style>