<script>
  import { createIconPropsStruct } from '@/helpers/icon-props-struct.js'
  const iconDefaultProps = createIconPropsStruct()
</script>

<script setup>
  const props_data = defineProps({ ...iconDefaultProps })
</script>

<template>
  <svg
    :width="props_data.width"
    :height="props_data.height"
    viewBox="0 -960 960 960"
    :fill="props_data.fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
  </svg>
</template>
