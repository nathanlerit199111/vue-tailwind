<script setup>
  import { ref } from 'vue'
  import { Field, ErrorMessage } from 'vee-validate'

  const model = defineModel()

  const props = defineProps({
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
      :name="props.name"
      :type="isPasswordVisible ? 'text' : props.type"
      :rules="props.rules"
      :class="`py-2 px-4 ${props.additional_class} 
        ${props.type === 'password' ? 'password pr-10' : ''}
        ${props.type === 'search' ? 'search pr-10' : ''}
        `"
    />
    <i
      v-if="props.type === 'password'"
      :class="isPasswordVisible ? 'pi pi-eye' : 'pi pi-eye-slash'"
      @click="isPasswordVisible = !isPasswordVisible"
    />
    <i
      v-if="props.type === 'search'"
      class="pi pi-search"
    />
  </div>
  <ErrorMessage :name="props.name" />
</template>
