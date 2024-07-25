<script setup>
  const props_data = defineProps({
    image_src: {
      type: String,
      default: () => '',
      required: true,
    },
    image_alt: {
      type: String,
      default: () => '',
      required: true,
    },
    image_loading: {
      type: String,
      default: () => 'lazy'
    },
  })

  //Vite for binding image
  let imgUrl
  if(props_data.image_src.startsWith("https://")) {
    imgUrl = props_data.image_src
  } else {
    imgUrl = new URL(
      `../../assets/images/${props_data.image_src}`,
      import.meta.url,
    ).href
  }
</script>

<template>
  <img 
    v-lazy="imgUrl"
    :alt="props_data.image_alt"
    :loading="props_data.image_loading"
  />
</template>
