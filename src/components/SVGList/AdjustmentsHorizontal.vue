<script setup>
  const props_data = defineProps({
    stroke: {
      type: String
    },
    fill: {
      type: String
    },
    width: {
      type: String,
      default: () => '25'
    },
    height: {
      type: String,
      default: () => '25'
    }
  })
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="props_data.width"
    :height="props_data.height"
    viewBox="0 0 24 24"
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Container"
          :width="props_data.width"
          :height="props_data.height"
          transform="translate(73 279)"
          :fill="props_data.fill"
        />
      </clipPath>
    </defs>
    <g
      id="ico_-_outline_-_adjustments_-_horizontal_-_default"
      data-name="ico - outline - adjustments - horizontal - default"
      transform="translate(-73 -279)"
      clip-path="url(#clip-path)"
    >
      <path
        id="Icon"
        d="M10.5,6h9.75M10.5,6a1.5,1.5,0,0,1-3,0m3,0a1.5,1.5,0,0,0-3,0M3.75,6H7.5m3,12h9.75M10.5,18a1.5,1.5,0,0,1-3,0m3,0a1.5,1.5,0,0,0-3,0M3.75,18H7.5m9-6h3.75M16.5,12a1.5,1.5,0,0,1-3,0m3,0a1.5,1.5,0,0,0-3,0M3.75,12H13.5"
        transform="translate(73.25 278.5)"
        :fill="props_data.fill"
        :stroke="props_data.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </g>
  </svg>
</template>
