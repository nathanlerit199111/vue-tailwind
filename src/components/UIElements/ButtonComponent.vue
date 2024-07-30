<script setup>
  import { defineProps, defineAsyncComponent, computed } from 'vue'
  import { RouterLink } from 'vue-router'

  const SVGIcon = defineAsyncComponent(() => import('@/components/UIElements/SVGIcon.vue'))
  const ButtonLoader = defineAsyncComponent(() => import('@/components/Widgets/Loaders/ButtonLoader.vue'))

  const props_data = defineProps({
    additional_class: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    },
    link_type: {
        type: String,
        default: 'function'
    },
    btn_type: {
        type: String,
        default: 'primary'
    },
    size: {
      type: String,
      default: 'small'
    },
    variant: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    left_icon: {
        type: String,
        default: ''
    },
    right_icon: {
        type: String,
        default: ''
    },
    icon_fill_color: {
        type: String,
        default: 'transparent'
    },
    icon_stroke_color: {
        type: String,
        default: '#000'
    },
    icon_fill_color_hover: {
        type: String,
        default: ''
    },
    icon_stroke_color_hover: {
        type: String,
        default: ''
    },
    is_loader: {
        type: Boolean,
        default: false
    },
    loader_icon_fill_color: {
        type: String,
        default: ''
    },
    loader_icon_stroke_color: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
  })
</script>

<template>
  <button
    type="submit"
    :class="['btn-wrapper', 'relative', `tbs-btn-${props_data.btn_type}`, `btn-${props_data.size}`, props_data.additional_class, props_data.variant, { 'disabled': props_data.disabled }]"
    :disabled="props_data.disabled"
  >
    <slot/>
    <component
      :is="props_data.link_type === 'external' ? 'a' : props_data.link_type === 'internal' ? RouterLink : 'span'"
      :href="props_data.link_type === 'external' ? props_data.link : null"
      :to="props_data.link_type === 'internal' ? props_data.link : null"
      class="btn-content flex items-center gap-2"
    >
      <SVGIcon
        v-if="props_data.left_icon"
        :icon="props_data.left_icon"
        :fill="props_data.icon_fill_color"
        :stroke="props_data.icon_stroke_color"
      />
      
      {{ props_data.label }}
      
      <SVGIcon
        v-if="props_data.right_icon"
        :icon="props_data.right_icon"
        :fill="props_data.icon_fill_color"
        :stroke="props_data.icon_stroke_color"
      />
      <ButtonLoader v-if="props_data.is_loader" />
    </component>
  </button>
</template>


<style scoped lang="scss">
//==== BASE ====//
.btn-wrapper {
  width: auto;
  padding: 0;
  &:active {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
  }
}

//==== SIZES ====//
.btn-small > *:first-child{
  padding: var(--tbs-space-xs) var(--tbs-space-md);
}
.btn-medium > *:first-child {
  padding: var(--tbs-space-sm) var(--tbs-space-md);
}
.btn-large > *:first-child {
  padding: 10px var(--tbs-space-lg);
}

//==== PRIMARY ====//
.tbs-btn-primary {
  background: var(--tbs-btnPrimary-primary-color-400);
  color: var(--tbs-btnPrimary-secondary-color);
  border-radius: var(--tbs-border-radius-xs);
  // padding: var(--tbs-space-xs) var(--tbs-space-sm);

  //icon default state
  * {
    stroke: var(--tbs-btnPrimary-secondary-color);
  }

  //hover
  &:hover {
    background: var(--tbs-btnPrimary-primary-color-500);
  }

  //disabled
  &.disabled {
    background: var(--tbs-btnPrimary-primary-color-200);
  }



  //OUTLINED//
  &.outlined {
    background: var(--tbs-btnPrimary-secondary-color);
    border: solid 1px var(--tbs-btnPrimary-primary-color-400);
    color: var(--tbs-btnPrimary-primary-color-400);
    border-radius: var(--tbs-border-radius-xs);
    // padding: var(--tbs-space-xs) var(--tbs-space-sm);

    //icon default state
    * {
      stroke: var(--tbs-btnPrimary-primary-color-400);
    }

    //hover
    &:hover {
      background: var(--tbs-btnPrimary-primary-color-100);
    }

    //pressed
    &:active {
      background: var(--tbs-btnPrimary-primary-color-500);
      color: var(--tbs-btnPrimary-secondary-color);
      * {
        stroke: var(--tbs-btnPrimary-secondary-color);
      }
    }

    //disabled
    &.disabled {
      background: var(--tbs-btnPrimary-secondary-color);
      color: var(--tbs-btnPrimary-primary-color-100);
      border: solid 1px var(--tbs-btnPrimary-primary-color-100);
      * {
        stroke: var(--tbs-btnPrimary-primary-color-100);
      }
    }
  }



  //TEXT//
  &.text {
    background: transparent;
    color: var(--tbs-btnPrimary-primary-color-400);

    //icon default state
    * {
      stroke: var(--tbs-btnPrimary-primary-color-400);
    }

    //hover
    &:hover span {
      border-bottom: solid 2px var(--tbs-btnPrimary-primary-color-400);
    }

    //pressed
    &:active {
      background: var(--tbs-btnPrimary-primary-color-100);
      color: var(--tbs-btnPrimary-primary-color-500);
      box-shadow: none;
      * {
        stroke: var(--tbs-btnPrimary-primary-color-500);
      }
    }

    //disabled
    &.disabled {
      color: var(--tbs-btnPrimary-primary-color-100);
      &:hover span {
        border-bottom: none;
      }
      * {
        stroke: var(--tbs-btnPrimary-primary-color-100);
      }
    }
  }
}


//==== SECONDARY ====//
.tbs-btn-secondary {
  background: var(--tbs-btnSecondary-primary-color-400);
  color: var(--tbs-btnSecondary-secondary-color);
  border-radius: var(--tbs-border-radius-xs);
  // padding: var(--tbs-space-xs) var(--tbs-space-sm);

  //icon default state
  * {
    stroke: var(--tbs-btnSecondary-secondary-color);
  }

  //hover
  &:hover {
    background: var(--tbs-btnSecondary-primary-color-500);
  }

  //disabled
  &.disabled {
    background: var(--tbs-btnSecondary-primary-color-200);
  }



  //OUTLINED//
  &.outlined {
    background: var(--tbs-btnSecondary-secondary-color);
    border: solid 1px var(--tbs-btnSecondary-primary-color-400);
    color: var(--tbs-btnSecondary-primary-color-400);
    border-radius: var(--tbs-border-radius-xs);
    // padding: var(--tbs-space-xs) var(--tbs-space-sm);

    //icon default state
    * {
      stroke: var(--tbs-btnSecondary-primary-color-400);
    }

    //hover
    &:hover {
      background: var(--tbs-btnSecondary-primary-color-100);
    }

    //pressed
    &:active {
      background: var(--tbs-btnSecondary-primary-color-500);
      color: var(--tbs-btnSecondary-secondary-color);
      * {
        stroke: var(--tbs-btnSecondary-secondary-color);
      }
    }

    //disabled
    &.disabled {
      background: var(--tbs-btnSecondary-secondary-color);
      color: var(--tbs-btnSecondary-primary-color-100);
      border: solid 1px var(--tbs-btnSecondary-primary-color-100);
      * {
        stroke: var(--tbs-btnSecondary-primary-color-100);
      }
    }
  }



  //TEXT//
  &.text {
    background: transparent;
    color: var(--tbs-btnSecondary-primary-color-400);

    //icon default state
    * {
      stroke: var(--tbs-btnSecondary-primary-color-400);
    }

    //hover
    &:hover span {
      border-bottom: solid 2px var(--tbs-btnSecondary-primary-color-400);
    }

    //pressed
    &:active {
      background: var(--tbs-btnSecondary-primary-color-100);
      color: var(--tbs-btnSecondary-primary-color-500);
      box-shadow: none;
      * {
        stroke: var(--tbs-btnSecondary-primary-color-500);
      }
    }

    //disabled
    &.disabled {
      color: var(--tbs-btnSecondary-primary-color-100);
      &:hover span {
        border-bottom: none;
      }
      * {
        stroke: var(--tbs-btnSecondary-primary-color-100);
      }
    }
  }
}
//Copy the primary button css and change the values to create succeeding variations of buttons
</style>