<script setup>
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
    }
  });
</script>
<template>
  <table class="w-full">
    <thead>
      <tr>
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
</template>
