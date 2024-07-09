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
      id="ico_-_outline_-_arrow_down_on_square_stack-_default"
      data-name="ico - outline - arrow down on square stack- default"
      transform="translate(-73 -279)"
      clip-path="url(#clip-path)"
    >
      <path
        id="Icon"
        d="M4.5,7.5H3.75A2.25,2.25,0,0,0,1.5,9.75v7.5A2.25,2.25,0,0,0,3.75,19.5h7.5a2.25,2.25,0,0,0,2.25-2.25V9.75A2.25,2.25,0,0,0,11.25,7.5H10.5m-6,3.75,3,3m0,0,3-3m-3,3V1.5m6,9h.75a2.25,2.25,0,0,1,2.25,2.25v7.5a2.25,2.25,0,0,1-2.25,2.25H6.75A2.25,2.25,0,0,1,4.5,20.25V19.5"
        transform="translate(76.5 279.5)"
        :fill="props_data.fill"
        :stroke="props_data.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </g>
  </svg>
</template>
