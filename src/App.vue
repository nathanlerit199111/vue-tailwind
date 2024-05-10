<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { RouterView, useRoute } from 'vue-router'
  import 'primevue/resources/themes/aura-light-green/theme.css'

  import HeaderComponent from '@/components/Headers/HeaderComponent.vue'
  import SideNavComponent from '@/components/Navigations/SideNavComponent.vue'

  const route = useRoute()


  //Check if viewport is 640px (Mobile)
  let isMobile = ref(false)
  const handleResize = () => {
      isMobile.value = window.innerWidth <= 640
  }
  onMounted(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
  });
  onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
  })
</script>

<template>
  <div 
    v-if="route.path !== '/login' && route.path !== '/readme'" 
    id="dashboard-wrapper"
  >
    <!-- 
      mini - to set the default width of side navigation either mini or wide
     -->
    <SideNavComponent 
      :mini="true"
      :is_mobile="isMobile"
    />
    <main>
      <HeaderComponent />
      <hr/>
      <RouterView />
    </main>
  </div>
  <RouterView v-else />
</template>
