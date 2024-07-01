import { ref, onMounted, onUnmounted } from 'vue';

export function useViewport() {
  const isMobile = ref(false);

  const handleResize = () => {
    isMobile.value = window.innerWidth <= 640;
  };

  onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return { isMobile };
}
