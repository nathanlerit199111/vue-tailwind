<script setup>
    //VUE PRIME 
    import InputText from 'primevue/inputtext'

    const props_data = defineProps({
        additional_class: {
            type: String,
            default: () => ""
        },
        id_name: {
            type: String,
            default: () => ""
        },
        type: {
            type: String,
            default: () => ""
        },
    })
</script>

<template>
    <InputText
        :type="props_data.type" 
        :id="props_data.id_name ? props_data.id_name : null"
        :class="`py-2 px-4 ${props_data.additional_class} ${props_data.type === 'password' ? 'password' : ''}`"
    />
</template>