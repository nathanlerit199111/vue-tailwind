<script setup>
  import { ref } from 'vue'
  import FormWrapper from '@/components/FormWrapper.vue'
  import SVGIcon from '@/components/UIElements/SVGIcon.vue'

  const props_data = defineProps({
    tabs: {
      type: Array,
      default: () => []
    },
    step: {
      type: Number,
      default: () => 0
    },
    childStepIndex: {
      type: Number,
      default: () => 0
    }
  })

  const tabsLength = props_data.tabs.length
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
            icon="CircleOutline"
            fill="#ffffff"
            stroke="none"
          />
          <SVGIcon
            v-if="props_data.step > tab.index"
            icon="Check"
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
        ></div>
        <span
          v-if="props_data.step == tab.index"
          class="label"
          >{{ tab.name }}</span
        >
      </div>
    </div>
    <div class="content">
      <FormWrapper>
        <slot></slot>
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
          position: absolute;
          top: 0;
          left: calc(50% - 15px);
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: gray;
          overflow: hidden;
          pointer-events: none;
        }

        .indicator--progress {
          background-color: red;
        }

        .indicator--fill {
          background-color: green;
        }

        .line {
          position: absolute;
          top: 12px;
          left: calc(50% + 15px);
          width: calc(100% - 15px);
          height: 4px;
          background-color: gray;
          border-radius: 25px;
        }

        .line--fill {
          background-color: green;
        }
      }
    }
  }
</style>
