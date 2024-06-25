<template>
    <div class="layout-creator">
      <!-- Step 1: Input number of columns -->
      <div class="step">
        <label for="columns">Enter number of columns:</label>
        <input type="number" v-model.number="numColumns" id="columns" min="1" @input="handleColumnsChange" />
      </div>
  
      <!-- Step 2: Column configuration -->
      <div class="step" v-if="columns.length > 0">
        <h3>Configure Columns:</h3>
        <div v-for="(column, index) in columns" :key="index" class="column-config">
          <label :for="'column-' + (index + 1)">Column {{ index + 1 }}</label>
          <input type="text" v-model="column.name" :id="'column-' + (index + 1)" placeholder="Enter column name" />
          <div class="alignment-options">
            <label>
              <input type="radio" :name="'align-' + (index + 1)" value="center" v-model="column.alignment" />
              Center
            </label>
            <label>
              <input type="radio" :name="'align-' + (index + 1)" value="flex-start" v-model="column.alignment" />
              Left
            </label>
            <label>
              <input type="radio" :name="'align-' + (index + 1)" value="flex-end" v-model="column.alignment" />
              Right
            </label>
          </div>
        </div>
      </div>
  
      <!-- Step 3: Generated Layout -->
      <div class="step" v-if="columns.length > 0">
        <h3>Generated Layout:</h3>
        <div class="generated-layout">
          <div class="parent">
            <div
              v-for="(column, index) in columns"
              :key="index"
              :class="'child child-' + (index + 1)"
              :style="{ justifyContent: column.alignment }"
            >
              {{ column.name }}
            </div>
          </div>
        </div>
        <!-- Displaying Generated HTML -->
        <pre>{{ generatedHTML }}</pre>
        <!-- Displaying Generated CSS -->
        <pre>{{ generatedCSS }}</pre>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  const numColumns = ref(0);
  const columns = ref([]);
  
  // Function to handle change in number of columns
  const handleColumnsChange = () => {
    // Update columns array to match the number of columns specified
    columns.value = Array.from({ length: numColumns.value }, (_, i) => ({
      name: `Column ${i + 1}`,
      alignment: 'flex-start' // Default alignment is left (flex-start)
    }));
  };
  
  // Watch for changes in the number of columns to update column configurations
  watch(numColumns, (newVal) => {
    handleColumnsChange();
  });
  
  // Generate the HTML structure
  const generatedHTML = computed(() => {
    return `
  <div class="parent">
    ${columns.value
      .map((column, index) => `<div class="child child-${index + 1}">${column.name}</div>`)
      .join('\n  ')}
  </div>`;
  });
  
  // Generate the CSS based on column alignments
  const generatedCSS = computed(() => {
    const css = `
  .parent {
    display: flex;
    gap: 10px;
  }
  
  ${columns.value
    .map(
      (column, index) => `
  .child-${index + 1} {
    display: flex;
    justify-content: ${column.alignment};
    border: 1px solid #ccc;
    padding: 10px;
  }`
    )
    .join('\n')}
  `;
    return css.trim();
  });
  </script>
  
  <style scoped>
  .layout-creator {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .step {
    margin-bottom: 20px;
  }
  
  .column-config {
    margin-bottom: 10px;
  }
  
  .alignment-options {
    display: flex;
    gap: 10px;
  }
  
  .generated-layout {
    border: 1px solid #ccc;
    padding: 10px;
    margin-top: 10px;
  }
  
  .parent {
    display: flex;
    gap: 10px;
  }
  .parent > div {
    flex-grow: 1;
  }
  
  .child {
    border: 1px solid #ccc;
    padding: 10px;
    display: flex;
  }
  </style>
  