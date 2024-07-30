<script setup>
    import { ref } from 'vue'
    import {
        ButtonComponent
    } from '@/components/index.js'
    
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
        <!-- doesnt matter if it uses InputComponent since this is input tag is hidden  -->
        <input type="file" id="fileInput" @change="csvUploadFn">
        <ButtonComponent btn_type="primary">
            <label class="flex items-center p-0" for="fileInput">
                <span v-if="!isLoading" class="mx-gap-d">
                    <i class="pi pi-upload mr-2" style="font-size: 14px"></i>
                    Upload CSV
                </span>
                <span v-if="isLoading">Extracting...</span>
            </label>
        </ButtonComponent>
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
    label {
        cursor: pointer;
    }
}
</style>