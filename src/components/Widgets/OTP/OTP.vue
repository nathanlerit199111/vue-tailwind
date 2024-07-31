<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { InputComponent } from '@/components/index.js';

const props_data = defineProps({
    num_inputs: {
        type: Number,
        default: 6
    }
});

// Create reactive array of input values
const inputValues = ref(Array(props_data.num_inputs).fill(''));

// Function to Jump to another field after input
const handleInput = (event, index) => {
    const value = event.target.value;
    inputValues.value[index] = value;

    if (value && index < props_data.num_inputs - 1) {
        nextTick(() => {
            const nextInput = document.querySelector(`.otp-input[data-index="${index + 1}"]`);
            if (nextInput) {
                nextInput.focus();
            }
        });
    }
};
</script>

<template>
    <div class="otp-wrapper flex gap-2">
        <InputComponent
            v-for="(value, index) in inputValues"
            :key="index"
            class="otp-input w-full h-14"
            :type="'text'"
            :maxlength="1"
            :value="value"
            @input="event => handleInput(event, index)"
            aria-label="OTP Input"
            :data-index="index"
        />
    </div>
</template>

<style lang="scss">
    .otp-wrapper {
        max-width: 400px;
    }
</style>
