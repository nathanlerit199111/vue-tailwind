<script setup>
    import { ref, defineProps, defineEmits } from 'vue'
    //VUE PRIME 
    import InputText from 'primevue/inputtext'

    const props_data = defineProps({
        additional_class: {
            type: String,
            default: ''
        },
        id_name: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        modelValue: {
            type: String,
            default: ''
        }
    })

    const emit = defineEmits(['update:modelValue', 'input'])
    let val = ref(props_data.modelValue || '')
    const handleInput = (event) => {
        const value = event.target.value; // Extract value from InputEvent object
        val.value = value
        emit('update:modelValue', value)
        emit('input', value) // Emit a custom input event with the value
    }

    let isPasswordVisible = ref(false)
</script>

<template>
    <div class="relative">
        <InputText
            v-model="val"
            @input="handleInput"
            :type="isPasswordVisible ? 'text' : props_data.type" 
            :id="props_data.id_name ? props_data.id_name : null"
            :class="
                `py-2 px-4 ${props_data.additional_class} 
                ${props_data.type === 'password' ? 'password pr-10' : ''}`
            "
        />
        <i
            v-if="props_data.type === 'password'" 
            :class="isPasswordVisible ? 'pi pi-eye' : 'pi pi-eye-slash'"
            @click="isPasswordVisible = !isPasswordVisible"
        />
    </div>
</template>
