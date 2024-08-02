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


const displayHeaders = computed(() => {
  if (props_data.headers.length > 0) {
    return props_data.headers;
  } else if (props_data.table_data.length > 0) {

    return Object.keys(props_data.table_data[0]);
  } else {
    return [];
  }
});


const displayFields = computed(() => {
  if (props_data.fields.length > 0) {
    return props_data.fields;
  } else if (props_data.table_data.length > 0) {

    return Object.keys(props_data.table_data[0]);
  } else {
    return [];
  }
});

const first = ref(0);
//Functions / data that will be pass to parent
defineExpose({
  first
})
</script>
<template>
  <div class="table-wrapper" v-if="props_data.table_data.length > 0">
    <table class="w-full">
      <thead>
        <tr>
          <th class="p-5" v-if="show_checkbox">
            <Checkbox :model-value="allChecked" @update:model-value="toggleAll" :binary="true" />
          </th>
          <template v-for="(header, headerIndex) in displayHeaders" :key="headerIndex">
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
          <template v-for="slotName in Object.keys($slots).filter(name => name.startsWith('head.'))" :key="slotName">
            <th class="p-5">
              <slot :name="slotName"></slot>
            </th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, itemIndex) in props_data.table_data" :key="itemIndex">
          <td class="py-3 px-5" v-if="show_checkbox">
            <Checkbox 
              :model-value="selectedData.includes(item)" 
              @update:model-value="toggleItem(item)" 
              :binary="true" 
            />
          </td>
          <template v-for="(field, fieldIndex) in displayFields" :key="fieldIndex">
            <td class="p-3" v-if="props_data.table_data && props_data.table_data.length > 0">
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
          
          <template v-for="slotName in Object.keys($slots).filter(name => name.startsWith('item.'))" :key="slotName">
            <td class="p-3">
              <slot :name="slotName" :item="item"></slot>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
  <Paginator
    v-model:first="first"
    :rows="10" 
    :total-records="120" 
    :rows-per-page-options="[10, 20, 30]"
  ></Paginator>
  <div
    v-if="props_data.table_data.length === 0"
    class="no-data flex justify-center uppercase" 
  >
    <p>No Data Available</p>
  </div>
</template>


<style lang="scss">
  .table-wrapper {
      overflow-x: auto;
      border-radius: var(--tbs-border-radius-sm);
      box-shadow: 2px 2px 5px color-mix(in srgb,var(--tbs-bg-primary-color-100),#000 8%);
  
      table {
        background: var(--tbs-table-bg-color);
        border-radius: var(--tbs-border-radius-sm);
        content-visibility: auto;

        img {
            min-width: 80px;
            max-height: 100px;
        }

        th {
            background: transparent; //reset
        }

        thead {
            tr {
                background: var(--tbs-table-head-bg-color);
            }
            * {
                color: var(--tbs-table-head-font-color);
            }
        }
        tbody tr {
            background: var(--tbs-table-row-bg-color);
            color: var(--tbs-table-row-font-color);
            transition: all ease 0.5s;
        }

        tr:nth-child(even) {
            /* 
                Adjust the value depending on your preference
                #fff - will make it lighten. if you want to darken change it to #000
                50% - the intensity
            */
            background: color-mix(in srgb,var(--tbs-table-row-bg-color),#fff 50%);
        }
        tbody tr:hover {
            background: color-mix(in srgb,var(--tbs-table-row-bg-color),#000 7%);
        }
    }
  }
</style>