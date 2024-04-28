<script setup>
    import { ref } from 'vue'

    import Papa from 'papaparse';
    // Parse the CSV data using PapaParse
    const parsedData = ref(null);
    const csvUploadFn = (event) => {
        parsedData.value = null
        const file = event.target.files[0];
        Papa.parse(file, {
            complete: (results) => {
            parsedData.value = results.data;
            },
            header: true // If CSV has header row
        });
    }
</script>
<template>
    <input type="file" @change="csvUploadFn">
        <!-- Display parsed data, Just removed it. -->
        <div v-if="parsedData">
        <ul>
            <li v-for="(row, index) in parsedData" :key="index">
            {{ row }}
            </li>
        </ul>
    </div>
</template>