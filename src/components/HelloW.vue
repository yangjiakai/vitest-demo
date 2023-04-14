<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="">
    <h1>Hello, {{ name }}!</h1>
  </div>
</template>

<style scoped lang="scss"></style>
