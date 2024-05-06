<script setup>
import { ref, onMounted } from 'vue'
import customConfig from '@/theme/theme.json';

import SectionWrapper from '@/components/SectionWrapper.vue'
import ContainerWrapper from '@/components/ContainerWrapper.vue'
import RowWrapper from '@/components/RowWrapper.vue'
import ColumnWrapper from '@/components/ColumnWrapper.vue'

//VUE PRIME
import Message from 'primevue/message';
import Button from 'primevue/button';
// import ColorPicker from 'primevue/colorpicker';

// Define a reactive reference to hold the temporary configuration
const TEMPORARYCONFIG = ref(customConfig);

// Function to save the configuration
const saveConfig = () => {
  // Assign the values from temporary storage to customConfig
  Object.assign(customConfig, TEMPORARYCONFIG.value);
  // Update the configuration in the backend or local storage
  localStorage.setItem('themeCSS', JSON.stringify(customConfig));
}



// Function to convert local storage data into desired format
const convertLocalStorageData = () => {
  const STOREDTHEMECSS = localStorage.getItem('themeCSS');
  if (STOREDTHEMECSS) {
    const parsedData = JSON.parse(STOREDTHEMECSS);
    const convertedData = {};

    for (const [key, value] of Object.entries(parsedData)) {
      const category = {};
      for (const [subKey, subValue] of Object.entries(value)) {
        category[subKey] = subValue;
      }
      convertedData[key] = category;
    }

    TEMPORARYCONFIG.value = convertedData;
  }
}
onMounted(() => {
  convertLocalStorageData();
})


</script>
<template>
  <SectionWrapper>
    <ContainerWrapper additional_class="max-w-5xl">
      <RowWrapper additional_class="items-center">
        <ColumnWrapper additional_class="w-9/12">
          <Message severity="warn">Be careful, changes cannot be undone</Message>
        </ColumnWrapper>
        <ColumnWrapper additional_class="w-3/12">
          <Button class="tbs-btn-primary" label="Sync Theme" />
        </ColumnWrapper>
      </RowWrapper>
    </ContainerWrapper>
  </SectionWrapper>


  <SectionWrapper>
    <ContainerWrapper additional_class="max-w-5xl">
      <RowWrapper v-for="(category, categoryName) in TEMPORARYCONFIG" :key="categoryName">
        <ColumnWrapper additional_class="w-full">
          <h3 class="uppercase text-lg font-bold mb-3">{{ categoryName }}</h3>
        </ColumnWrapper>
        <ColumnWrapper v-for="(colorValue, classLabel) in category" :key="classLabel" additional_class="sm:w-3/12">
          <div class="mb-4">
            <div>
              <label class="flex items-center mb-1">
                {{ classLabel }}
                <!-- <ColorPicker
                  v-if="classLabel.includes('color')"
                  v-model="category[classLabel]" 
                /> -->
                <color-picker
                  v-if="classLabel.includes('color')"
                  v-model:pureColor="category[classLabel]"
                />
              </label>
              
              <input v-model="category[classLabel]" type="text" class="border border-gray-300 rounded-md px-3 py-2 w-full" />
            </div>
          </div>
        </ColumnWrapper>
        <ColumnWrapper additional_class="w-full">
          <hr style="margin: 20px 0 30px 0"/>
        </ColumnWrapper>
      </RowWrapper>
    </ContainerWrapper>
  </SectionWrapper>

  <SectionWrapper>
    <ContainerWrapper additional_class="max-w-5xl">
      <RowWrapper>
        <ColumnWrapper>
          <Button 
              class="tbs-btn-secondary" 
              label="Save"
              @click="saveConfig()"
          />
        </ColumnWrapper>
      </RowWrapper>
    </ContainerWrapper>
  </SectionWrapper>
</template>

<style>
html #app .vc-color-wrap {
  width: 20px;
  height: 20px;
  border: solid 1px #858585; 
  border-radius: 3px;
  box-shadow: none;
  margin: 0 10px;
}
</style>