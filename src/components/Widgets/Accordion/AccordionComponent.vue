<script setup>
  import { ref, watch, onMounted, nextTick } from 'vue';
  import {
    SVGIcon
  } from '@/components/index.js'
  
  // Props definition
  const props_data = defineProps({
    items: {
      type: Array,
      required: true,
    },
    title_key: {
      type: String,
      default: 'title',
    },
    content_key: {
      type: String,
      default: 'content',
    },
    is_multiple: {
      type: Boolean,
      default: false,
    },
    left_icon: {
        type: String,
        default: ''
    },
    right_icon: {
        type: String,
        default: ''
    },
    is_icon_animate: {
        type: Boolean,
        default: true,
    }
  });
  
  // Internal state
  const openIndex = ref(props_data.isMultiple ? [] : null);
  const contentHeights = ref([]);
  
  // Methods
  const toggle = (index) => {
    if (props_data.isMultiple) {
      // Allow multiple accordions to be open
      if (openIndex.value.includes(index)) {
        openIndex.value = openIndex.value.filter(i => i !== index);
      } else {
        openIndex.value.push(index);
      }
    } else {
      // Only one accordion can be open at a time
      openIndex.value = openIndex.value === index ? null : index;
    }
  };
  
  const isOpen = (index) => {
    if (props_data.isMultiple) {
      // For multiple accordions, return true if index is in the open array
      return openIndex.value.includes(index);
    } else {
      // For single accordion mode, return true if index is the open index
      return openIndex.value === index;
    }
  };
  
  // Calculate maxHeight for each accordion content
  const calculateHeights = () => {
    nextTick(() => {
      const contentElements = document.querySelectorAll('.accordion-content');
      contentHeights.value = Array.from(contentElements).map(content => content.scrollHeight);
    });
  };
  
  onMounted(() => {
    calculateHeights();
  });
  
  watch(() => props_data.items, () => {
    calculateHeights();
  }, { deep: true });
  
  // Computed style for icon rotation
  const iconStyle = (index) => {
  return props_data.is_icon_animate
    ? { transform: isOpen(index) ? 'rotate(180deg)' : 'rotate(0deg)' }
    : {};
};

</script>

<template>
  <div class="accordion-wrapper">
    <div 
      v-for="(item, index) in items" 
      :key="index" 
      class="accordion-item"
    >
      <div 
        class="accordion-header" 
        @click="toggle(index)"
        :class="{ active: isOpen(index) }"
      >
        <!-- Left Icon -->
        <div v-if="props_data.left_icon" class="accordion-icon left" :style="iconStyle(index)">
          <SVGIcon :icon="props_data.left_icon" />
        </div>
  
        <!-- Title -->
        <h2 class="accordion-title">{{ item[title_key] }}</h2>
  
        <!-- Right Icon -->
        <div v-if="props_data.right_icon" class="accordion-icon right" :style="iconStyle(index)">
          <SVGIcon :icon="props_data.right_icon" />
        </div>
      </div>
  
      <div 
        class="accordion-content"
        :style="{ maxHeight: isOpen(index) ? `${contentHeights[index]}px` : '0px', opacity: isOpen(index) ? 1 : 0 }"
      >
        <div>
          <p>{{ item[content_key] }}</p>
          <slot :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped lang="scss">
  .accordion-wrapper {
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;

    .accordion-item {
        border-bottom: 1px solid #ddd;
        &:last-child {
            border-bottom: none;
        }
    }

    .accordion-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        cursor: pointer;
        background-color: #f1f1f1;
        font-weight: bold;
        transition: background-color 0.4s ease;

        &:hover,
        &.active {
            background-color: #ccc;
        }

        .accordion-title {
            flex-grow: 1;
        }
    }

    .accordion-icon {
        transition: transform 0.4s ease;
        .icon {
            transition: transform 0.4s ease;
        }
    }
    
    .accordion-content {
        overflow: hidden;
        background-color: #fff;
        transition: max-height 0.4s ease, opacity 0.4s ease;

        > div {
            padding: 20px;
        }
    }
  }

  
  
  

</style>
  