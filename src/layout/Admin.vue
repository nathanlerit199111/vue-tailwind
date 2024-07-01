<template>
  <div id="dashboard-wrapper">
    <SideNavComponent :mini="true" />
    <main>
      <HeaderComponent />
      <hr />
      <RouterView />
    </main>
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import 'primevue/resources/themes/aura-light-green/theme.css'

  import HeaderComponent from '@/components/Headers/HeaderComponent.vue'
  import SideNavComponent from '@/components/Navigations/SideNavComponent.vue'
</script>
