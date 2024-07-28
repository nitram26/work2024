<template>
  <div class="uno">
    <h2>hijo</h2>

<h3>{{ title }} </h3>
<p> {{ content }}</p>
  </div>

</template>
<!-- //////////////////////////////////////////////////// -->
<script setup>

let props = defineProps(
  {
  title:String,
  content:String,
 
}

)


</script>
<!-- //////////////////////////////////////////////////// -->
<style scoped>
.uno{
  border: solid brown 3px;
  width: 28em;
  padding: 3em;
  border-radius: 2em;
  background-color: aliceblue;
}
</style>
