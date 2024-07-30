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
      id="ico_-_outline_-_adjustments_-_vertical_-_default"
      data-name="ico - outline - adjustments - vertical - default"
      transform="translate(-73 -279)"
      clip-path="url(#clip-path)"
    >
      <path
        id="Icon"
        d="M3,10.5V.75M3,10.5a1.5,1.5,0,0,1,0,3m0-3a1.5,1.5,0,0,0,0,3m0,3.75V13.5m12-3V.75m0,9.75a1.5,1.5,0,0,1,0,3m0-3a1.5,1.5,0,0,0,0,3m0,3.75V13.5m-6-9V.75M9,4.5a1.5,1.5,0,0,1,0,3m0-3a1.5,1.5,0,0,0,0,3m0,9.75V7.5"
        transform="translate(76 282)"
        :fill="props_data.fill"
        :stroke="props_data.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </g>
  </svg>
</template>
