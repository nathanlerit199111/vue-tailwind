<script setup>
import { ref, onMounted } from "vue";

//VUE PRIME
import Dropdown from 'primevue/dropdown';

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

const selectedCountry = ref({
    name: 'Philippines'
});
const country = ref([]);

onMounted(async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        country.value = data.map(country => ({ name: country.name.common }));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <Dropdown 
        v-model="selectedCountry" 
        :options="country" 
        option-label="name" 
        placeholder="Select a Country" 
        :class="`py-2 px-4 ${props_data.additional_class}`" 
    />
</template>
