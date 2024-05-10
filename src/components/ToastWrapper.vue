<script setup>
import { useToastStore } from '@/stores/toast'
import { defineProps, ref, watch } from 'vue'

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
      `toast-wrapper p-2 
      ${toast.status}
      ${props_data.additional_class} 
      ${props_data.position} 
      ${toast.fade_top ? 'fade-top' : ''}
      `
    "
  >
    <div class="toast-header">
      <h4> xxx{{ toast }}</h4>
      <slot name="header"></slot>
    </div>
    <div class="toast-body">
      <p>{{ toast.message }}</p>
      <slot name="body"></slot>
    </div>
  </aside>
</template>
