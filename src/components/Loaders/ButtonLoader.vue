<script setup>
  const props_data = defineProps({
    stroke: {
      type: String,
      default: () => '#fff'
    },
    fill: {
      type: String,
      default: () => 'none'
    },
    width: {
      type: String,
      default: () => '13.5'
    },
    height: {
      type: String,
      default: () => '13.5'
    }
  })
</script>

<template>
  <div class="flex items-center">
    <svg
      class="btn-loader"
      :width="props_data.width"
      :height="props_data.height"
      viewBox="0 0 13.5 13.5"
    >
      <g
        id="ico_-_loading_-_default"
        data-name="ico - loading - default"
        transform="translate(-0.25 -0.25)"
      >
        <path
          id="Path_33057"
          data-name="Path 33057"
          d="M11,1V2.8"
          transform="translate(-4)"
          :fill="props_data.fill"
          :stroke="props_data.stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_33058"
          data-name="Path 33058"
          d="M11,18v1.8"
          transform="translate(-4 -6.8)"
          :fill="props_data.fill"
          :stroke="props_data.stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_33059"
          data-name="Path 33059"
          d="M19.8,11H18"
          transform="translate(-6.8 -4)"
          :fill="props_data.fill"
          :stroke="props_data.stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_33060"
          data-name="Path 33060"
          d="M2.8,11H1"
          transform="translate(0 -4)"
          :fill="props_data.fill"
          :stroke="props_data.stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_33061"
          data-name="Path 33061"
          d="M17.222,3.929,15.95,5.2"
          transform="translate(-5.98 -1.172)"
          :fill="props_data.fill"
          :stroke="props_data.stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_33062"
          data-name="Path 33062"
          d="M5.2,15.95,3.929,17.223"
          transform="translate(-1.171 -5.98)"
          :fill="props_data.fill"
          :stroke="props_data.stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_33063"
          data-name="Path 33063"
          d="M3.929,3.929,5.2,5.2"
          transform="translate(-1.172 -1.172)"
          :fill="props_data.fill"
          :stroke="props_data.stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_33064"
          data-name="Path 33064"
          d="M15.95,15.95l1.273,1.273"
          transform="translate(-5.98 -5.98)"
          :fill="props_data.fill"
          :stroke="props_data.stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
  .btn-loader {
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
