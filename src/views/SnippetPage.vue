<template>
  <div class="layout-creator">
    <!-- Step 1: Input number of columns -->
    <div class="step">
      <label for="columns">Enter number of columns:</label>
      <input type="number" v-model.number="numColumns" id="columns" min="1" @input="handleColumnsChange" />
    </div>


    <div class="flex gap-5">
      <!-- Step 2: Column configuration -->
      <div class="step" v-if="columns.length > 0">
        
        <h3>Configure Columns:</h3>
        <div v-for="(column, index) in columns" :key="index" class="column-config bg-gray-500 pt-5">
          <label :for="'column-' + (index + 1)">Column {{ index + 1 }}</label>
          <input type="text" v-model="column.name" :id="'column-' + (index + 1)" placeholder="Enter column name" />
          <div class="alignment-options">
            <label>
              <input type="radio" :name="'align-' + (index + 1)" value="flex-start" v-model="column.alignment" />
              Left
            </label>
            <label>
              <input type="radio" :name="'align-' + (index + 1)" value="center" v-model="column.alignment" />
              Center
            </label>
            <label>
              <input type="radio" :name="'align-' + (index + 1)" value="flex-end" v-model="column.alignment" />
              Right
            </label>
          </div>



          <!-- Group configuration -->
          <div class="p-5 bg-gray-400">

            <div class="flex mb-8">
              <div>
                <label :for="'groups-' + (index + 1)">Enter Number of Columns inside the Column {{ index + 1 }}:</label><br/>
                <small>(This will create a nested column, no elements yet, just a divider / wrapper)</small>
              </div>
              <input
                type="number"
                v-model.number="column.numGroups"
                :id="'groups-' + (index + 1)"
                min="0"
                @input="handleGroupsChange(index)"
              />
            </div>



            <div class="ml-10" v-if="column.groups.length > 0">
              <h4>Configure Nested Column inside Column {{ index + 1 }}:</h4>
              <div v-for="(group, groupIndex) in column.groups" :key="groupIndex" class="group-config">
                <label :for="'group-' + (index + 1) + '-' + (groupIndex + 1)">
                  Nested Column {{ groupIndex + 1 }}
                </label>
                <div class="alignment-options">
                  <label>
                    <input
                      type="radio"
                      :name="'group-align-' + (index + 1) + '-' + (groupIndex + 1)"
                      value="flex-start"
                      v-model="group.alignment"
                    />
                    Left
                  </label>
                  <label>
                    <input
                      type="radio"
                      :name="'group-align-' + (index + 1) + '-' + (groupIndex + 1)"
                      value="center"
                      v-model="group.alignment"
                    />
                    Center
                  </label>
                  <label>
                    <input
                      type="radio"
                      :name="'group-align-' + (index + 1) + '-' + (groupIndex + 1)"
                      value="flex-end"
                      v-model="group.alignment"
                    />
                    Right
                  </label>
                </div>

                <!-- Nested elements within groups -->
                <label :for="'nested-elements-' + (index + 1) + '-' + (groupIndex + 1)">
                  Enter number of nested elements in Group {{ groupIndex + 1 }}:
                </label>
                <input
                  type="number"
                  v-model.number="group.numNestedElements"
                  :id="'nested-elements-' + (index + 1) + '-' + (groupIndex + 1)"
                  min="0"
                  @input="handleNestedElementsChange(index, groupIndex)"
                />

                <div v-if="group.nestedElements.length > 0">
                  <h5>Configure Nested Elements in Group {{ groupIndex + 1 }}:</h5>
                  <div v-for="(nestedElement, nestedIndex) in group.nestedElements" :key="nestedIndex" class="nested-element-config">
                    <label :for="'nested-element-' + (index + 1) + '-' + (groupIndex + 1) + '-' + (nestedIndex + 1)">
                      Nested Element {{ nestedIndex + 1 }}
                    </label>
                    <input
                      type="text"
                      v-model="nestedElement.name"
                      :id="'nested-element-' + (index + 1) + '-' + (groupIndex + 1) + '-' + (nestedIndex + 1)"
                      placeholder="Enter nested element name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3: Generated Layout -->
      <div class="step grow" v-if="columns.length > 0">
        <h3>Generated Layout:</h3>
        <div class="generated-layout">
          <div class="parent">
            <div
              v-for="(column, index) in columns"
              :key="index"
              :class="'child child-' + (index + 1)"
              :style="{ justifyContent: column.alignment }"
            >
              <p>{{ column.name }}</p>
              <!-- Groups within each column -->
              <div
                v-for="(group, groupIndex) in column.groups"
                :key="groupIndex"
                :class="'group group-' + (index + 1) + '-' + (groupIndex + 1)"
                :style="{ justifyContent: group.alignment }"
              >
                <!-- Nested elements within each group -->
                <div
                  v-for="(nestedElement, nestedIndex) in group.nestedElements"
                  :key="nestedIndex"
                  :class="'nested-child nested-child-' + (index + 1) + '-' + (groupIndex + 1) + '-' + (nestedIndex + 1)"
                >
                  {{ nestedElement.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





    <div v-if="columns.length > 0">
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
    alignment: 'flex-start', // Default alignment is left (flex-start)
    numGroups: 0, // Default number of groups
    groups: [] // Initialize groups array
  }));
};

// Function to handle change in number of groups for a specific column
const handleGroupsChange = (columnIndex) => {
  const column = columns.value[columnIndex];
  column.groups = Array.from({ length: column.numGroups }, (_, i) => ({
    alignment: 'flex-start', // Default alignment is left (flex-start)
    numNestedElements: 0, // Default number of nested elements
    nestedElements: [] // Initialize nested elements array
  }));
};

// Function to handle change in number of nested elements for a specific group
const handleNestedElementsChange = (columnIndex, groupIndex) => {
  const group = columns.value[columnIndex].groups[groupIndex];
  group.nestedElements = Array.from({ length: group.numNestedElements }, (_, i) => ({
    name: `Nested Element ${i + 1}`
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
    .map(
      (column, index) => `
    <div class="child child-${index + 1}">
      <p>${column.name}</p>
      ${column.groups
        .map(
          (group, groupIndex) => `
      <div class="group group-${index + 1}-${groupIndex + 1}">
        ${group.nestedElements
          .map(
            (nestedElement, nestedIndex) => `
        <div class="nested-child nested-child-${index + 1}-${groupIndex + 1}-${nestedIndex + 1}">
          ${nestedElement.name}
        </div>`
          )
          .join('')}
      </div>`
        )
        .join('')}
    </div>`
    )
    .join('\n  ')}
</div>`;
});

// Generate the CSS based on column and nested element alignments
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
  flex-grow: 1;
  flex-direction: column;
}

${column.groups
  .map(
    (group, groupIndex) => `
.group-${index + 1}-${groupIndex + 1} {
  display: flex;
  justify-content: ${group.alignment};
  border: 1px solid #bbb;
  padding: 10px;
  margin-top: 10px;
  flex-direction: column;
}

${group.nestedElements
  .map(
    (nestedElement, nestedIndex) => `
.nested-child-${index + 1}-${groupIndex + 1}-${nestedIndex + 1} {
  display: flex;
  border: 1px solid #aaa;
  padding: 5px;
  margin-top: 5px;
}`
  )
  .join('')}`
  )
  .join('')}`
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
input {
  padding: 5px;
  border: solid 1px #ccc;
  outline: none !important;
  margin-left: 15px;
}
.column-config {
  margin-bottom: 10px;
}

.alignment-options {
  display: flex;
  gap: 10px;
}
.alignment-options > label {
  display: flex;
  align-items: center;
}
.alignment-options > label input {
  margin-right: 5px;
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
  flex-direction: column;
}

.group {
  border: 1px solid #bbb;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.nested-child {
  border: 1px solid #aaa;
  padding: 5px;
  margin-top: 5px;
  display: flex;
}
</style>
