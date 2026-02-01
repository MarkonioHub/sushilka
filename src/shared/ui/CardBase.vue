<script setup lang="ts">

</script>

<template>
  <div class="card-base">
    <slot></slot>
  </div>
</template>

<style scoped lang="sass">
.card-base
  padding: 30px
  border-radius: $border-radius
  box-shadow: $box-shadow
  background-color: $card-background
  @include media(md)
    padding: 20px
</style>
