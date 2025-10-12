<script setup lang="ts">
import { computed } from "vue"

import InfoMessage from "@/shared/ui/InfoMessage.vue"

import { useMessagesStore } from "@/widgets/InfoMessages/model/store.ts"

const messagesStore = useMessagesStore()
const messages = computed(() => {
  return messagesStore.messages
})

</script>

<template>
  <div class="info-messages">
    <InfoMessage v-for="(message, key) in messages" :key="key">
      {{ message }}
    </InfoMessage>
  </div>
</template>

<style scoped lang="sass">
.info-messages
  position: fixed
  z-index: 999999
  top: 20px
  left: 20px
  right: 20px
  display: flex
  flex-direction: column
  gap: 10px
  align-items: center
</style>
