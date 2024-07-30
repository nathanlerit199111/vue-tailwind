<script setup>
  import { ref } from 'vue'

  import SectionWrapper from '@/components/SectionWrapper.vue'
  import ContainerWrapper from '@/components/ContainerWrapper.vue'
  import RowWrapper from '@/components/RowWrapper.vue'
  import ColumnWrapper from '@/components/ColumnWrapper.vue'
  import SkeletonLoader from '@/components/Loaders/SkeletonLoader.vue'
  import WizardWrapper from '@/components/WizardWrapper.vue'

  let isLoading = ref(false)

  const tabs = ref([
    {
      name: 'Tab 1',
      index: 1,
      child: []
    },
    {
      name: 'Tab 2',
      index: 2,
      child: []
    },
    {
      name: 'Tab 3',
      index: 3,
      child: [
        {
          name: 'Tab 3 Index 1',
          index: 3.1
        },
        {
          name: 'Tab 3 Index 2',
          index: 3.2
        },
        {
          name: 'Tab 3 Index 3',
          index: 3.3
        },
        {
          name: 'Tab 3 Index 4',
          index: 3.3
        }
      ]
    },
    {
      name: 'Tab 4',
      index: 4,
      isFillUp: false,
      child: []
    },
    {
      name: 'Tab 5',
      index: 5,
      isFillUp: false,
      child: []
    }
  ])

  //Functions for form wizzard
  const activeStep = ref(1)
  const childStep = ref(1)
  const formData = ref({}) //data here

  const wizardNavigation = (type) => {
    const currentTab = tabs.value[activeStep.value - 1]
    const hasChildren = currentTab.child.length > 1

    if (type === 'next') {
      if (hasChildren && childStep.value < currentTab.child.length) {
        childStep.value++
      } else {
        activeStep.value++
        childStep.value = 1
      }
    } else if (type === 'back' && activeStep.value > 1) {
      if (hasChildren && childStep.value > 1) {
        childStep.value--
      } else {
        activeStep.value--
        const previousTab = tabs.value[activeStep.value - 1]
        childStep.value = previousTab.child.length || 1
      }
    }
  }

  const formSubmit = () => {
    alert('submit')
  }
</script>

<template>
  <SkeletonLoader
    v-if="isLoading"
    type="table"
  />
  <div v-if="!isLoading">
    <SectionWrapper>
      <ContainerWrapper>
        <RowWrapper additional_class="items-center">
          <ColumnWrapper additional_class="grow">
            <h3>Form Wizard</h3>
            <p>Example form wizard</p>
          </ColumnWrapper>
        </RowWrapper>
      </ContainerWrapper>
    </SectionWrapper>

    <SectionWrapper>
      <WizardWrapper
        :tabs="tabs"
        :step="activeStep"
        :child_step_index="childStep"
        back_label="Back Button"
        next_label="Next Button"
        submit_label="Submit Button"
        @wizardNavigation="wizardNavigation"
        @formSubmit="formSubmit"
      >
        <!-- All Input forms field here Example -->
        <template v-if="activeStep == 1"> Example Active Step 1 </template>
        <template v-if="activeStep == 2"> Example Active Step 2 </template>
        <template v-if="activeStep == 3">
          <template v-if="childStep == 1">Example Active Step 3.1</template>
          <template v-if="childStep == 2">Example Active Step 3.2</template>
          <template v-if="childStep == 3">Example Active Step 3.3</template>
          <template v-if="childStep == 4">Example Active Step 3.4</template>
        </template>
        <template v-if="activeStep == 4"> Example Active Step 4 </template>
        <template v-if="activeStep == 5"> Example Active Step 5 </template>
      </WizardWrapper>
    </SectionWrapper>
  </div>
</template>
