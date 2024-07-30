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
          transform="translate(115 220)"
          :fill="props_data.fill"
        />
      </clipPath>
    </defs>
    <g
      id="ico_-_outline_-_academic_cap_-_default"
      data-name="ico - outline - academic cap - default"
      transform="translate(-115 -220)"
      clip-path="url(#clip-path)"
    >
      <path
        id="Icon"
        d="M4.259,10.147a60.438,60.438,0,0,0-.491,6.347A48.619,48.619,0,0,1,12,20.9a48.62,48.62,0,0,1,8.232-4.41,60.461,60.461,0,0,0-.491-6.347m-15.481,0Q2.946,9.705,1.6,9.334A59.906,59.906,0,0,1,12,3.493,59.9,59.9,0,0,1,22.4,9.334q-1.344.371-2.658.813m-15.481,0A50.717,50.717,0,0,1,12,13.489a50.7,50.7,0,0,1,7.741-3.342M6.75,15A.75.75,0,1,0,6,14.25.75.75,0,0,0,6.75,15Zm0,0V11.325A55.378,55.378,0,0,1,12,8.443M4.993,19.993A5.981,5.981,0,0,0,6.75,15.75v-1.5"
        transform="translate(115 219.802)"
        :fill="props_data.fill"
        :stroke="props_data.stroke"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </g>
  </svg>
</template>
