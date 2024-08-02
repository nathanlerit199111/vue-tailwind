<script setup>
  import { defineProps, defineEmits, computed } from 'vue'
  import FormWrapper from '@/components/Wrappers/FormWrapper.vue'
  import SVGIcon from '@/components/UIElements/SVGIcon.vue'
  import ButtonComponent from '@/components/UIElements/ButtonComponent.vue'

  const props_data = defineProps({
    tabs: {
      type: Array,
      default: () => []
    },
    step: {
      type: Number,
      default: 1
    },
    child_step_index: {
      type: Number,
      default: 1
    },
    back_label: {
      type: String,
      default: () => 'Back'
    },
    next_label: {
      type: String,
      default: () => 'Next'
    },
    submit_label: {
      type: String,
      default: () => 'Submit'
    },
    is_disable_back_btn: {
      type: Boolean,
      default: () => false
    },
    is_disable_next_btn: {
      type: Boolean,
      default: () => false
    },
    is_disable_submit_btn: {
      type: Boolean,
      default: () => false
    }
  })

  const tabsLength = computed(() => props_data.tabs.length)

  const childProgress = (tab, index) => Math.round((index / tab.length) * 100)

  const emit = defineEmits(['wizardNavigation', 'formSubmit'])

  const updateStep = (type) => {
    emit('wizardNavigation', type)
  }

  const formSubmit = () => {
    emit('formSubmit')
  }
</script>

<template>
  <div class="wizzard-wrapper">
    <div class="tabs">
      <div
        class="item"
        v-for="(tab, key) in props_data.tabs"
        :key="key"
      >
        <div
          :class="[
            'indicator',
            props_data.step > tab.index && 'indicator--fill',
            props_data.step == tab.index && 'indicator--progress'
          ]"
        >
          <SVGIcon
            v-if="props_data.step == tab.index"
            icon="circle-outline"
            fill="#ffffff"
            stroke="none"
          />
          <SVGIcon
            v-if="props_data.step > tab.index"
            icon="check"
            fill="#ffffff"
            stroke="none"
          />
        </div>
        <div
          v-if="tabsLength != key + 1"
          :class="[
            'line',
            props_data.step > tab.index && 'line--fill',
            props_data.step == tab.index && 'line--progress'
          ]"
        >
          <div
            v-if="props_data.step == tab.index && tab.child.length > 0"
            class="child-line"
            :style="{ width: `${childProgress(tab.child, props_data.child_step_index)}%` }"
          ></div>
        </div>
        <span
          v-if="props_data.step == tab.index"
          class="label"
        >
          {{ tab.name }}
        </span>
      </div>
    </div>
    <div class="form-container">
      <FormWrapper @submit.prevent="formSubmit">
        <slot />
        <div class="flex justify-end">
          <ButtonComponent
            v-if="props_data.step != 1"
            :label="props_data.back_label"
            btn_type="primary"
            variant=""
            size="large"
            :disabled="is_disable_back_btn"
            @click.prevent="updateStep('back')"
          />
          <ButtonComponent
            v-if="props_data.step != tabsLength"
            :label="props_data.next_label"
            btn_type="primary"
            variant="outlined"
            size="large"
            additional_class="ml-2"
            :disabled="is_disable_next_btn"
            @click.prevent="updateStep('next')"
          />
          <ButtonComponent
            v-if="props_data.step === tabsLength"
            :label="props_data.submit_label"
            btn_type="primary"
            variant=""
            size="large"
            additional_class="ml-2"
            :disabled="is_disable_submit_btn"
            @click.prevent="formSubmit()"
          />
        </div>
      </FormWrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wizzard-wrapper {
    position: relative;

    .tabs {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      margin: 0 -10px;

      .item {
        display: flex;
        justify-content: center;
        position: relative;
        flex: 0 0 calc((100% / v-bind(tabsLength)) - 20px);
        margin: 0 10px;
        max-width: 280px;

        .label {
          padding-top: 35px;
        }

        .indicator {
          display: flex;
          position: absolute;
          top: 0;
          left: calc(50% - 15px);
          justify-content: center;
          align-items: center;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: var(--tbs-wizard-bg-primary);
          overflow: hidden;
          pointer-events: none;
        }

        .indicator--progress {
          background-color: var(--tbs-wizard-bg-secondary);
        }

        .indicator--fill {
          background-color: var(--tbs-wizard-bg-success);
        }

        .line {
          position: absolute;
          top: 12px;
          left: calc(50% + 15px);
          width: calc(100% - 15px);
          height: 4px;
          background-color: var(--tbs-wizard-bg-primary);
          border-radius: 25px;

          .child-line {
            background-color: var(--tbs-wizard-bg-secondary);
            height: 100%;
            border-radius: 25px;
          }
        }

        .line--fill {
          background-color: var(--tbs-wizard-bg-success);
        }
      }
    }
  }
</style>
