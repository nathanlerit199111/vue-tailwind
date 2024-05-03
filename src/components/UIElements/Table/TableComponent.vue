<script setup>
  import { ref, computed, watch, defineAsyncComponent } from 'vue'
  //VUE PRIME
  import Checkbox from 'primevue/checkbox' //Import without lazy loading because this component is above the fold
  const Paginator = defineAsyncComponent(() => import('primevue/paginator')) //Import via lazy loading because this component is below the fold

  const props_data = defineProps({
    table_data: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    },
    headers: {
      type: Array,
      default: () => []
    },
    show_checkbox: {
      type: Boolean,
      default: () => false
    }
  });


const checkedAll = ref(false);
const selectedData = ref([]);

const allChecked = computed({
  get: () => checkedAll.value,
  set: (value) => {
    checkedAll.value = value;
    if (value) {
      selectedData.value = [...props_data.table_data];
    } else {
      selectedData.value = [];
    }
  }
});

const toggleItem = (item) => {
  const index = selectedData.value.indexOf(item);
  if (index === -1) {
    selectedData.value.push(item);
  } else {
    selectedData.value.splice(index, 1);
  }
}

function toggleAll() {
  checkedAll.value = !checkedAll.value;
}

// Watch for changes in checkedAll and update selectedData accordingly
watch(checkedAll, (newValue) => {
  if (newValue) {
    selectedData.value = [...props_data.table_data];
  } else {
    selectedData.value = [];
  }
});
</script>
<template>
  <table class="w-full">
    <thead>
      <tr>
        <th class="p-5" v-if="show_checkbox">
          <Checkbox :model-value="allChecked" @update:model-value="toggleAll" :binary="true" />
        </th>
        <template v-for="(header, headerIndex) in props_data.headers" :key="headerIndex">
          <th class="p-5">
            <!-- Check if there's a named slot available for the current header cell -->
            <template v-if="$slots['head.' + headerIndex]">
              <slot :name="'head.' + headerIndex" :header="header"></slot>
            </template>
            <!-- If no specific slot content is provided, display the header value -->
            <template v-else>
              {{ header }}
            </template>
          </th>
        </template>
        <!-- Render dynamic slots for each item -->
        <th class="p-5">
          <template v-for="slotName in Object.keys($slots).filter(name => name.startsWith('head.'))" :key="slotName">
            <slot :name="slotName" :item="{}"></slot>
          </template>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, itemIndex) in props_data.table_data" :key="itemIndex">
        <td class="p-5" v-if="show_checkbox">
          <Checkbox 
            :model-value="selectedData.includes(item)" 
            @update:model-value="toggleItem(item)" 
            :binary="true" 
          />
        </td>
        <template v-for="(field, fieldIndex) in props_data.fields" :key="fieldIndex">
          <td class="p-5" v-if="props_data.table_data && props_data.table_data.length > 0">
            <!-- Check if there's a named slot available for the current field -->
            <template v-if="$slots['item.' + field]">
              <slot :name="'item.' + field" :item="item"></slot>
            </template>
            <!-- If no specific slot content is provided, display the field value -->
            <template v-else>
              {{ item[field] }}
            </template>
          </td>
        </template>
        <td class="p-5">
          <template v-for="slotName in Object.keys($slots).filter(name => name.startsWith('item.'))" :key="slotName">
            <slot :name="slotName" :item="{}"></slot>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
  <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
</template>
