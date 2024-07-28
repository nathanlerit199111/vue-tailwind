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
      id="ico_-_outline_-_archive_-_box_-_arrow_down_-_default"
      data-name="ico - outline - archive - box  -  arrow down - default"
      transform="translate(-73 -279)"
      clip-path="url(#clip-path)"
    >
      <path
        id="Icon"
        d="M19.25,4.5l-.625,10.632a2.25,2.25,0,0,1-2.246,2.118H5.622a2.25,2.25,0,0,1-2.246-2.118L2.75,4.5M11,7.5v6.75m0,0-3-3m3,3,3-3M2.375,4.5h17.25A1.125,1.125,0,0,0,20.75,3.375v-1.5A1.125,1.125,0,0,0,19.625.75H2.375A1.125,1.125,0,0,0,1.25,1.875v1.5A1.125,1.125,0,0,0,2.375,4.5Z"
        transform="translate(74 282)"
        :fill="props_data.fill"
        :stroke="props_data.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </g>
  </svg>
</template>
