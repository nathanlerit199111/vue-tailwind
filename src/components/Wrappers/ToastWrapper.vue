<script setup>
import { useToastStore } from '@/stores/toast'

const toast = useToastStore()

const props_data = defineProps({
  additional_class: {
    type: String,
    default: () => ''
  },
  id_name: {
    type: String,
    default: () => ''
  },
  title: {
    type: String,
    default: () => 'Toast Head'
  },
  message: {
    type: String,
    default: () => 'Toast Body'
  },
  position: {
    type: String,
    default: () => 'top-right'
  }
})
</script>

<template>
  <aside
    v-if="toast.is_visible"
    :id="props_data.id_name || null"
    :class="
      `toast-wrapper py-3 px-6
      ${toast.status}
      ${props_data.additional_class} 
      ${props_data.position} 
      ${toast.fade_top ? 'fade-top' : ''}
      `
    "
  >
    <div class="toast-header flex">
      <!-- <i :class="`mr-2 pi ${toast.status === 'error' ? 'pi-times' : toast.status === 'success' ? 'pi-check' : 'pi-exclamation-circle'}`"></i> -->
      <h4 class="capitalize">{{ toast.status }} Message</h4>
      <slot name="header"></slot>
    </div>

    <div class="toast-body mt-3">
      <p>{{ toast.message }}</p>
      <slot name="body"></slot>
    </div>
  </aside>
</template>


<style lang="scss">
.toast-wrapper {
    position: absolute;
    z-index: 5;
    border-radius: var(--tbs-border-radius-xs);
    &.top-left {
        top: 20px;
        left: 20px;
        //Exit animation
        &.fade-top {
            animation: fadeTop 0.5s ease-in-out;
        }
    }
    &.top-center {
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        //Exit animation
        &.fade-top {
            animation: fadeTopCenter 0.5s ease-in-out;
        }
    }
    &.top-right {
        top: 20px;
        right: 20px;
        //Exit animation
        &.fade-top {
            animation: fadeTop 0.5s ease-in-out;
        }
    }

    &.bottom-left {
        bottom: 20px;
        left: 20px;
        //Exit animation
        &.fade-top {
            animation: fadeTop 0.5s ease-in-out;
        }
    }
    &.bottom-center {
        bottom: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        //Exit animation
        &.fade-top {
            animation: fadeTopCenter 0.5s ease-in-out;
        }
    }
    &.bottom-right {
        bottom: 20px;
        right: 20px;
        //Exit animation
        &.fade-top {
            animation: fadeTop 0.5s ease-in-out;
        }
    }

    &.success {
        background: #00ab41;
        color: #fff;
    }
    &.warning {
        background: orange;
        color: #fff;
    }
    &.error {
        background: rgb(255, 118, 118);
        color: #fff;
    }
}
</style>