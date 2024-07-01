<!-- 
    USAGE

    <LottieComponent 
        animationSrc="test.json" 
        width="500px" 
        height="500px" 
        :loop="true" 
        :autoplay="true" 
    />
-->

<template>
  <div id="lottie" :style="{ width: containerWidth, height: containerHeight }"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import lottie from 'lottie-web';

// Define props
const props = defineProps({
  animationSrc: {
    type: [Object, String],
    required: true,
  },
  width: {
    type: String,
    default: '400px',
  },
  height: {
    type: String,
    default: '400px',
  },
  loop: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
});

// Reactive references for container dimensions
const containerWidth = ref(props.width);
const containerHeight = ref(props.height);

// Reference to the Lottie animation instance
let lottieInstance = null;

// Function to load the Lottie animation
const loadAnimation = async () => {
  // Clean up existing Lottie instance if present
  if (lottieInstance) {
    lottieInstance.destroy();
  }

  let animationData;

  if (typeof props.animationSrc === 'string') {
    // Check if it's a URL or a local path
    if (props.animationSrc.startsWith("https://") || props.animationSrc.startsWith("http://")) {
      // Fetch JSON from external URL
      const response = await fetch(props.animationSrc);
      animationData = await response.json();
    } else {
      // Use dynamic import for local files with Vite
      const animationUrl = new URL(
        `../../assets/lotties/${props.animationSrc}`,
        import.meta.url
      ).href;
      const response = await fetch(animationUrl);
      animationData = await response.json();
    }
  } else {
    // Directly use the provided JSON data object
    animationData = props.animationSrc;
  }

  // Initialize the Lottie animation
  lottieInstance = lottie.loadAnimation({
    container: document.getElementById('lottie'), // The element to render the animation
    renderer: 'svg',
    loop: props.loop,
    autoplay: props.autoplay,
    animationData: animationData, // Use the fetched or provided JSON data
  });
};

// Initialize Lottie animation on mount
onMounted(loadAnimation);

// Watch for changes in the animation source prop and reload the animation
watch(() => props.animationSrc, loadAnimation);

// Clean up Lottie animation instance before the component unmounts
onBeforeUnmount(() => {
  if (lottieInstance) {
    lottieInstance.destroy();
  }
});
</script>
