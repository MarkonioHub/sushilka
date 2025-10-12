<script setup lang="ts">
import { onMounted } from "vue"
import {useMessagesStore} from "@/widgets/InfoMessages/model/store.ts"

const messageStore = useMessagesStore()

onMounted(() => {
  setTimeout(removeMessage, 1000)
})

function removeMessage () {
  messageStore.removeMessage()
}
</script>

<template>
  <div class="info-message">
    <slot></slot>
  </div>
</template>

<style scoped lang="sass">
.info-message
  font-size: 18px
  line-height: 100%
  padding: 5px 10px
  color: $white
  background-color: $black
  border-radius: $border-radius
</style>
