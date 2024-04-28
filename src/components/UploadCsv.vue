<script setup>
    import { ref } from 'vue'

    import Button from 'primevue/button';
    import Papa from 'papaparse';
    // Parse the CSV data using PapaParse
    const isLoading = ref(false)
    const parsedData = ref(null);
    const csvUploadFn = (event) => {
        isLoading.value = true
        parsedData.value = null
        const file = event.target.files[0];
        Papa.parse(file, {
            complete: (results) => {
            isLoading.value = false
            parsedData.value = results.data;
            },
            header: true // If CSV has header row
        });
    }
</script>
<template>
    <div class="flex items-center file-upload-wrapper">
        <input type="file" id="fileInput" @change="csvUploadFn">
        <Button class="tbs-btn-primary">
            <label for="fileInput" label="">Upload CSV</label>
        </Button>
        <p class="mx-2" v-if="isLoading">Extracting... </p>
    </div>
        <!-- Display parsed data, Just removed it. -->
        <div v-if="parsedData">
        <ul>
            <li v-for="(row, index) in parsedData" :key="index">
            {{ row }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.file-upload-wrapper {
    input {
        display: none;
    }
}
</style>