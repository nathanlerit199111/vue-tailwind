<script setup>
  import { ref, defineEmits, watch } from 'vue'
  import { Field, ErrorMessage } from 'vee-validate';

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
    modelValue: {
      type: [String, Number],
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

  const emit = defineEmits(['update:modelValue'])
  let internalValue = ref(props_data.modelValue)

  const handleChange = (event) => {
    const newValue = props_data.inputChange(event.target.value) // Apply inputChange
    internalValue.value = newValue // Update internalValue with validated value
    emit('update:modelValue', internalValue.value) // Emit update to parent component
  }

  // Watch for changes in props.modelValue and update internalValue accordingly
  watch(() => props_data.modelValue, (newValue) => {
    internalValue.value = newValue
  })

  let isPasswordVisible = ref(false)
</script>

<template>
  <div class="relative h-max">
    <Field
      v-bind="$attrs"
      v-model="internalValue"
      :name="props_data.name" 
      :type="isPasswordVisible ? 'text' : props_data.type"
      :rules="props_data.rules"
      @input="handleChange"
      :class="
        `py-2 px-4 ${props_data.additional_class} 
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
