<script setup>
  import 'external-svg-loader'
  import { computed } from 'vue'

  const props = defineProps({
    icon: {
      type: [String],

      // Checks whether the provided value is already in the assets or not
      validator: (value) => {
        const iconFiles = import.meta.glob('@/assets/images/icons/*.svg', {
          eager: true
        })
        const iconFileNames = Object.keys(iconFiles)
          .map((name) => name.match(/[\w-]+\.svg$/)?.[0] || '')
          .filter(Boolean)
        const hasIcon = iconFileNames.includes(`${value}.svg`)

        if (!hasIcon) {
          console.error(`The ${value} icon cannot be found in the icon resources.`)
        }

        return hasIcon
      },
      required: true
    },
    width: { type: [String, Number], default: 24 },
    height: { type: [String, Number], default: 24 },

    // This prop will maintain the 1:1 aspect ratio of icons
    size: { type: [String, Number], default: 24 }
  })
  const cacheDurationInDays = 7
  const cacheDurationInSeconds = cacheDurationInDays * 60 * 60
  const iconFilePath = computed(
    () => new URL(`../../assets/images/icons/${props.icon}.svg`, import.meta.url).href
  )
</script>

<template>
  <svg
    v-if="icon"
    v-bind="$attrs"
    :data-src="iconFilePath"
    :width="size || width"
    :height="size || height"
    :data-cache="cacheDurationInSeconds"
    data-loading="lazy"
    class="inline-block"
  ></svg>
</template>
