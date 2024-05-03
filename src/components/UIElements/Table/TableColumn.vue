<script setup>
    const props_data = defineProps({
        headers: {
            type: String,
            default: () => ""
        },
        fields: {
            type: String,
            default: () => ""
        }
    });
</script>
<template>
    {{ props_data.headers }}
    <slot name="body"></slot>
</template>