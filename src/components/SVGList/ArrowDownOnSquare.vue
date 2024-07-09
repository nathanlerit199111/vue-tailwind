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
      id="ico_-_outline_-_arrow_down_on_square-_default"
      data-name="ico - outline - arrow down on square- default"
      transform="translate(-73 -279)"
      clip-path="url(#clip-path)"
    >
      <path
        id="Icon"
        d="M5,7.25H3.5A2.25,2.25,0,0,0,1.25,9.5v9A2.25,2.25,0,0,0,3.5,20.75h9a2.25,2.25,0,0,0,2.25-2.25v-9A2.25,2.25,0,0,0,12.5,7.25H11M5,11l3,3m0,0,3-3M8,14V1.25"
        transform="translate(77 280)"
        :fill="props_data.fill"
        :stroke="props_data.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </g>
  </svg>
</template>
