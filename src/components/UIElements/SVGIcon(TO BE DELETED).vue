<script setup>
  import { defineAsyncComponent } from 'vue'

  const props_data = defineProps({
    icon: {
      type: String,
      required: true
    }
  })
  const dynamicComponent = defineAsyncComponent(
    () => import(`@/components/SVGList/${props_data.icon}.vue`)
  )
</script>

<template>
  <component
    :is="dynamicComponent"
    v-bind="$attrs"
  />
</template>
