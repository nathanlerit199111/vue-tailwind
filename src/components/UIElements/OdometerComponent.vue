<script setup>
import { ref, computed, onMounted } from 'vue';

const props_data = defineProps({
  is_price: {
    type: Boolean,
    default: false
  },
  /*
    Increase the height here
    Height is set in JS variable because there is computation
  */
  height: {
    type: Number,
    default: 40
  }
})





const inputValue = ref(1000900);
// Compute the formatted value with commas
const formattedInputValue = computed(() => {
  return inputValue.value.toLocaleString();
});

// Compute the digits for the odometer display
const paddedDigits = computed(() => {
  // Ensure at least 6 digits by padding with leading zeros
  const minLength = 6;
  const s = props_data.is_price ? formattedInputValue.value.toString().padStart(minLength, '0') :
  inputValue.value.toString().padStart(minLength, '0');
  return s.split(''); // Keep the digits in the correct order
});


//REMOVE THIS CODE WHEN YOU ALREADY HAVE BACKEND DATA
const addRandomNumber = () => {
  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    inputValue.value += randomNumber;
  }, 2000);
};
onMounted(() => {
  addRandomNumber()
})
//END REMOVE THIS CODE WHEN YOU ALREADY HAVE BACKEND DATA
</script>
<template>
  <div class="flex">
    <div class="number-ticker flex" :style="{ height: props_data.height + 'px' }">
      <div
        v-for="(digit, digit_index) in paddedDigits"
        :key="digit_index"
        class="digit-wrapper px-1"
        :style="{ marginTop: `-${props_data.height * digit}px` }"
      >
        <!-- Check if digit is a comma or a digit -->
        <template v-if="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(digit)">
          <div 
            :style="{ height: props_data.height + 'px' }"
            class="digit flex items-center justify-center" 
            v-for="i in 10" :key="i">{{ i - 1 }}<br></div>
        </template>
        <template v-else>
          <div 
          :style="{ height: props_data.height + 'px' }"
          class="digit comma flex items-center justify-center">{{ digit }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.number-ticker {
  overflow: hidden;
  height: 50px;
  box-shadow: 0 0 5px black inset;
  border-radius: 5px;
  background: orange;
}

.digit-wrapper {
  width: 24px;
  transition: margin-top 1.75s ease;

  .digit, span {
    font-size: 25px;
  }

  //Adjust comma if too much width
  .comma {
    letter-spacing: -4.5px;
    text-indent: -4px;
  }
}
</style>
