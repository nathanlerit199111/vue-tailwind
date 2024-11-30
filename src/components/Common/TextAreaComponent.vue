<script setup>
    const model = defineModel()
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
</script>

<template>
    <div class="relative h-max">
        <textarea
            v-model="model"
            @input="handleInput"
            :id="props_data.id_name ? props_data.id_name : null"
            :class="`py-2 px-4 ${props_data.additional_class}`"
        />
    </div>
</template>
