<script setup>
  import { ref, defineEmits } from 'vue'
  import { Field, ErrorMessage } from 'vee-validate'

  const model = defineModel()
  const emit = defineEmits(['input'])

  const props_data = defineProps({
    additional_class: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    rules: {
      type: Function,
      default: (value) => value
    },
    inputChange: {
      type: Function,
      default: (value) => value
    }
  })
  let isPasswordVisible = ref(false)
</script>

<template>
  <div class="relative h-max">
    <Field
      v-bind="$attrs"
      v-model="model"
      :name="props_data.name"
      :type="isPasswordVisible ? 'text' : props_data.type"
      :rules="props_data.rules"
      @input="$emit('input', $event)"
      :class="`py-2 px-4 ${props_data.additional_class} 
        ${props_data.type === 'password' ? 'password pr-10' : ''}
        ${props_data.type === 'search' ? 'search pr-10' : ''}
        `"
    />
    <i
      v-if="props_data.type === 'password'"
      :class="isPasswordVisible ? 'pi pi-eye' : 'pi pi-eye-slash'"
      @click="isPasswordVisible = !isPasswordVisible"
    />
    <i
      v-if="props_data.type === 'search'"
      class="pi pi-search"
    />
  </div>
  <ErrorMessage :name="props_data.name" />
</template>
