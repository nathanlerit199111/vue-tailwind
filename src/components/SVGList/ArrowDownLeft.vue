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
      id="ico_-_outline_-_arrow_down_left-_default"
      data-name="ico - outline - arrow down left- default"
      transform="translate(-73 -279)"
      clip-path="url(#clip-path)"
    >
      <path
        id="Path_33067"
        data-name="Path 33067"
        d="M17.03.97a.75.75,0,0,1,0,1.061L3.311,15.75H12.75a.75.75,0,0,1,0,1.5H1.5a.75.75,0,0,1-.75-.75V5.25a.75.75,0,0,1,1.5,0v9.439L15.97.97A.75.75,0,0,1,17.03.97Z"
        transform="translate(76 282)"
        :fill="props_data.fill"
        fill-rule="evenodd"
      />
    </g>
  </svg>
</template>
